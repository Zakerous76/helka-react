import styles from "./styles";
import { Footer, Navbar, Hero } from "./components";
import ProjectsSection from "./components/ProjectsSection";
import IstiraklerSection from "./components/IstiraklerSection";

const App = () => (
  <div className="bg-helkaBgWhite flex flex-col  w-full overflow-hidden">
    <div className={`${styles.paddingX}`}>
      <Navbar />
    </div>

    <div className={`${styles.flexCenter} w-full`}>
      <Hero />
    </div>

    <div className={`${styles.flexCenter} w-full`}>
      <ProjectsSection />
    </div>

    <div className={`bg-helkaBgWhite ${styles.flexCenter} w-full`}>
      <IstiraklerSection />
    </div>

    <div className={`bg-footerBg ${styles.flexCenter}`}>
      <Footer />
    </div>
  </div>
);

export default App;
