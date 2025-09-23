#!/bin/bash

echo "🔧 Naprawiam projekt React..."

# Usuń node_modules i lock file
echo "1️⃣ Usuwam node_modules i package-lock.json..."
rm -rf node_modules
rm -rf package-lock.json
rm -rf yarn.lock

# Wyczyść cache
echo "2️⃣ Czyszczę cache npm..."
npm cache clean --force

# Sprawdź wersje
echo "3️⃣ Sprawdzam wersje Node.js i npm..."
echo "Node.js version: $(node --version)"
echo "NPM version: $(npm --version)"

# Zainstaluj zależności
echo "4️⃣ Instaluję zależności..."
npm install

echo "✅ Gotowe! Teraz uruchom: npm run dev"