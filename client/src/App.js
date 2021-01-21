import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import AppNavbar from './components/layout/AppNavbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <AppNavbar />
        <Switch>
          <Route exact path="/"  component={Home} />
          <Route path="/about"  component={About} />
          <Route path="/contact"  component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
