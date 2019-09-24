import React from 'react';
import style from './Skills.module.css'
import Title from "./Title";
import Skill from "./Skill";
import ReactIcon from "./img/react-icon.svg";
import JsIcon from "./img/js-icon.svg";
import Html_Css_Icon from "./img/html-icon.svg";
import Fade from "react-reveal/Fade";


const skills = [
    {
        name: 'JS',
        knowledge: 60,
        widthSkill :{
            width: `90%`
        }
    },
    {
        name: 'React',
        knowledge: 70,
        widthSkill :{
            width: `70%`
        }
    },
    {
        name: 'HTML',
        knowledge: 80,
        widthSkill :{
            width: `80%`
        }
    }
]


const Skills = () => {
    return (
        <div className={style.skillWrap}>
            <div className={style.skills}>
                <div className={style.container}>
                    <div className={style.row_title}>
                        <div className={style.title}>
                            <span className={style.heading_meta}>ABILITIES</span>
                            <h2 className={style.addo_heading}>My Skills</h2>
                        </div>
                    </div>
                    <div className={style.row_info}>
                        <div className={style.col_md}>
                            <p className={style.text}>
                                "Suspendisse sit amet metus porta, egestas magna eget, ultricies enim. In libero
                                justoner rhoncus eu nisl sed, pharetra luctus lorem.
                                Praesent faucibus nibh nula necfermentum nunc rhoncus proin maximuster."
                            </p>
                            <p className={style.text}>
                                "Quisque et nulla justo.
                                Class aptent taciti sociosqu ad litora torquent per cobia nostra, per inceptos
                                himenaeos. Mauris pulvinar faucibus dolory. Aenean dolry andapibus id lacinia a, posuere
                                nec libero.
                                Class aptent taciti sociosqu ad litora torquent per cobia nostra, per inceptos
                                himenaeos."
                            </p>
                        </div>
                        <div className={style.col_md}>
                            {
                                skills.map((el) => {
                                    return (
                                        <Skill skill={el} style={el.widthSkill}/>
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default Skills;