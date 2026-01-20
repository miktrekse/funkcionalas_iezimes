import Table from "./Table";

const gherkinTerms = [
  { en: "Feature", lv: "Funkcionālā iezīme" },
  { en: "Background", lv: "Fons" },
  { en: "Scenario", lv: "Scenārijs pēc parauga" },
  { en: "Given", lv: "Ņemot vērā" },
  { en: "When", lv: "Kad" },
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
