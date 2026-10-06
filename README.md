# Minha Vida Financeira

Controle de gastos, metas, reserva e investimentos.

🌐 Site no ar via GitHub Pages: `https://s4guadin.github.io/minha-vida-financeira/`

## Estrutura

```
├── index.html      # frontend: estrutura da página
├── styles.css      # frontend: todo o visual (temas claro/escuro, responsivo)
├── app.js          # frontend: lógica do app (usa localStorage; sincroniza com a API se houver backend)
└── backend/
    ├── server.js   # backend: Node + Express, serve o frontend e expõe /api/data
    ├── package.json
    └── db.json     # criado automaticamente com seus dados (não versionado)
```

## Rodar só o frontend (como no GitHub Pages)

Basta abrir `index.html` ou servir a pasta raiz com qualquer servidor estático.
Os dados ficam no `localStorage` do navegador.

## Rodar com backend (PC ou outro dispositivo na mesma rede)

```bash
cd backend
npm install
npm start
```

Acesse `http://localhost:3000`. O app salva no navegador e espelha
automaticamente para `backend/db.json` via `PUT /api/data`.

> GitHub Pages só hospeda o frontend. Para o backend ficar no ar, publique
> `backend/` em um serviço Node (Render, Railway, VPS etc.).
