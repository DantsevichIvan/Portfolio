import React from 'react';
import './menu.css'
import style from "./Header.module.css";

class MenuClose extends React.Component {
    render() {
        return (
            <div className="menu-wrap">
                <input type="checkbox" className="toggler"/>
                <div className="hamburger">
                    <div></div>
                </div>
                <div className="menu">
                    <div>
                        <div>
                            <ul className={style.list_menu}>
                                <li>
                                    <a href="#Home" className={style.link}>Home</a>
                                </li>
                                <li>
                                    <a href="#Skills" className={style.link}>Skills</a>
                                </li>
                                <li>
                                    <a href="#Projects" className={style.link}>Projects</a>
                                </li>
                                <li>
                                    <a href="#Contact" className={style.link}>Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default MenuClose