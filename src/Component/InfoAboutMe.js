import React from 'react'
import style from "../styles/Information.module.css";
import {Info} from "./Info";


export const InfoAboutMe = ({firstTitle,secondTitle,firstValue,secondValue}) => {
    return (
        <div className={style.row}>
            <Info title={firstTitle} value={firstValue} />
            <Info title={secondTitle} value={secondValue} />
        </div>
    )
}