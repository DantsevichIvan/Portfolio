import React from 'react';
import style from './Skill.module.css'


const Skill = (props) => {
    return (
            <div className={style.skill}>
               <p className={style.bar_title}>
                   {props.skill.name}
                   <span className={style.percent}>{props.skill.knowledge}%</span>
               </p>
                <div className={style.bar}>
                    <div className={style.bar_fill } style={props.style}></div>
                </div>
            </div>
    )
};

export default Skill;