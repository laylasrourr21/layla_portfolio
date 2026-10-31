import NavBar from './components/Nav_bar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Projects';
import Footer from './components/Footer';
import { Element } from 'react-scroll';

function Home() {
  return (
    <div className="main">
      {/* <NavBar /> */}

      <Element name="homeSection"><Hero /></Element>
      <Element name="about"><About /></Element>
      <Element name="skills"><Skills /></Element>
      <Element name="projects"><Project /></Element>

      <Footer />
    </div>
  );
}

export default Home;