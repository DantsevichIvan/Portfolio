import React from 'react';
import style from './Header.module.css';
// import './menu.css'
import {Link, animateScroll as scroll} from "react-scroll";

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
        )
    }
}

export default MenuOpen