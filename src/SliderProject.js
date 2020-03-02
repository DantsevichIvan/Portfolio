import React from 'react';
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"
import social_network from "./img/img_project_1_mono.png";
import mern_project from "./img/MERN.jfif";
import node_project from "./img/1200px-Node.js_logo.svg.png";
import inner_project from "./img/programmer_1505290086-1140x570.jpg";
import inner2_project from "./img/What-Is-A-Full-Stack-Developer-and-Everything-You-Need-to-Know-to-Start.jpg";
import Project from "./Project";

const projects = [
    {
        name: "Social-network",
        link: 'https://dantsevichivan.github.io/project-social-network/',
        bgI: { backgroundImage: `url(${social_network})`},
        stackTechnology: ['React','HTML5','CSS','Redux','JavaScript','ReduxForm','Axios','HOC','Redux Thunk','Router']
    },
    {
        name: "Test-for-Key-Group",
        link: 'https://dantsevichivan.github.io/test_for_Key-Group/',
        bgI: { backgroundImage: `url(${inner_project})`},
        stackTechnology: ['React','HTML5','CSS','JavaScript','Axios','Redux Thunk','HOC','Router']
    },
    {
        name: "MERN project",
        link: "https://github.com/DantsevichIvan/mern-project",
        bgI: { backgroundImage: `url(${mern_project})`},
        stackTechnology:
            ['React','HTML5','CSS','JavaScript','Node','Mongodb','Mongoose','config','Express','HOC','Context','Router']
    },
    {
        name: "Song List",
        link: "https://dantsevichivan.github.io/Songs-List/",
        bgI: { backgroundImage: `url(${inner_project})`},
        stackTechnology: ['React','HTML5','CSS','JavaScript']
    },
    {
        name: "Bank Calculator",
        link: "https://dantsevichivan.github.io/bank-loan-calculator/",
        bgI: { backgroundImage: `url(${inner2_project})`},
        stackTechnology: ['React','HTML5','CSS','JavaScript']
    },
    {
        name: "Node youtube",
        link: "",
        bgI: { backgroundImage: `url(${node_project})`},
        stackTechnology: ['React','Node','']
    },
    {
        name: "Test-for-Omertex",
        link: "https://github.com/DantsevichIvan/test-for-Omertex/settings",
        bgI: { backgroundImage: `url(${inner_project})`},
        stackTechnology: ['React','HTML5','CSS','JavaScript']
    },
];

const GalleryProject = () => {

    return (
        <AliceCarousel
            mouseTrackingEnabled
            responsive={{0:{items:1}, 700:{items:2}}}
            // autoPlay={true}
            autoPlayInterval={4000}
            >
            {
                projects.map((el) => {
                    return (
                        <div key={el.name}>
                            <Project project={el} style={el.bgI}/>
                        </div>
                    )
                })
            }
        </AliceCarousel>
    )
}
export default GalleryProject