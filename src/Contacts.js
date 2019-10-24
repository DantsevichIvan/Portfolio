import React from 'react';
import style from './Contacts.module.css'
import Title from "./Title";
import Fade from "react-reveal/Fade";
import mapIcon from './img/placeholder.svg'
import phoneIcon from './img/phone-call.svg'
import emailIcon from './img/message.svg'
import social_networkBgImg from "./img/social-network.png";


const arrayIcon = [
    {
        nameIcon: 'Minsk, Belarus',
        bgI: {backgroundImage: `url(${mapIcon})`}
    },
    {
        nameIcon: '+375298559228',
        bgI: {backgroundImage: `url(${phoneIcon})`}
    },
    {
        nameIcon: 'iw.dantsevich@gmail.com',
        bgI: {backgroundImage: `url(${emailIcon})`}
    }
]


const Contacts = () => {
    return (
        <div className={style.wrapperContact}>
            <div className={style.contacts}>
                <div className={style.container}>
                    {
                        arrayIcon.map((el) => {
                            return (
                                <div className={style.single_info}>
                                    <div className={style.icon} style={el.bgI}></div>
                                    <p>
                                        <a href="">{el.nameIcon}</a>
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
};

export default Contacts;