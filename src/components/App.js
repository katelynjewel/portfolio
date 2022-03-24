import About from './About';
import Contact from './Contact';
import Headshot from './Headshot';
import NavBar from './NavBar';
import Projects from './Projects';
import TechStack from './TechStack';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='sections'>
        <Headshot />
        <About />
        <TechStack />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App;
