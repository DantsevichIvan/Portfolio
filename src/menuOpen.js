import React from 'react';
import style from './Header.module.css';
import Skills from "./Skills";
import Burger_Menu from "./Burger-menu";
import './menu.css'

class MenuOpen extends React.Component {

    render() {
        return (
            <div className={style.header}>
                <div className={style.container}>
                    <div className={style.information}>
                        <img src="https://sun9-36.userapi.com/c845420/v845420985/be0f5/PzuyrgExBic.jpg?ava=1"
                             alt=""/>
                        <span className={style.name}>Ivan Dantsevich</span>
                        <span>Available for work</span>
                    </div>
                    <div className={style.sidebar_menu}>
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
        )
    }
}
export default MenuOpen