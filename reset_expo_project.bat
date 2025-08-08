@echo off
echo ===============================
echo 🔄 RESETEANDO Y CONFIGURANDO PROYECTO EXPO
echo ===============================

:: Paso 1: Eliminar node_modules y archivos de lock
echo 🧹 Eliminando node_modules y package-lock.json...
rmdir /s /q node_modules
del package-lock.json

:: Paso 2: Eliminar carpetas .expo y .expo-shared
echo 🧹 Eliminando .expo y .expo-shared...
rmdir /s /q .expo
rmdir /s /q .expo-shared

:: Paso 3: Reinstalar dependencias base
echo 📦 Instalando dependencias base...
npm install

:: Paso 4: Downgrade de expo-router (versión estable y compatible)
echo ⬇️ Instalando expo-router@5.0.4...
npm install expo-router@5.0.4

:: Paso 5: Instalar hermes-parser manualmente
echo 📥 Instalando hermes-parser...
npm install hermes-parser

:: Paso 6: Instalar expo-modules-core (requerido por expo-constants)
echo 📥 Instalando expo-modules-core...
npm install expo-modules-core

:: Paso 7: Crear babel.config.js
echo 🛠️ Generando babel.config.js...
(
echo module.exports = function(api) {
echo ^  api.cache(true);
echo ^  return {
echo ^    presets: ['babel-preset-expo'],
echo ^  };
echo };
) > babel.config.js

:: Paso 8: Limpiar caché de Metro bundler y abrir proyecto
echo 🧼 Limpiando caché de bundler y ejecutando Expo...
npx expo start -c

echo ✅ Proyecto limpio y listo para usar 🚀
pause
