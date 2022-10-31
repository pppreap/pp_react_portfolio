import React from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Nav(props) {
    return (
        <div>
            <Navbar expand='lg' bg='light' sticky='top'>
            <NavLink className='nav-link' to='/'>
                <div class='text-dark'>
                    <h3 class='nav-title-font'> Paula Preap</h3>
                </div>
                </NavLink>
                <ul class='navbar-nav ml-auto navitem-indent'>
                    <li class='nav-item'>
                        <NavLink to="/about">
                            <div class='nav-font text-dark'>About Me</div>
                        </NavLink>
                    </li>
                    <li class='nav-item'>
                        <NavLink to='/portfolio'>
                            <div class='nav-font text-dark'>Portfolio</div>
                        </NavLink>
                    </li>
                    <li class='nav-item'>
                        <NavLink to='/contact'>
                            <div class='nav-font text-dark'>Contact</div>
                        </NavLink>
                    </li>
                    <li class='nav-item'>
                        <NavLink to='/resume'>
                            <div class='nav-font text-dark'>Resume</div>
                        </NavLink>
                    </li>
                </ul>
                </Navbar>
         </div>
    );
}

export default Nav;