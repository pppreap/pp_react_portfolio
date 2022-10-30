import React, { Component } from 'react';
import { Route, Redirect, HashRouter } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import About from '../../components/About';
import Portfolio from '../../components/Portfolio';
import Contact from '../../components/Contact';
import Resume from './../components/Contact';

class Header extends Component {
    render(){
        return (
            <HashRouter>
                <header>
                    <Navbar />
                </header>

            <div className='navlinks'>
                <Route exact path = '/' render = { ()=> <Redirect to='/about'/>} />
                <Route path ='/about' component={ About } />
                <Route path ='/portfolio' component={ Portfolio } />
                <Route path ='/contact' component={ Contact } />
                <Route path ='/resume' component={ Resume } />
            </div>
            </HashRouter>
        );
    }
}
export default Header;