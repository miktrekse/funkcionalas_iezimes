# Funkcionālās iezīmes – Gherkin termini

Interaktīva React + Vite aplikācija, kurā parādīti Gherkin termini ar tulkojumiem no angļu valodas uz latviešu valodu.

## 🚀 Ātri sākt

```bash
# Instalējam atkarības
npm install

# Attīstības režīms (HMR ar brīvu atsvaidzināšanu)
npm run dev

# Produkcijas versija
npm run build

# Lokālā pārskats
npm run preview
```

## 📁 Komponentes arhitektūra

Projekts sadalīts pēc **atomic design** principiem:

- **App.jsx** — galvenā komponente
- **Translations.jsx** — dati un izkārtojums
- **Table.jsx** — tabulas loģika
- **TableHeader.jsx** — virsraksti (atkārtojas vienreiz)
- **TableRow.jsx** — atsevišķa rinda (atkārtojas N reizes)

### Kāpēc šāda sadalīšana?

✅ **Rinda (TableRow)** — komponente jāveido, jo atkārtojas dinamiskā sarakstā  
✅ **Virsraksts (TableHeader)** — atdalīts dēļ semantiskas nozīmes  
❌ **Šūna (TableCell)** — nav nepieciešama (bez loģikas)

## 📦 Deployment

### Vercel

```bash
npm run deploy:vercel
```

vai tieši [vercel.com](https://vercel.com) ar GitHub savienojumu.

### Cloudflare Pages

```bash
npm run deploy:cloudflare
```

vai [dash.cloudflare.com/pages](https://dash.cloudflare.com/pages) ar GitHub savienojumu.

## 🔧 Rīki

- **Vite** — ātrs build rīks
- **React 19** — jaunākā versija
- **ESLint** — koda kvalitāte
- **Vercel** — deployment
- **Cloudflare Pages** — deployment

## 📚 Dokumentācija

- **[QUICKSTART.md](./QUICKSTART.md)** — 60 sekundes ātrs sākums (SĀKT ŠEIT!)
- **[COMPONENTS_ANALYSIS.md](./COMPONENTS_ANALYSIS.md)** — Detalizēta komponenšu sadalīšanas analīze
- **[DATA_FLOW.md](./DATA_FLOW.md)** — Props, datu plūsma un React paradigmas
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** — Pilni deployment instrukcijas
- **[DOCUMENTATION.md](./DOCUMENTATION.md)** — Pilna projekta dokumentācija
- **[CHECKLIST.md](./CHECKLIST.md)** — Projekta pabeigšanas checklist

## 📄 Licences

MIT

