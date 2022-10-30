import React, { Component } from 'react';
import { Route, Navigate, HashRouter } from 'react-router-dom';
import Nav from '../../components/Nav';
import About from '../../components/About';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Resume from './components/Contact';

class Header extends Component {
    render(){
        return (
            <HashRouter>
                <header>
                    <Nav />
                </header>

            <div className='content'>
                <Route exact path = '/' render = { ()=> <Navigate to='/about'/>} />
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