import React from 'react';
import style from './Header.module.css';
import './menu.css'
import MenuOpen from "./menuOpen";
import MenuClose from "./menuClose";

class Header extends React.Component {

    render() {
        return (
            <div>
                <div className={style.menu_open}><MenuOpen/></div>
                <div className={style.menu_close}><MenuClose/></div>
            </div>

        )
    }
}
export default Header;