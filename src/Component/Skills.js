import React from 'react';
import style from '../styles/Skills.module.css'
import Skill from "./Skill";
import Fade from "react-reveal/Fade";
import TextInfoSkills from "./TextInfoSkills";
import {arr_JS_HTML_CSS, arr_React, arr_Technical,skills} from "./arrInfoSkills";





const Skills = () => {

    return (
        <div className={style.skillWrap} id='Skills'>
            <Fade left>
                <div className={style.skills}>
                    <div className={style.container}>
                        <div className={style.row_title}>
                            <div className={style.title}>
                                <span className={style.heading_meta}>ABILITIES</span>
                                <h2 className={style.addo_heading}>My Skills</h2>
                            </div>
                        </div>
                        <div className={style.row_info}>
                            <div className={style.text_information}>
                                <TextInfoSkills title={'JS/HTML/CSS'} arrSkills={arr_JS_HTML_CSS}/>
                                <TextInfoSkills title={'React'} arrSkills={arr_React}/>
                                <TextInfoSkills title={'Technical skills'} arrSkills={arr_Technical}/>
                            </div>
                            <div className={style.skillsIcon}>
                                {
                                    skills.map((el) => {
                                        return (
                                            <div key={el.id}>
                                                <Skill skill={el} style={el.widthSkill}/>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    )
};

export default Skills;