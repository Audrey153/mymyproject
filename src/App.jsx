import Nav from './components/Nav.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Experience from './sections/Experience.jsx';
import Projects from './sections/Projects.jsx';
import Advantages from './sections/Advantages.jsx';
import Contact from './sections/Contact.jsx';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Advantages />
        <Contact />
      </main>
    </>
  );
}
