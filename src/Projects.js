import React from 'react';
import style from './Projects.module.css'
import Project from "./Project";
import Title from "./Title";
import social_networkBgImg from "./img/social-network.png";
import todolistBgImg from "./img/todolist.jpg";
import Fade from "react-reveal/Fade";
import Skill from "./Skill";


const projectsList = [
    {
        name: "Social-network",
        bgI: {backgroundImage: `url(${social_networkBgImg})`},
        link: 'https://dantsevichivan.github.io/project-social-network/'
    },
    {
        name: "test_for_Key-Group",
        bgI: {backgroundImage: `url(${todolistBgImg})`},
        link: "https://dantsevichivan.github.io/test_for_Key-Group/"
    },
]


const Projects = () => {
    return (
        <div className={style.wrapper} id='Projects'>
            <div className={style.project}>
                <div className={style.container}>
                    <div className={style.section_heading}>
                        <h2 className={style.section_title}>Portfolio</h2>
                        <p className={style.section_description}>Showcasing some of my best work</p>
                    </div>
                </div>
                <div className={style.project_list}>
                    {
                        projectsList.map((el) => {
                            return (
                                <Project project={el} style={el.bgI}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
};

export default Projects;