import './app.css';
import About from './components/about/About';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Technologies from './components/technologies/Technologies';
import Contact from './components/contact/Contact';
import Navbar from './components/navbar/Navbar';
import { allInfo } from './allInfo'

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="pages">
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
        <Technologies />
        <Contact contacts={allInfo.contacts} />
      </div>
    </div>
  );
}

export default App;
