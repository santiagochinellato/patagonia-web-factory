#!/bin/bash

# Script para compartir Laboratorios Katz con ngrok
# Uso: npm run share:katz

set -e

PUERTO=3000
PROYECTO="laboratorios-katz"

echo "🚀 Configurando ngrok para compartir Laboratorios Katz..."
echo ""

# Verificar si ngrok está instalado
if ! command -v ngrok &> /dev/null; then
    echo "❌ Error: ngrok no está instalado"
    echo "   Instala ngrok desde: https://ngrok.com/download"
    exit 1
fi

echo "✅ ngrok está instalado ($(ngrok version))"
echo ""

# Verificar si el servidor está corriendo en el puerto 3000
if lsof -Pi :$PUERTO -sTCP:LISTEN -t >/dev/null 2>&1 ; then
    echo "✅ Servidor Next.js detectado en puerto $PUERTO"
    echo ""
else
    echo "⚠️  No se detectó servidor en puerto $PUERTO"
    echo ""
    echo "Opciones:"
    echo "  1. Iniciar servidor de desarrollo: npm run dev:katz"
    echo "  2. Iniciar servidor de producción:"
    echo "     npm run build:katz"
    echo "     npm run start:katz"
    echo ""
    read -p "¿Deseas iniciar el servidor de desarrollo ahora? (s/n): " -n 1 -r
    echo ""
    
    if [[ $REPLY =~ ^[Ss]$ ]]; then
        echo "🔄 Iniciando servidor de desarrollo..."
        echo ""
        
        # Iniciar servidor en background redirigiendo output a un archivo temporal
        LOGFILE=$(mktemp)
        npm run dev:katz > "$LOGFILE" 2>&1 &
        SERVER_PID=$!
        
        # Esperar a que el servidor esté listo
        echo "⏳ Esperando a que el servidor esté listo (esto puede tomar 10-15 segundos)..."
        WAITED=0
        MAX_WAIT=60
        
        while [ $WAITED -lt $MAX_WAIT ]; do
            # Verificar si el proceso sigue vivo
            if ! kill -0 $SERVER_PID 2>/dev/null; then
                echo ""
                echo "❌ El proceso del servidor terminó inesperadamente"
                echo "📋 Log del servidor:"
                cat "$LOGFILE"
                rm -f "$LOGFILE"
                exit 1
            fi
            
            # Verificar si el puerto está escuchando
            if lsof -Pi :$PUERTO -sTCP:LISTEN -t >/dev/null 2>&1 ; then
                echo ""
                echo "✅ Servidor listo en http://localhost:$PUERTO"
                echo ""
                # Esperar 2 segundos adicionales para asegurar que está completamente listo
                sleep 2
                rm -f "$LOGFILE"
                break
            fi
            
            sleep 1
            WAITED=$((WAITED + 1))
            
            # Mostrar progreso cada 5 segundos
            if [ $((WAITED % 5)) -eq 0 ]; then
                echo -n "."
            fi
        done
        
        if ! lsof -Pi :$PUERTO -sTCP:LISTEN -t >/dev/null 2>&1 ; then
            echo ""
            echo "❌ El servidor no pudo iniciarse en $MAX_WAIT segundos"
            echo "📋 Log del servidor:"
            cat "$LOGFILE"
            kill $SERVER_PID 2>/dev/null || true
            rm -f "$LOGFILE"
            exit 1
        fi
    else
        echo "❌ Debes tener el servidor corriendo primero"
        exit 1
    fi
fi

# Mostrar información antes de iniciar ngrok
echo "📋 Información del túnel:"
echo "   Puerto local: $PUERTO"
echo "   Proyecto: $PROYECTO"
echo "   Panel de inspección: http://localhost:4040"
echo ""
echo "💡 Consejos:"
echo "   - Comparte la URL HTTPS con tu cliente"
echo "   - El túnel permanece activo hasta que presiones Ctrl+C"
echo "   - Para mejor rendimiento, usa el servidor de producción"
echo ""
echo "🌐 Iniciando ngrok..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Iniciar ngrok
ngrok http $PUERTO

# Este código se ejecuta cuando se cierra ngrok (Ctrl+C)
echo ""
echo "👋 Túnel cerrado"

# Si iniciamos el servidor, preguntamos si detenerlo
if [ ! -z "$SERVER_PID" ]; then
    echo ""
    read -p "¿Deseas detener el servidor de desarrollo? (s/n): " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Ss]$ ]]; then
        kill $SERVER_PID 2>/dev/null || true
        echo "✅ Servidor detenido"
    fi
fi
