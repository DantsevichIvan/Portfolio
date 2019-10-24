import React from 'react';
import style from './Footer.module.css';
import telegramIcon from './img/telegram.svg';
import vkIcon from './img/vk.svg';
import facebookIcon from './img/facebook-logo.svg';
import linkedinIcon from './img/linkedin-letters.svg';
import gitHubIcon from './img/github.svg'
import Fade from "react-reveal/Fade";


const arrIconSocial = [
    {
        SocialIcon: telegramIcon,
        bgc: {backgroundColor: '#61A8DE'}
    }, {
        SocialIcon: vkIcon,
        bgc: {backgroundColor: '#6297de'}
    },
    {
        SocialIcon: gitHubIcon,
        bgc: {backgroundColor: 'grey'}
    }, {
        SocialIcon: facebookIcon,
        bgc: {backgroundColor: '#5557de'}
    }, {
        SocialIcon: linkedinIcon,
        bgc: {backgroundColor: '#2c9ede'}
    },
]


const Footer = () => {
    return (
        <div className={style.footerWraper}>
            <div className={style.footer}>
                <div className={style.container}>
                    <div className={style.networks}>
                        {
                            arrIconSocial.map((el) => {
                                return (
                                    <a href="" style={el.bgc}>
                                        <img src={el.SocialIcon} alt=""/>
                                    </a>
                                )
                            })
                        }
                    </div>
                    <span className={style.copyright}>2019 Все права защищены</span>
                </div>
            </div>
        </div>
    )
};

export default Footer;