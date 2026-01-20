import Translations from "./assets/components/Translations";
import FunctionalFeatureIntro from "./assets/components/FunctionalFeatureIntro";
import UserStoryFormat from "./assets/components/UserStoryFormat";
import ScenariosGuide from "./assets/components/ScenariosGuide";
import RubiksCubeMetaphor from "./assets/components/RubiksCubeMetaphor";
import HappyPathScenario from "./assets/components/HappyPathScenario";

function App() {
  return (
    <div style={{ padding: "2rem", maxWidth: "1000px", margin: "0 auto" }}>
      <h1>Funkcionālās iezīmes – Gherkin termini un jēdzieni</h1>
      
      <Translations />
      
      <h2 style={{ marginTop: "3rem" }}>Jautājumi un atbildes</h2>
      
      <FunctionalFeatureIntro />
      <UserStoryFormat />
      <ScenariosGuide />
      <RubiksCubeMetaphor />
      <HappyPathScenario />
    </div>
  );
}

export default App;
