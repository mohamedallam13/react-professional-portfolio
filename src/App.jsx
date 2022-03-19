import './app.css';
import About from './components/about/About';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Technologies from './components/technologies/Technologies';
import Contact from './components/contact/Contact';
import Navbar from './components/navbar/Navbar';
import { allInfo } from './allInfo'
import Toggle from './components/toggle/Toggle';
import Footer from './components/footer/Footer';
import { useContext } from "react";
import { useState } from "react"


import { ThemeContext } from "./context";
import Menu from './components/menu/Menu';

function App() {
  const theme = useContext(ThemeContext)
  const outrun = theme.state.outrun;
  const [menuOpen, setMenuOpen] = useState(false)



  return (
    <div className="app"
      style={{

        "--nav-bar-color": outrun?  "#920075" : "lightskyblue",
        "--sub-font-color": outrun? "#F6019D" : "midnightblue",
        "--main-font-color": outrun? "white" : "black",
        "--main-tech-card-color": outrun? "#F9C80E" : "rgb(252, 220, 226)",
        "--head-browser-color": outrun? "#333" : "rgb(243, 242, 242)"

      }}
    >
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Toggle />
      <div className="pages"
        style={{
          backgroundColor: outrun ? "#222" : "white",
          color: outrun && "white",
        }}
      >
        <Intro name={allInfo.name}
          intro={allInfo.intro}
          professions={allInfo.professions}
        />
        <About education={allInfo.education}
          aboutCatch={allInfo.aboutCatch}
          aboutParagraph={allInfo.aboutParagraph}
        />
        <Portfolio portfolioDesc={allInfo.portfolioDesc}
          devProjects={allInfo.devProjects} />
        <Technologies technologies={allInfo.technologies} />
        <Contact contacts={allInfo.contacts} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
