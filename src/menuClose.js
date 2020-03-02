import React from 'react';
import './menu.css'
import style from "./Header.module.css";
import {Link} from "react-scroll";

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
                        <div className={style.sidebar_menu}>
                                <Link
                                    activeClass={style.active}
                                    to={'Home'}
                                    spy={true}
                                    smooth={true}
                                    offset={50}
                                    duration={500}>
                                    Home</Link>
                                <Link
                                    activeClass={style.active}
                                    to={'Skills'}
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}>
                                    Skills</Link>
                                <Link
                                    activeClass={style.active}
                                    to={'project'}
                                    spy={true}
                                    smooth={true}
                                    offset={-150}
                                    duration={500}>
                                    Projects</Link>
                                <Link
                                    activeClass={style.active}
                                    to={'Contact'}
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}>
                                    Contact</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default MenuClose