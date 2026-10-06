// Backend Minha Vida Financeira — Node + Express.
// Serve o frontend (pasta raiz) e expõe uma API mínima de persistência:
//   GET  /api/data  -> { data: <estado> }
//   PUT  /api/data  -> salva o estado em backend/db.json
// Sem banco de dados: os dados ficam em db.json no servidor.
// O frontend continua funcionando 100% offline via localStorage quando
// a API não está disponível (ex.: GitHub Pages).
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DB_FILE = path.join(__dirname, 'db.json');

app.use(express.json({ limit: '5mb' }));

function readDb() {
  try {
    return JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
  } catch (e) {
    return null;
  }
}

function writeDb(data) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf8');
}

app.get('/api/health', (req, res) => res.json({ ok: true }));

app.get('/api/data', (req, res) => {
  res.json({ data: readDb() });
});

app.put('/api/data', (req, res) => {
  if (!req.body || (!req.body.inc && !req.body.exp)) {
    return res.status(400).json({ error: 'estado invalido' });
  }
  writeDb(req.body);
  res.json({ ok: true });
});

// Frontend estático (index.html, styles.css, app.js na raiz do repo)
app.use(express.static(path.join(__dirname, '..')));

app.listen(PORT, () => {
  console.log(`Minha Vida Financeira rodando em http://localhost:${PORT}`);
});
