# 📖 Projekta Navigācija & Index

## 🎯 Sākt Šeit

1. **Pirmais solis:** [QUICKSTART.md](./QUICKSTART.md) — 60 sekundes setup
2. **Saprast kodu:** [COMPONENTS_ANALYSIS.md](./COMPONENTS_ANALYSIS.md)
3. **Saprast datus:** [DATA_FLOW.md](./DATA_FLOW.md)
4. **Deployēt:** [DEPLOYMENT.md](./DEPLOYMENT.md)

---

## 📚 Visa Dokumentācija

| Dokuments | Ilgums | Mērķis |
|---|---|---|
| [QUICKSTART.md](./QUICKSTART.md) | 5 min | Ātrs sākums (npm run dev) |
| [README.md](./README.md) | 3 min | Projekta pārskats |
| [COMPONENTS_ANALYSIS.md](./COMPONENTS_ANALYSIS.md) | 15 min | Komponenšu dizainu analīze |
| [DATA_FLOW.md](./DATA_FLOW.md) | 10 min | Props, stāvoklis, render |
| [DEPLOYMENT.md](./DEPLOYMENT.md) | 20 min | Vercel & Cloudflare |
| [DOCUMENTATION.md](./DOCUMENTATION.md) | 10 min | Detalizēts ceļvedis |
| [CHECKLIST.md](./CHECKLIST.md) | 5 min | Projekta pabeigšana |

---

## 🗂️ Failu Struktūra

```
src/
├── main.jsx                          # Ieejas punkts
├── App.jsx                           # Galvenā komponente
├── index.css                         # Globālie stili
└── assets/components/
    ├── Translations.jsx              # Dati (gherkinTerms)
    ├── Table.jsx                     # Tabulas loģika
    ├── TableHeader.jsx               # Virsraksti
    └── TableRow.jsx                  # Viena rinda

Deployment:
├── vercel.json                       # Vercel konfigurācija
├── wrangler.toml                     # Cloudflare konfigurācija
├── netlify.toml                      # Netlify konfigurācija (bonus)
├── _redirects                        # SPA support
├── _headers                          # Cache control
└── .vercelignore                     # Vercel ignores

Dokumentācija:
├── README.md                         # Projekta pārskats
├── QUICKSTART.md                     # 60 sekundes ātrs sākums
├── COMPONENTS_ANALYSIS.md            # Komponenšu analīze
├── DATA_FLOW.md                      # Datu plūsma
├── DEPLOYMENT.md                     # Deployment instrukcijas
├── DOCUMENTATION.md                  # Pilnā dokumentācija
├── CHECKLIST.md                      # Pabeigšanas checklist
└── INDEX.md                          # Šis fails
```

---

## 🎓 Mācību Ceļš

### Iesācējs (30 min)
1. [QUICKSTART.md](./QUICKSTART.md) — Palaidiet `npm run dev`
2. [README.md](./README.md) — Saprast, kas tiek sūtīts
3. Palaist projektu lokāli

### Pamatskolēns (1 stunda)
4. [COMPONENTS_ANALYSIS.md](./COMPONENTS_ANALYSIS.md) — Kāpēc TableRow bet ne TableCell?
5. Mainīt gherkinTerms datumā Translations.jsx
6. Pievienot savu CSS index.css

### Eksperts (2+ stundas)
7. [DATA_FLOW.md](./DATA_FLOW.md) — Piedziļinājies React paradigmas
8. [DEPLOYMENT.md](./DEPLOYMENT.md) — Nodorlējiet uz Vercel vai Cloudflare
9. Paplašiniet: meklēšanu, filtrējumu, lokalizāciju

---

## 🚀 Komandu Atsauce

```bash
# Attīstības režīms
npm run dev

# Build produkcijas versiju
npm run build

# Skatīt produced version
npm run preview

# Koda kvalitāte
npm run lint

# Deployēt uz Vercel
npm run deploy:vercel

# Deployēt uz Cloudflare Pages
npm run deploy:cloudflare
```

---

## 🎯 Projekta Mērķi

✅ Parādīt Gherkin terminu tulkojumus  
✅ Demonstrēt React komponenšu sadalīšanu  
✅ Demonstrēt props passing & data flow  
✅ Demonstrēt Vite setup  
✅ Demonstrēt Vercel/Cloudflare deployment  
✅ Sniegt detalizētu dokumentāciju  

---

## ❓ Bieži Uzdotie Jautājumi

### Kur sākt?
**→ [QUICKSTART.md](./QUICKSTART.md)**

### Kā uzlabotā komponentes?
**→ [COMPONENTS_ANALYSIS.md](./COMPONENTS_ANALYSIS.md)**

### Kā saprast datu plūsmu?
**→ [DATA_FLOW.md](./DATA_FLOW.md)**

### Kā nodorlējiet?
**→ [DEPLOYMENT.md](./DEPLOYMENT.md)**

### Kā mainīt datus?
**→ [README.md](./README.md#-pievienot-jaunu-terminu)**

---

## 📞 Atbalsts

Ja jums ir jautājumi par:

- **Komponentes** — skatiet [COMPONENTS_ANALYSIS.md](./COMPONENTS_ANALYSIS.md)
- **Props** — skatiet [DATA_FLOW.md](./DATA_FLOW.md)
- **Setup** — skatiet [QUICKSTART.md](./QUICKSTART.md)
- **Deployment** — skatiet [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Viss pārējais** — skatiet [DOCUMENTATION.md](./DOCUMENTATION.md)

---

## 🎉 Gatavs?

1. `npm install`
2. `npm run dev`
3. Atvērt [http://localhost:5173](http://localhost:5173)
4. Sākat kodēt!

---

**Lai veicas! 🚀**
