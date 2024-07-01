import React from 'react';
import styles from './Project.module.scss'
import Link from 'next/link';

function Project({ image, name, github, linkDemo, technologies }) {

    const renderTechnologies = (technologies) => {
        return technologies.map((technology) => {
            return <Link key={technology.name} href={technology.linkTech} target='_blank' className={`${styles['technology']}`}>
                <img src={technology.imageTech} />
                <p>{technology.name}</p>
            </Link>
        })
    }

    return (
        <div className={`${styles['project']}`}>
            <div className={`${styles['project_wrapper']} relative`}>
                <picture className={`block ${styles['background_project']}`}>
                    <img src={image} />
                </picture>
                <div className={`absolute ${styles['project_info']} w-full`}>
                    <h4 className={`${styles['title']}`}>{name}</h4>
                    {/* <div className={`${styles['description']}`}>
                        Full-Stack Instagram Clone Built Using MERN Stack And Realtime Chat With The Help Of Socket.IO
                    </div> */}
                    <div className={`${styles['technologies']}`}>
                        {renderTechnologies(technologies)}
                    </div>
                    <div className={`${styles['link_project']}`}>
                        <Link href={github} target='_blank'>
                            <img src='/assets/images/icons/github_white.svg' />
                            <p>GitHub</p>
                        </Link>
                        <Link href={linkDemo} target='_blank'>
                            <img src='/assets/images/icons/eye_white.svg' />
                            <p>Demo</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;