#!/bin/bash

# Script simple para iniciar ngrok rápidamente
# Uso: ./scripts/ngrok-quick.sh

echo "🌐 Iniciando ngrok en puerto 3000..."
echo "📊 Panel de inspección: http://localhost:4040"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

ngrok http 3000
