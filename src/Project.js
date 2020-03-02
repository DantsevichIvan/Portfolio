import React from 'react';
import styles from './Project.module.css'

const Project = ({project,style}) => {
    return (
        <div className={styles.project} id={'project'}>
            <div className={styles.project_img}  style={style}>

            </div>
            <div className={styles.project_information}>
                <h3>{project.name}</h3>
                <p>USED STACK:</p>
                <ul className={styles.project_information_tags}>
                    {
                        project.stackTechnology.map(stack => {
                            return <li key={stack}>{stack}</li>
                        })
                    }
                </ul>
                <div className={styles.project_information_linkCell}>
                    <span>Link:</span>
                    <a href={project.link}
                       target='_blank'
                       className={styles.project_information_link}
                       title={project.link}>
                        {project.link}
                    </a>
                </div>
            </div>
        </div>

    )
};

export default Project;