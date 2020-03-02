import React from 'react'
import {slide as Menu } from 'react-burger-menu'
import './burger-menu.css'

class Burger_Menu extends React.Component {
    showSettings (event) {
        event.preventDefault();
    }

    render () {
        return (
            <Menu className="bm-overlay"
            >
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item" href="/about">About</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
                <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
            </Menu>
        );
    }
}

export default Burger_Menu