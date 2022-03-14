import './app.css';
import About from './components/about/About';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Technologies from './components/technologies/Technologies';
import Contact from './components/contact/Contact';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="pages">
        <Intro />
        <About />
        <Portfolio />
        <Technologies />
        <Contact />
      </div>
    </div>
  );
}

export default App;
