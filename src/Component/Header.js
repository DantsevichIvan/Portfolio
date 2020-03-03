import React from 'react';
import style from '../styles/Header.module.css';
import '../styles/menu.css'
import MenuOpen from "./menuOpen";
import MenuClose from "./menuClose";

export const Header = () =>  {
    const linksArr = [{nameLink:'Home',indent:50,id:1},{nameLink:'Skills',indent:0,id:2},{nameLink:'project',indent:-150,id:3},{nameLink:'Contact',indent:0,id:4}];
    return (
            <div>
                <div className={style.menu_open}><MenuOpen linksArr={linksArr}/></div>
                <div className={style.menu_close}><MenuClose linksArr={linksArr}/></div>
            </div>

        )
}
