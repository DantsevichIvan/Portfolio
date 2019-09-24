import React from 'react';
import style from './Contacts.module.css'
import Title from "./Title";
import Fade from "react-reveal/Fade";

const Contacts = () => {
    return (
        <div className={style.contacts}>
            <Fade bottom>
                <div className={style.container}>
                    <Title title={"Contacts"}/>
                    <form className={style.formWrapper}>
                        <input type="text" placeholder="Имя" className={style.formArea}/>
                        <input type="email" placeholder='e-mail' className={style.formArea}/>
                        <textarea placeholder='Сообщение' className={style.messageArea}></textarea>
                        <button className={style.bntSubmit} type="submit">Send</button>
                    </form>
                </div>
            </Fade>
        </div>

    )
};

export default Contacts;