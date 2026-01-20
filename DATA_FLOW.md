# 🔄 Komponentes Datu Plūsma (Data Flow)

## 1. Render Hierarhija

```
App
 └─ Translations (sekcija)
     └─ Table (tabula + dati)
        ├─ TableHeader (virsraksti)
        │   └─ <thead> → <tr> → <th>Angļu valodā</th> + <th>Latviešu valodā</th>
        │
        └─ <tbody>
            ├─ TableRow (index: 0) → <tr> → <td>Feature</td> + <td>Funkcionalitāte</td>
            ├─ TableRow (index: 1) → <tr> → <td>Scenario</td> + <td>Scenārijs</td>
            ├─ TableRow (index: 2) → <tr> → <td>Given</td> + <td>Ņemot vērā</td>
            ├─ TableRow (index: 3) → <tr> → <td>When</td> + <td>Kad</td>
            ├─ TableRow (index: 4) → <tr> → <td>Then</td> + <td>Tad</td>
            ├─ TableRow (index: 5) → <tr> → <td>And</td> + <td>Un</td>
            └─ TableRow (index: 6) → <tr> → <td>But</td> + <td>Bet</td>
```

## 2. Props Plūsma (Ko Katrā Komponentē Notiek)

### App.jsx
```jsx
function App() {
  // Rāda virsrakstu
  // Komponē Translations
  return (
    <div>
      <h1>Funkcionālās iezīmes – Gherkin termini</h1>
      <Translations />  ← Bez props!
    </div>
  );
}
```

### Translations.jsx
```jsx
function Translations() {
  const gherkinTerms = [  // DATI ŠEIT!
    { en: "Feature", lv: "Funkcionalitāte" },
    // ... 6 vēl
  ];

  return (
    <section>
      <h2>Gherkin termini</h2>
      <Table data={gherkinTerms} />  ← data prop
    </section>
  );
}
```

### Table.jsx
```jsx
function Table({ data }) {  // ← Saņem data prop
  return (
    <table border="1" cellPadding="8">
      <TableHeader />
      <tbody>
        {data.map((row, index) => (
          <TableRow 
            key={index}       ← React key
            en={row.en}       ← Pasa datus
            lv={row.lv}       ← Pasa datus
          />
        ))}
      </tbody>
    </table>
  );
}
```

### TableHeader.jsx
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

### TableRow.jsx
```jsx
function TableRow({ en, lv }) {  // ← Saņem en, lv props
  return (
    <tr>
      <td>{en}</td>   ← Attēlo datus
      <td>{lv}</td>   ← Attēlo datus
    </tr>
  );
}
```

## 3. Datu Virziens

```
            Translations
                 ↓
           (gherkinTerms dati)
                 ↓
            Table.jsx
          (data={gherkinTerms})
              ↙     ↘
        TableHeader  |
                  TableRow #1
                  TableRow #2
                  ...
                  TableRow #7
                     ↓
                (en, lv props)
                     ↓
                   <td> HTML
```

## 4. Render Secības (React Vispirms Uz Leju)

1. **App renders**
   - Attēlo `<h1>`
   - Attēlo `<Translations />`

2. **Translations renders**
   - Attēlo `<h2>`
   - Attēlo `<Table data={gherkinTerms} />`

3. **Table renders**
   - Attēlo `<TableHeader />`
   - Attēlo `<tbody>`
   - Renderē `<TableRow>` katrā `data.map()` iterācijā
     - 7 atsevišķi `TableRow` objekti

4. **TableHeader renders**
   - Attēlo `<thead>`
   - Attēlo `<tr>`
   - Attēlo 2x `<th>`

5. **Katra TableRow renders**
   - Attēlo `<tr>`
   - Attēlo 2x `<td>`

6. **React montāž kompilēto DOM**
   - Apvieno visos `<tr>`, `<td>` elementus
   - Apvieno visos `<th>` elementus
   - Attēlo uz ekrāna

## 5. Interaktivitātes Virziens (Nākotnē, Ja Būtu)

```
Lietotājs kliekšķina  →  TableRow onClick  →  Translations state  →  Re-render
```

Piemēram:
```jsx
// Nākotnē — klikšķējamas rindas
function Translations() {
  const [selected, setSelected] = useState(null);
  
  const handleRowClick = (en) => {
    setSelected(en);
  };
  
  return (
    <Table 
      data={gherkinTerms} 
      onRowClick={handleRowClick}  ← Callback uz augšu
    />
  );
}
```

## 6. Performance — Ko Tiek Re-renderēts?

**Ja Translations props nemainās:**
- ✅ Table — ne (same props)
- ✅ TableHeader — ne (same HTML)
- ✅ TableRow #1-7 — ne (same props)

**Ja Translations.jsx dati mainās (piemēram, pievienojam jaunu terminu):**
```jsx
const gherkinTerms = [
  // ... vecie
  { en: "Background", lv: "Pamatne" }  // ← JAUNS
];
```

Tad:
- ⚡ Translations — re-renderē
- ⚡ Table — re-renderē (new data prop)
- ⚡ TableHeader — re-renderē (pārbaudīt — nav nepieciešams)
- ⚡ TableRow #1-8 — re-renderē (8 skaits mainījās)

---

## 📊 Props Mapping Tabula

| Props | Avots | Mērķis | Veids |
|-------|-------|--------|-------|
| `data` | Translations | Table | Array |
| `en` | Table (map) | TableRow | String |
| `lv` | Table (map) | TableRow | String |
| `key` | Table (index) | React | Number |

---

## ⚡ Optimization Tips

### 1. React.memo — Ja Props Nemainās

```jsx
const TableRow = React.memo(function TableRow({ en, lv }) {
  return (
    <tr>
      <td>{en}</td>
      <td>{lv}</td>
    </tr>
  );
});

export default TableRow;
```

**Ietekme:** TableRow ne-renderēsies, ja `en` un `lv` ir vienāds.

### 2. useMemo — Ja Dati Aprēķināti

```jsx
const gherkinTerms = useMemo(() => [
  { en: "Feature", lv: "Funkcionalitāte" },
  // ...
], []);  // ← Ar empty dependency
```

**Ietekme:** `gherkinTerms` ne-mainīsies, ja komponente re-renderēs.

### 3. useCallback — Ja Ir Click Handlers

```jsx
const handleRowClick = useCallback((term) => {
  console.log('Kliekšķināts:', term);
}, []);

// Padot TableRow
<TableRow en={term.en} lv={term.lv} onClick={handleRowClick} />
```

**Ietekme:** Click handler ne-mainīsies, ja komponente re-renderēs.

---

## 🎯 Secinājums

- **Props Down** — Dati virzās no vecāka uz bērnu (`data={...}`)
- **Callbacks Up** — Notikumi virzās no bērna uz vecāku (nākotnē)
- **React.memo** — Avoid re-renders, ja props ir vienāds
- **useMemo/useCallback** — Saglabā references, ja nepieciešams

Tas ir **unidirectionāls datu plūsmas modelis** — React galvenais paradigma! 🎉
