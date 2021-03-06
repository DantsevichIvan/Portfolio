import React from 'react';
import style from '../styles/Footer.module.css';
import telegramIcon from '../img/telegram.svg';
import vkIcon from '../img/vk.svg';
import facebookIcon from '../img/facebook-logo.svg';
import linkedinIcon from '../img/linkedin-letters.svg';
import gitHubIcon from '../img/github.svg'
import Fade from "react-reveal/Fade";


const arrIconSocial = [
    {
        SocialIcon: telegramIcon,
        bgc: {backgroundColor: '#61A8DE'},
        href:'https://t.me/Dantsevich_Ivan',
        id: 1
    }, {
        SocialIcon: vkIcon,
        bgc: {backgroundColor: '#6297de'},
        href: 'https://vk.com/id75036119',
        id: 2
    },
    {
        SocialIcon: gitHubIcon,
        bgc: {backgroundColor: 'grey'},
        href: 'https://github.com/DantsevichIvan',
        id: 3
    }, {
        SocialIcon: facebookIcon,
        bgc: {backgroundColor: '#5557de'},
        href: 'https://www.facebook.com/',
        id: 4
    }, {
        SocialIcon: linkedinIcon,
        bgc: {backgroundColor: '#2c9ede'},
        href: 'https://www.linkedin.com/in/%D0%B8%D0%B2%D0%B0%D0%BD-%D0%B4%D0%B0%D0%BD%D1%86%D0%B5%D0%B2%D0%B8%D1%87-79b795173/',
        id: 5
    },
]


const Footer = () => {
    return (
        <div className={style.footerWraper}>
            <Fade left>
                <div className={style.footer}>
                    <div className={style.container}>
                        <div className={style.networks}>
                            {
                                arrIconSocial.map((el) => {
                                    return (
                                        <a
                                            href={el.href}
                                            style={el.bgc}
                                            key={el.id}
                                            target='_blank'>
                                            <img src={el.SocialIcon} alt=""/>
                                        </a>
                                    )
                                })
                            }
                        </div>
                        <span className={style.copyright}>2019 Все права защищены</span>
                    </div>
                </div>
            </Fade>
        </div>
    )
};

export default Footer;