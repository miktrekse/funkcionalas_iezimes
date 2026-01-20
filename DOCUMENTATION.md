# Funkcionālās iezīmes – Gherkin termini

React projekts, kurš parāda Gherkin terminu tulkojumus no angļu valodas uz latviešu valodu.

## Komponentes arhitektūra

```
App.jsx
  └── Translations.jsx
        └── Table.jsx
              ├── TableHeader.jsx
              └── TableRow.jsx
```

### Komponenšu sadalīšanas analīze

Pašreizējā sadalīšana ir **optimāla**:

| Komponente | Iemesls | Alternatīva | Kāpēc nē? |
|---|---|---|---|
| `Table` | Satur loģiku un datus, nosaka kopējo struktūru | Saglabāt Translations | Atdalīšana veicina pārbaudi un pārvietošanu |
| `TableHeader` | Atkārtojas vienreiz, bet ir semantiski atšķirīga | Iekļaut Table | Atdalīšana vienkāršo izlasi un ļauj viegli mainīt |
| `TableRow` | Atkārtojas N reizes (katram terminam) | Iekļaut Table | **Nepieciešama** — jāattēlo dinamiskos datus |
| `TableCell` | Nē – tikai viena vērtība | Jauna komponente | Pārspīlēta — bez loģikas, izmantojam `<td>` |

### Kāpēc neizveidos `TableCell` komponentu?

```jsx
// ❌ Pārspīlēti — bez loģikas vai atkārtojuma
function TableCell({ value }) {
  return <td>{value}</td>;
}

// ✅ Pareizi — tikai vienkārša vērtības attēlošana
<td>{en}</td>
```

## Projekta struktura

```
src/
├── App.jsx              # Galvenā komponente
├── main.jsx            # Ieejas punkts
├── index.css           # Globālie stili
└── assets/components/
    ├── Translations.jsx     # Tulkojumu sekcija
    ├── Table.jsx            # Tabulas komponente ar datiem
    ├── TableHeader.jsx      # Tabulas virsraksts
    └── TableRow.jsx         # Viena tabulas rinda
```

## Installācija

```bash
npm install
```

## Attīstības režīms

```bash
npm run dev
```

Atvērt [http://localhost:5173](http://localhost:5173) pārlūkprogrammā.

## Produkcijas versija

```bash
npm run build
npm run preview
```

## Deployment

### Vercel

1. Inicializēt Git repozitoriju:
```bash
git init
git add .
git commit -m "Initial commit"
```

2. Augšupielādēt uz GitHub
3. Atvērt [vercel.com](https://vercel.com)
4. Savienot GitHub repozitoriju
5. Vercel automātiski izvēlēsies `vercel.json` konfigurāciju

### Cloudflare Pages

1. Augšupielādēt uz GitHub
2. Atvērt [dash.cloudflare.com/pages](https://dash.cloudflare.com/pages)
3. Savienot GitHub repozitoriju
4. Build command: `npm run build`
5. Build output directory: `dist`
6. Cloudflare automātiski izvēlēsies `_redirects` failu

### Lokāla testēšana pirms deployment

```bash
npm run build
npm run preview
```

## Gherkin termini

| Angļu | Latviski |
|---|---|
| Feature | Funkcionalitāte |
| Scenario | Scenārijs |
| Given | Ņemot vērā |
| When | Kad |
| Then | Tad |
| And | Un |
| But | Bet |

## Licences

MIT
