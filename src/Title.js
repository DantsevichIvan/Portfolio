import React from 'react';
import style from './Title.module.css'

const Title = (props) => {
    return (
                <div className={style.blockTitle}>
                    <h1 className={style.title}>{props.title}</h1>
                    <div className={style.line}></div>
                </div>
    )
};

export default Title;