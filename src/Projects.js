import React from 'react';
import style from './Projects.module.css'
import Project from "./Project";
import Title from "./Title";
import social_networkBgImg from "./img/social-network.png";
import todolistBgImg from "./img/todolist.jpg";
import Fade from "react-reveal/Fade";


const Projects = () => {
    const social_networkImg = {
        backgroundImage: `url(${social_networkBgImg})`
    };
    const todolistImg = {
        backgroundImage: `url(${todolistBgImg})`
    };
    return (
        <div className={style.wrapper}>
            <div className={style.project}>
                <div className={style.row}>
                    <div className={style.section_heading}>
                        <h2 className={style.section_title}>Portfolio</h2>
                        <p className={style.section_description}>Showcasing some of my best work</p>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
};

export default Projects;