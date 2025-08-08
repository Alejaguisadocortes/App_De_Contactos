@echo off
echo ===============================
echo 🌐 INSTALANDO expo-image CON SOPORTE DE RED
echo ===============================

:: Paso 1: Limpiar la caché de npm
echo 🧼 Limpiando caché de npm...
npm cache clean --force

:: Paso 2: Aumentar tiempos de espera de red
echo 🕒 Ajustando configuraciones de red de npm...
npm config set fetch-timeout 60000
npm config set network-timeout 60000

:: Paso 3: Intentar instalar expo-image
echo 📦 Instalando expo-image...
npm install --save expo-image --force

:: Verificación
IF %ERRORLEVEL% NEQ 0 (
    echo ❌ La instalación falló. Verifica tu conexión a internet o prueba otra red.
) ELSE (
    echo ✅ Instalación completada correctamente.
)

pause