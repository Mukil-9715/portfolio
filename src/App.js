import './App.css';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import Home from './Component/Home';
import Nav from './Component/Nav';
import Skill from './Component/Skill';

function App() {
  return (
    <>
    <Nav/>
    <Home/>
    {/* <Skill/> */}
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
