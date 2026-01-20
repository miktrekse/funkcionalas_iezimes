# 📊 Komponentes Sadalīšanas Analīze

## Pašreizējā Struktūra

```
Translations
  └── Table
      ├── TableHeader
      └── TableRow (N reizes)
```

## Detalizēts Pamatojums

### 1️⃣ `TableRow` Komponente — ✅ NEPIECIEŠAMA

**Kas notiek:**
```jsx
// Atkārtojam N reizes (7 Gherkin termini šajā gadījumā)
{data.map((row, index) => (
  <TableRow key={index} en={row.en} lv={row.lv} />
))}
```

**Kāpēc komponente?**
- ✅ Atkārtojums dinamisks (N reizes, var mainīties)
- ✅ Iespējams mainīt stilu/comportamnu vienam rindai
- ✅ Viegli testējams atseviķi
- ✅ React best practices

**Alternatīva (❌ Neizmantot):**
```jsx
// Sliktāk — bez komponentes
{data.map((row, index) => (
  <tr key={index}>
    <td>{row.en}</td>
    <td>{row.lv}</td>
  </tr>
))}
```

**Problēmas bez komponentes:**
- Sarežģīti testēt
- Sarežģīti mainīt CSS rindai
- Sarežģīti pievienot interaktivitāti (klikšķi, hover)

---

### 2️⃣ `TableHeader` Komponente — ✅ IETEICAMS

**Kas notiek:**
```jsx
function TableHeader() {
  return (
    <thead>
      <tr>
        <th>Angļu valodā</th>
        <th>Latviešu valodā</th>
      </tr>
    </thead>
  );
}
```

**Kāpēc komponente?**
- ✅ Atkārtojums — vienreiz (bet semantiski dažāds)
- ✅ Viegli lokalizēt (tulkojumi)
- ✅ Viegli mainīt CSS tikai virsrakstam
- ✅ Skaidra koda loģika

**Alternatīva (❌ Neizmantot):**
```jsx
// Sliktāk — virsraksts iekšā Table
function Table({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Angļu valodā</th>
          <th>Latviešu valodā</th>
        </tr>
      </thead>
      <tbody>
        {/* rindas ... */}
      </tbody>
    </table>
  );
}
```

**Problēmas bez komponentes:**
- Table komponente kļūst garāka
- Sarežģīt lokalizēt (virsraksti piekauto Table)
- CSS grūtāk separēt (virsraksts vs dati)

---

### 3️⃣ `TableCell` Komponente — ❌ NEVAJAG

**Kas būtu:**
```jsx
// ❌ PĀRSPĪLĒTI
function TableCell({ value }) {
  return <td>{value}</td>;
}

// TableRow.jsx
<TableCell value={en} />
<TableCell value={lv} />
```

**Kāpēc NE komponente?**
- ❌ Atkārtojums — tikai 2 šūnas rindā (nav ievērojamas atkārtošanās)
- ❌ Bez loģikas — tikai vienkārša JSX (`<td>{value}</td>`)
- ❌ Props drilling — `value={en}` ir trivials
- ❌ Performance — papildu React objekts bez labuma
- ❌ Sarežģīt nolasīt — `<TableCell />` vs `<td />`

**Kaut kam ir nepieciešama komponente:**

| Vērtība | TableCell | TableRow |
|---------|-----------|----------|
| **Atkārtojums?** | 2-3 reizes rindā (triviāls) | 7-100 reizes tabulā (ievērojams) |
| **Loģika?** | Neviena | key, map, filtering |
| **CSS?** | Standarta `<td>` stili | Rindai specifisks stils |
| **Testējamība?** | Nevajag separātu testu | Abus testēt |
| **Reusability?** | Nē — tikai šeit | Iespējams citas tabulas |

---

## 🎯 Komponentes Sadalīšanas Principi

### Atomic Design (Lietots šeit)

```
Atoms (nedaudz šeit)
  └── <th>, <td>, <tr>
  
Molecules (pamatā šeit)
  └── TableCell (❌ nevajag — triviāls atoms)
  
Organisms (šeit)
  └── TableRow (✅ vajag)
  └── TableHeader (✅ vajag)
  
Templates & Pages (šeit)
  └── Table
  └── Translations
```

### Praktiskie Noteikumi

| Noteikums | TableCell | TableRow | TableHeader |
|-----------|-----------|----------|-------------|
| **Atkārtojums** | Ja ≥ 5 reizes | ✅ Vienmēr | ✅ Vienmēr |
| **Loģika** | Ja ir UI loģika | ✅ Key, map | ✅ Lokalizācija |
| **Reusability** | Ja varētu atkārtot | ❌ Tikai šeit | ✅ Nākotne |
| **Testējamība** | Ja grūts testēt | ✅ Vienkārši | ✅ Vienkārši |

---

## 📈 Nākotne — Kā Paplašināt?

### Scenārijs 1: Vairāku Terminu Kopas

```jsx
// Iespējama tūlīt
function Translations() {
  const [activeTab, setActiveTab] = useState('gherkin');
  
  return (
    <>
      <button onClick={() => setActiveTab('gherkin')}>Gherkin</button>
      <button onClick={() => setActiveTab('cucumber')}>Cucumber</button>
      
      {activeTab === 'gherkin' && <Table data={gherkinTerms} />}
      {activeTab === 'cucumber' && <Table data={cucumberTerms} />}
    </>
  );
}
```

**Komponentes paliek skaistas!** ✅

### Scenārijs 2: Filtrējams Teksts

```jsx
// TableRow — viegli paplašināt
function TableRow({ en, lv, highlighted }) {
  return (
    <tr className={highlighted ? 'highlight' : ''}>
      <td>{en}</td>
      <td>{lv}</td>
    </tr>
  );
}
```

**Komponentes paliek modulāras!** ✅

### Scenārijs 3: Kliekšķējamas Rindas

```jsx
// TableRow — viegli paplašināt
function TableRow({ en, lv, onClick }) {
  return (
    <tr onClick={() => onClick(en, lv)} style={{ cursor: 'pointer' }}>
      <td>{en}</td>
      <td>{lv}</td>
    </tr>
  );
}
```

**Komponentes paliek paplašināmas!** ✅

---

## 📝 Secinājumi

| Komponente | Izmanto | Iemesls |
|------------|---------|---------|
| `Translations` | ✅ | Dati + izkārtojums |
| `Table` | ✅ | Tabulas loģika |
| `TableHeader` | ✅ | Semantika + lokalizācija |
| `TableRow` | ✅ | Atkārtojums + reusability |
| `TableCell` | ❌ | Pārspīlēti — triviāls HTML |

---

## 🧪 Kā Testēt Komponentes

```jsx
// TableRow.test.jsx
import { render } from '@testing-library/react';
import TableRow from './TableRow';

test('attēlo Gherkin terminu', () => {
  const { getByText } = render(
    <table><tbody><TableRow en="Feature" lv="Funkcionalitāte" /></tbody></table>
  );
  expect(getByText('Feature')).toBeInTheDocument();
  expect(getByText('Funkcionalitāte')).toBeInTheDocument();
});
```

**TableCell neizietu testā bez atkārtojuma!** ❌

---

## 💡 Ieteikums Nākotnei

**Ja** nākotnē parādīsies:
- ✅ Daudz terminu (100+) → pievienot virtualizāciju (`react-window`)
- ✅ Interaktīvi rindas → `onClick` uz `TableRow`
- ✅ Daudz kolonna → komponente katrai kolonnai
- ✅ Meklēšana/Filtrēšana → state management (`useState` vai Redux)

**Tad** komponentes būs pamatota jau skaista! 🎉
