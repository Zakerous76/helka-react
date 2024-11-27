import styles from "./styles";
import { Footer, Navbar, Hero } from "./components";
import ProjectsSection from "./components/ProjectsSection";
import IstiraklerSection from "./components/IstiraklerSection";

const App = () => (
  <div className="bg-gradient-to-b  w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-helkaBgWhite ${styles.flexCenter} w-full`}>
      <div className={``}>
        <Hero />
      </div>
    </div>

    <div className={`bg-helkaBgWhite ${styles.flexCenter} w-full`}>
      <div className={``}>
        <ProjectsSection />
      </div>
    </div>

    <div className={`bg-helkaBgWhite ${styles.flexCenter} w-full`}>
      <div className={``}>
        <IstiraklerSection />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <Footer />
    </div>
  </div>
);

export default App;
