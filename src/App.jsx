import "./App.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfollio from "./components/portfollio/Portfollio";
import Services from "./components/services/Services";

function App() {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfollio />
      {/* <section id="About">Coming Soon</section> */}
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
