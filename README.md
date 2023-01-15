# ewa-book-store
A Book Ecommerce Store we made during a module in our University HTW - Dresden
Running example under:
* http://ivm108.informatik.htw-dresden.de/ewa/g09/beleg/
NOTE: This project is not finished yet!

# 1. DB setup

### 1.1 Setup Xamp mit Apache und Mysql

### 1.2 Erstelle Tabelle 'ewa_apl'

### 1.3 Füge in die DB nun die Befehle aus 'buecher.sql' ein um die Produkt Bücher Tabelle zu erhalten und Inhalt

# 2. vue-book-store-frontend

### 2.1 Project setup | install packages
```
npm install
```
### 2.2 Client starten
```
npm run server
```

# 3. vue-book-store-backend

### 3.1 Project setup
```
npm install
```
### 3.2 Server starten
```
node server.js
```

# 4. .env erstellen
```
Innerhalb 'vue-store-backend' befindet sich eine .env-example datei
Diese kopieren und in ".env" umbennen.
Public und Secret aus Stripe übernehmen um Zahlungen zu erstellen
```
# 5. Client läuft nun auf http:\\localhost:8080 und server auf http:\\localhost:5000
