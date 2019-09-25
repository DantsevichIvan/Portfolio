import React from 'react';
import style from './Contacts.module.css'
import Title from "./Title";
import Fade from "react-reveal/Fade";

const Contacts = () => {
    return (
        <div className={style.wrapperContact}>
            <div className={style.contacts}>
                    <div className={style.container}>
                        <Title title={"Contacts"}/>

                    </div>
            </div>
        </div>
    )
};

export default Contacts;