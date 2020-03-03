import React from 'react'
import style from "../styles/Information.module.css";


export const Info = ({title,value }) =>{
    return(
            <div className={style.single_info}>
                <span>{title}:</span>
                <p>{value}</p>
            </div>
    )
}