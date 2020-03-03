import React from 'react';
import style from '../styles/Projects.module.css'
import Fade from "react-reveal/Fade";
import SliderProject from "./SliderProject";





const Projects = () => {
    return (
        <div className={style.wrapper} id='Projects'>
            <Fade bottom big cascade >
            <div className={style.project}>
                <div className={style.container}>
                    <div className={style.section_heading}>
                        <h2 className={style.section_title}>Portfolio</h2>
                        <p className={style.section_description}>Showcasing some of my best work</p>
                    </div>
                </div>
                <div className={style.project_list}>
                    <SliderProject/>
                </div>
            </div>
            </Fade>
        </div>
    )
};

export default Projects;