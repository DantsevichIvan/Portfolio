import React from 'react';
import style from "../styles/Skills.module.css";


export default function TextInfoSkills({title ,arrSkills}) {
    return (
        <div>
            <h1 className={style.textTitle}>{title}:</h1>
            <div className={style.blockText}>
                {
                    arrSkills.map(skill =>{
                        return <p className={style.text} key={skill}>-{skill}</p>
                    })
                }
            </div>
        </div>
    )
};
