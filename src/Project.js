import React from 'react';
import style from './Project.module.css'

const Project = (props) => {
    return (
            <div className={style.project}>
                <div className={style.projectImg} style={props.style}>
                    <a href="" className={style.btnShow}>Смотреть</a>
                </div>
                    <span className={style.projectTitle}>Название проекта</span>
                    <span className={style.description}>Краткое описание</span>
            </div>

    )
};

export default Project;