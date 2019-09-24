import React from 'react';
import './App.css'
import Header from "./Header";
import Main from "./Main";
import Skills from "./Skills";
import Projects from "./Projects";
import Information from "./Information";
import Contacts from "./Contacts";
import Footer from "./Footer";
import Particles from "react-particles-js";
import {particlesOps} from "./ParticlesOps";


const App = () => {
    return (
        <div>
            <Particles className={'particles'} paramas={particlesOps}/>
            <Header/>
            <Main/>
            <Information/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    )
};

export default App;