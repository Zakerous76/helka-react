import styles from "./styles";
import { Footer, Navbar, Hero } from "./components";
import ProjectsSection from "./components/ProjectsSection";
import IstiraklerSection from "./components/IstiraklerSection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Kurumsal from "./pages/Kurumsal";
import Projeler from "./pages/Projeler";
import Istiraklerimiz from "./pages/Istiraklerimiz";
import Medya from "./pages/Medya";
import DevamEdenProjeler from "./pages/DevamEdenProjeler";
import TamamlananProjeler from "./pages/TamamlananProjeler";

const App = () => (
  <div className="bg-helkaBgWhite flex flex-col w-full overflow-hidden">
    <div className={`${styles.paddingX}`}>
      <Navbar />
    </div>
    <Routes>
      {/* Other Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/kurumsal" element={<Kurumsal />} />
      <Route path="/projeler" element={<Projeler />} />
      <Route path="/projeler/devam-eden" element={<DevamEdenProjeler />} />
      <Route
        path="/projeler/tamamlanan-eden"
        element={<TamamlananProjeler />}
      />
      <Route path="/istiraklerimiz" element={<Istiraklerimiz />} />
      <Route path="/medya" element={<Medya />} />
    </Routes>

    <div className={`bg-footerBg ${styles.flexCenter}`}>
      <Footer />
    </div>
  </div>
);

export default App;
