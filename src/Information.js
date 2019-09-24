import React from 'react';
import style from './Information.module.css';
import Fade from "react-reveal/Fade";

const Information = () => {
    return (
        <div className={style.sloganWrap}>
            <div className={style.slogan}>
                {/*<Fade bottom>*/}
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
                                <h6 className={style.content_title}>I'm Ivan Dantsevich, a Frontend-Developer
                                    React </h6>
                            </div>

                            <div className={style.content_description}>
                                <p>
                                    Attentive, punctual, responsible for work, I can easily find a common language with
                                    people,
                                    I quickly learn new information. He took part in university olympiads, scientific
                                    conferences. There are published scientific papers.
                                    Hobbies: playing the guitar, reading literature, traveling, football, quests.
                                </p>
                            </div>
                            <div className={style.content_info}>
                                <div className={style.row}>
                                    <div className={style.single_info}>
                                        <span>Name:</span>
                                        <p>Ivan Dantsevich</p>
                                    </div>
                                    <div className={style.single_info}>
                                        <span>Email:</span>
                                        <p><a href="iw.dantsevich@gmail.com">iw.dantsevich@gmail.com</a></p>
                                    </div>
                                </div>
                                 <div className={style.row}>
                                    <div className={style.single_info}>
                                        <span>Age:</span>
                                        <p>22</p>
                                    </div>
                                    <div className={style.single_info}>
                                        <span>From:</span>
                                        <p>Minsk, BLR</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*</Fade>*/}
            </div>
        </div>

    )
};

export default Information;