import React from 'react';
import style from './Project.module.css'

const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.projectImg} style={props.style}>
                <div className={style.infoProject}>
                    <span className={style.projectTitle}>{props.project.name}</span>
                    <a href={props.project.link} className={style.btnShow}>View</a>
                </div>
            </div>
            <span className={style.projectTitle}>{props.project.name}</span>
        </div>

    )
};

export default Project;