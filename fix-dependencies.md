# Napraw Dependencies - Node Modules Issue

## Problem
```
[plugin:vite:react-babel] Error parsing /Users/.../node_modules/yallist/package.json: Unexpected end of JSON input
```

## Rozwiązania (wykonaj w kolejności):

### 1. Usuń node_modules i package-lock.json
```bash
rm -rf node_modules
rm -rf package-lock.json
# lub na Windows:
# rmdir /s node_modules
# del package-lock.json
```

### 2. Wyczyść cache npm
```bash
npm cache clean --force
```

### 3. Zainstaluj ponownie zależności
```bash
npm install
```

### 4. Jeśli nadal nie działa, sprawdź wersję Node.js
```bash
node --version
npm --version
```
**Wymagane:** Node.js 16+ oraz npm 8+

### 5. Alternatywne rozwiązanie - użyj yarn
```bash
# Usuń node_modules
rm -rf node_modules

# Zainstaluj yarn (jeśli nie masz)
npm install -g yarn

# Zainstaluj zależności przez yarn
yarn install

# Uruchom projekt
yarn dev
```

### 6. Ostateczne rozwiązanie - reinstalacja konkretnych pakietów
```bash
npm uninstall yallist lru-cache @babel/core @babel/helper-compilation-targets
npm install yallist@latest lru-cache@latest @babel/core@latest @babel/helper-compilation-targets@latest
```

## Sprawdź czy projekt działa:
```bash
npm run dev
```