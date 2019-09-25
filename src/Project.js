import React from 'react';
import style from './Project.module.css'

const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.projectImg} style={props.style}>
                <div className={style.infoProject}>
                    <span className={style.projectTitle}>Название проекта</span>
                    <a href="" className={style.btnShow}>Cсылка на GitHub</a>
                </div>
            </div>
            <span className={style.projectTitle}>Название проекта</span>
        </div>

    )
};

export default Project;