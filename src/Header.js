import React from 'react';
import style from './Header.module.css'

const Header = () => {
    return (
        <div className={style.header}>

            <div className={style.container}>
                <div className={style.information}>
                    <img src="https://sun9-36.userapi.com/c845420/v845420985/be0f5/PzuyrgExBic.jpg?ava=1" alt=""/>
                    <span className={style.name}>Ivan Dantsevich</span>
                    <span>Available for work</span>
                </div>

                <div className={style.sidebar_menu}>
                    <ul className={style.list_menu}>
                        <li>
                            <a href="" className={style.link}>Home</a>
                        </li>
                        <li>
                            <a href="" className={style.link}>Skills</a>
                        </li>
                        <li>
                            <a href="" className={style.link}>Project</a>
                        </li>
                        <li>
                            <a href="" className={style.link}>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
};

export default Header;