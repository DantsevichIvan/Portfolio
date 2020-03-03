import React from 'react';
import './App.css'
import {Header} from "./Component/Header";
import Main from "./Component/Main";
import Skills from "./Component/Skills";
import Projects from "./Component/Projects";
import Information from "./Component/Information";
import Contacts from "./Component/Contacts";
import Footer from "./Component/Footer";
import Particles from "react-particles-js";
import {particlesOps} from "./Component/ParticlesOps";


const App = () => {
    return (
        <div>
            <Particles className={'particles'} params={particlesOps}/>
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