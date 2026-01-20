# 🚀 Quick Start Guide

## ⚡ 60 Sekundes Ātrs Sākums

### 1. Instalācija (15 sekunden)
```bash
cd funkcionalas_iezimes
npm install
```

### 2. Attīstības Režīms (10 sekundes)
```bash
npm run dev
```
Atvērt: **http://localhost:5173** 🎉

### 3. Pārbaude (35 sekundes)
- ✅ Redz virsrakstu "Funkcionālās iezīmes – Gherkin termini"
- ✅ Redz tabulu ar 2 kolonnām
- ✅ Redz 7 rindas ar Gherkin terminiem

---

## 📁 Failu Struktura (Ar Komentāriem)

```
src/
├── main.jsx           ← Ieejas punkts
├── App.jsx            ← Galvenā komponente
├── index.css          ← Globālie stili
└── assets/components/
    ├── Translations.jsx    ← Dati (gherkinTerms)
    ├── Table.jsx           ← Tabulas loģika
    ├── TableHeader.jsx     ← Virsraksti
    └── TableRow.jsx        ← Viena rinda
```

---

## 🔧 Komandi

```bash
# Attīstības režīms
npm run dev

# Build produkcijas versiju
npm run build

# Skatīt produced version lokāli
npm run preview

# Deployēt uz Vercel
npm run deploy:vercel

# Deployēt uz Cloudflare Pages
npm run deploy:cloudflare
```

---

## 📊 Komponentes Vienkāršoti

```jsx
// App.jsx — Sāk šeit!
<h1>Tituls</h1>
<Translations />

// Translations.jsx — Satur datus
const gherkinTerms = [...]
<Table data={gherkinTerms} />

// Table.jsx — Tabulas struktūra
<table>
  <TableHeader />
  <tbody>
    {gherkinTerms.map(term => (
      <TableRow en={term.en} lv={term.lv} />
    ))}
  </tbody>
</table>

// TableHeader.jsx — Virsraksti
<thead><tr><th>EN</th><th>LV</th></tr></thead>

// TableRow.jsx — Viena rinda
<tr><td>{en}</td><td>{lv}</td></tr>
```

---

## ❓ FAQ

### Q: Kur ir komponentes?
**A:** `src/assets/components/`

### Q: Kur ir dati?
**A:** `src/assets/components/Translations.jsx` — `gherkinTerms` array

### Q: Kā pievienot jaunu terminu?
**A:** Translations.jsx → `gherkinTerms` array
```jsx
{ en: "Background", lv: "Pamatne" }
```

### Q: Kā mainīt virsrakstus?
**A:** `TableHeader.jsx` → `<th>` teksts

### Q: Kā pievienot CSS?
**A:** `src/index.css` — globālie stili vai inline `style={{}}` prop-ā

### Q: Kā nodorļaut?
**A:** Skat. [DEPLOYMENT.md](./DEPLOYMENT.md)

---

## 🎯 Trīs Galvenās Idejas

### 1. Data Down, Events Up
```
Translations (dati)
    ↓
Table (props)
    ↓
TableRow (map)
```

### 2. Komponentes Sadalīšana
- ✅ `TableRow` — atkārtojas 7x
- ✅ `TableHeader` — semantika
- ❌ `TableCell` — pārspīlēti

### 3. Deploy viegli
- Vercel: GitHub push → automātisks build
- Cloudflare: GitHub push → automātisks build

---

## 🧪 Tests Lokāli

```bash
# Skatīt build
npm run build

# Skatīt rezultātu
npm run preview

# Pārbaude koda kvalitāti
npm run lint
```

---

## 📚 Detalizēt

- Komponentes sadalīšana: [COMPONENTS_ANALYSIS.md](./COMPONENTS_ANALYSIS.md)
- Datu plūsma: [DATA_FLOW.md](./DATA_FLOW.md)
- Deployment: [DEPLOYMENT.md](./DEPLOYMENT.md)
- Pilnā dokumentācija: [DOCUMENTATION.md](./DOCUMENTATION.md)

---

## 🎓 Mācības Mērķi

Šis projekts iemāca:

1. **React Komponentes** — Kā tās veidot
2. **Props Passing** — Kā nodot datus
3. **Array Mapping** — Kā renderēt sarakstus
4. **Vite Build** — Kā samaksāt projektu
5. **Deployment** — Kā nodorļaut pasaulei

---

## 🚀 Production Ready?

Jā! Gatavs deployment bez problēmām.

```bash
# 1. Build
npm run build

# 2. Skatīt
npm run preview

# 3. Deploy
npm run deploy:vercel
# vai
npm run deploy:cloudflare
```

---

**Jautājumi?** Skatiet dokumentāciju — visos jautājumos ir atbildes! 📚✨
