import React from 'react';
import style from './Footer.module.css';
import telegramIcon from './img/telegram2.svg';
import vkIcon from './img/vk.svg';
import facebookIcon from './img/facebook.svg';
import linkedinIcon from './img/linkedin.svg';
import Title from "./Title";
import Fade from "react-reveal/Fade";

const Footer = () => {
    return (
        <div className={style.footer}>
            <Fade bottom>
                <div className={style.container}>
                    <Title title={'Ivan Dantsevich'}/>
                    <div className={style.networks}>
                        <div className={style.networkIcon}>
                            <a href="">
                                <img src={telegramIcon} alt=""/>
                            </a>
                        </div>
                        <div className={style.networkIcon}>
                            <a href="">
                                <img src={vkIcon} alt=""/>
                            </a>
                        </div>
                        <div className={style.networkIcon}>
                            <a href="">
                                <img src={facebookIcon} alt=""/>
                            </a>
                        </div>
                        <div className={style.networkIcon}>
                            <a href="">
                                <img src={linkedinIcon} alt=""/>
                            </a>
                        </div>
                    </div>
                    <span className={style.copyright}>2019 Все права защищены</span>
                </div>
            </Fade>
        </div>

    )
};

export default Footer;