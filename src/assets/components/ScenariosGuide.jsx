function ScenariosGuide() {
  return (
    <section style={{ marginBottom: "2rem", padding: "1rem", backgroundColor: "#fff3cd", borderRadius: "8px" }}>
      <h2>Kā veidot scenārijus? Cik daudz scenāriju ir vienai iezīmei?</h2>
      <p>
        Scenārijus veido trīs daļas: apstāklis (Kad), darbība (Ja) un rezultāts (Tad). 
        Scenārijs apraksta, kā sistēma uzvedas noteiktā situācijā. 
        Viena iezīme parasti satur 3-5 scenārijus - viens "happy path" scenārijs, 
        kur viss darbojas ideāli, un vairāki negatīvi scenāriji, kur kaut kas nedarbojas.
      </p>
    </section>
  );
}

export default ScenariosGuide;
