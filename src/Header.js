import React from 'react';
import style from './Header.module.css'
import Skills from "./Skills";


class Header extends React.Component {
    constructor() {
        super();
        this.state ={
           menu: 'open'
        }
    }

    change() {
         this.setState({
             menu: 'close'
         })
    }

    render() {
        if (this.state.menu === 'open') {
            return (
                <div className={style.header}>
                    <div className={style.container}>
                        <div className={style.information}>
                            <img src="https://sun9-36.userapi.com/c845420/v845420985/be0f5/PzuyrgExBic.jpg?ava=1"
                                 alt=""/>
                            <span className={style.name}>Ivan Dantsevich</span>
                            <span>Available for work</span>
                        </div>

                        <div className={style.sidebar_menu}>
                            <ul className={style.list_menu}>
                                <li>
                                    <a href="#Home" className={style.link}>Home</a>
                                </li>
                                <li>
                                    <a href="#Skills"  className={style.link}>Skills</a>
                                </li>
                                <li>
                                    <a href="#Projects" className={style.link}>Projects</a>
                                </li>
                                <li>
                                    <a href="#Contact" className={style.link}>Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/*<button onClick={this.change.bind(this)}> Hello</button>*/}
                </div>
            )
        } else if (this.state.menu === 'close') {
            return (
                <div>
                    helloy
                </div>

            )
        }


    }

}


export default Header;