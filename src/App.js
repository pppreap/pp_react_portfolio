import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
// import Nav from '../../components/Nav';
import About from '../../components/About';
import Portfolio from '../../components/Portfolio';
import Contact from '../../components/Contact';
// import Resume from '../../components/Resume';

function App() {
        return (
            <Router>
               <div className="App">
            <Header />
            <Switch>
                <Route exact path = '/' component={ About } />
                <Route path ='/#portfolio' component={ Portfolio } />
                <Route path ='/#contact' component={ Contact } />
                {/* <Route path ='/resume' component={ Resume } /> */}
            </Switch>
            <Footer />
            </div>
            </Router>
        );
    }

export default App;





function App() {
  return (
    <div >
      <Header />
      <Footer />
    </div>
  );
}

export default App;
