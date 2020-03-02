import React from 'react';
import style from './Skills.module.css'
import Skill from "./Skill";
import Fade from "react-reveal/Fade";


const skills = [
    {
        name: 'JS',
        knowledge: 60,
        widthSkill: {
            width: `60%`
        },
        id:1
    },
    {
        name: 'React',
        knowledge: 60,
        widthSkill: {
            width: `60%`
        },
        id:2
    },
    {
        name: 'HTML&CSS',
        knowledge: 80,
        widthSkill: {
            width: `80%`
        },
        id:3
    },
    {
        name: 'Node, MongoDb, Express, Mongoose',
        knowledge: 40,
        widthSkill: {
            width: `40%`
        },
        id:4
    }
]


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
                                <h1 className={style.textTitle}>JS/HTML/CSS</h1>
                                <div className={style.blockText}>
                                        <p className={style.text}>-Верстка страниц по макетам и без</p>
                                        <p className={style.text}>-Использовал замыкание, прототипное наследование,
                                            асинхронность, promises.</p>
                                        <div className={style.text}><p>На уровне теории:</p>
                                            <p className={style.text}>- Call,apply,bind.</p>
                                            <p className={style.text}>- map,filter,reducer</p>
                                            <p className={style.text}>-This and Object prototype</p>
                                            <p className={style.text}>-Рекурсия (фибоначи, факториал)</p>
                                            <p className={style.text}>-Типы данных</p>
                                        </div>
                                </div>
                                <h1 className={style.textTitle}>React</h1>
                                <div className={style.blockText}>
                                        <p className={style.text}>-Создание функциональных и классовых компонент</p>
                                        <p className={style.text}>-Работа с методами жизненного цикла</p>
                                        <p className={style.text}>-Обрабатывал события в React</p>
                                        <p className={style.text}>-Создавал компоненты высшего порядка (HOC)</p>
                                        <p className={style.text}>-Работал с формами</p>
                                        <p className={style.text}>-Делал маршрутизацию c помощью Router</p>
                                        <p className={style.text}>-Работал с данными с использованием Redux</p>
                                        <p className={style.text}>-Модульное тестирование кода React c Jest + mock</p>
                                </div>
                                <h1 className={style.textTitle}>Technical skills:</h1>
                                <div className={style.blockText}>
                                        <p className={style.text}>1. JS/HTML/CSS</p>
                                        <p className={style.text}>2. React</p>
                                        <p className={style.text}>3. Node, MongoDb, Express, Mongoose</p>
                                        <p className={style.text}>4. Tools: WebStorm, Visual Studio Code, Node.js
                                            command prompt</p>
                                        <p className={style.text}>5. DVS system: Git</p>
                                        <p className={style.text}>6. English: Pre-Intermediate</p>
                                </div>
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