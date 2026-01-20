import Table from "./Table";

const gherkinTerms = [
  { en: "Feature", lv: "Funkcionālā iezīme" },
  { en: "Background", lv: "Kontekts" },
  { en: "Scenario", lv: "Scenārijs" },
  { en: "Scenario Outline", lv: "Scenārijs pēc parauga" },
  { en: "Examples", lv: "Piemēri" },
  { en: "Given", lv: "Kad" },
  { en: "When", lv: "Ja" },
  { en: "Then", lv: "Tad" },
  { en: "And", lv: "Un" },
  { en: "But", lv: "Bet" }
];

function Translations() {
  return (
    <section>
      <h2>Gherkin termini</h2>
      <Table data={gherkinTerms} />
    </section>
  );
}

export default Translations;
