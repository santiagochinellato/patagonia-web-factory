# Configuración de ngrok para Laboratorios Katz

## Estado de ngrok

✅ **ngrok está instalado globalmente** (versión 3.30.0)
✅ **Configuración válida** en `/home/santi/.config/ngrok/ngrok.yml`

## Cómo compartir tu web con un cliente

### Opción 1: Comando simple (recomendado)

```bash
# 1. Inicia el servidor de desarrollo
npm run dev:katz

# 2. En otra terminal, inicia ngrok
ngrok http 3000
```

### Opción 2: Con dominio personalizado (requiere cuenta Pro)

```bash
ngrok http 3000 --domain=tu-dominio.ngrok.app
```

### Opción 3: Script automatizado

Usa el script incluido en el proyecto:

```bash
npm run share:katz
```

Este script:
1. Verifica que el servidor esté corriendo
2. Inicia ngrok en el puerto 3000
3. Muestra la URL pública para compartir

## Información importante

- **Puerto**: Next.js corre en `http://localhost:3000`
- **URL pública**: ngrok generará una URL como `https://xxxx-xx-xx-xx-xx.ngrok-free.app`
- **Duración**: La sesión gratuita dura hasta que cierres el terminal
- **Límites**: Cuenta gratuita tiene límite de 40 conexiones/minuto

## Características de ngrok v3

- ✅ HTTPS automático
- ✅ Inspección de requests en `http://localhost:4040`
- ✅ Reconexión automática
- ✅ Compresión

## Troubleshooting

### El servidor no inicia
```bash
# Verificar que no haya otro proceso en el puerto 3000
lsof -i :3000
# Si hay algo, mátalo con: kill -9 <PID>
```

### ngrok no se conecta
```bash
# Verificar la configuración
ngrok config check

# Ver el authtoken
ngrok config get authtoken
```

### URL no accesible
- Verifica que tu servidor Next.js esté corriendo
- Confirma que ngrok esté conectado (debe mostrar "Session Status: online")
- Revisa el panel de inspección en http://localhost:4040

## Consejos para presentar al cliente

1. **Usa la URL HTTPS** que te da ngrok (más profesional)
2. **Comparte el panel de inspección** si necesitan ver requests/responses
3. **Advierte sobre el mensaje de advertencia** de ngrok en cuentas gratuitas
4. **Ten el proyecto en modo producción** para mejor performance:
   ```bash
   npm run build:katz
   npm run start:katz  # En lugar de dev
   ngrok http 3000
   ```

## Actualizar ngrok

```bash
# En caso de necesitar actualizar
ngrok update
```

## Cuenta Pro (opcional)

Para eliminar el mensaje de advertencia y obtener dominios personalizados:
- Visita: https://dashboard.ngrok.com/signup
- Planes desde $8/mes
