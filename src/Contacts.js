import React from 'react';
import style from './Contacts.module.css'
import Fade from "react-reveal/Fade";
import mapIcon from './img/placeholder.svg'
import phoneIcon from './img/phone-call.svg'
import emailIcon from './img/message.svg'


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
        <div className={style.wrapperContact} id='Contact'>
            <Fade right big >
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
            </Fade>
        </div>
    )
};

export default Contacts;