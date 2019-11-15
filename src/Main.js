import React from 'react';
import style from './Main.module.css'

const Main = () => {
    return (
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.greeting}>
                    <span>Hello!</span>
                    <span>I am
                        <span>Ivan</span>
                        <span>Dantsevich</span>
                    </span>
                </div>
            </div>
        </div>

    )
};

export default Main;