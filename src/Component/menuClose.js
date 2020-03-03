import React from 'react';
import '../styles/menu.css'
import style from "../styles/Header.module.css";
import {Link} from "react-scroll";
import {LinkComponent} from "./LinkComponent";

const MenuClose = ({linksArr}) => {
    return (
        <div className="menu-wrap">
            <input type="checkbox" className="toggler"/>
            <div className="hamburger">
                <div></div>
            </div>
            <div className="menu">
                <div>
                    <div className={style.sidebar_menu}>
                        {
                            linksArr.map(link =>{return <LinkComponent link={link} key={link.id}/>})
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


export default MenuClose