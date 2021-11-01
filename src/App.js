import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import NavBar from './components/Navbar';
import Services from './components/Services';
import Skills from './components/Skills';
import Work from './components/Work';

function App() {
  return (
    <Router >
      <div className="App">
        <NavBar />
        <Home />
        <About />
        <Services />
        <Work />
        <Contact />
        <Skills />
        <Footer />
      {/* <Route path='/about' component={About }  />
      <Route path='/services' component={Services } />
      <Route path='/work' component={Work } />
      <Route path='/contact' component={Contact } />
      <Route path='/skills' component={Skills } /> */}
      </div>
    </Router>

  );
}

export default App;
