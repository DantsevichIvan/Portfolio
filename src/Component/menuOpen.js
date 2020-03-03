import React from 'react';
import style from '../styles/Header.module.css';
import {LinkComponent} from "./LinkComponent";

const MenuOpen = ({linksArr}) => {
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
                    {
                        linksArr.map(link =>{return <LinkComponent key={link.id} link={link}/>})
                    }
                </div>
            </div>
        </div>
    )
}

export default MenuOpen