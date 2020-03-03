import React from 'react';
import style from '../styles/Information.module.css';
import Fade from "react-reveal/Fade";
import {InfoAboutMe} from "./InfoAboutMe";
import {TextAboutMe} from "./TextAboutMe";

const Information = () => {
    return (
        <div className={style.sloganWrap} id='Home'>
            <Fade bottom>
                <div className={style.slogan}>
                    <div className={style.container}>
                        <div className={style.row_title}>
                            <span>INFORMATION</span>
                            <h2 className={style.title}>About me</h2>
                        </div>
                        <div className={style.information}>
                            <div className={style.avatar}>
                                <img src="https://sun9-15.userapi.com/c627923/v627923119/36091/HvudVHwa9gs.jpg" alt=""/>
                            </div>
                            <div className={style.about_content}>
                                <div className={style.content_block}>
                                    <h6 className={style.content_title}>
                                        I'm Ivan Dantsevich, a Frontend-Developer React
                                    </h6>
                                </div>
                                <TextAboutMe/>
                                <div className={style.content_info}>
                                    <InfoAboutMe
                                        firstTitle={'Name'}
                                        secondTitle={'From'}
                                        firstValue={'Ivan Dantsevich'}
                                        secondValue={'Minsk, BLR'}/>
                                    <InfoAboutMe
                                        firstTitle={'Age'}
                                        secondTitle={'Email'}
                                        firstValue={22}
                                        secondValue={'iw.dantsevich@gmail.com'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    )
};

export default Information;