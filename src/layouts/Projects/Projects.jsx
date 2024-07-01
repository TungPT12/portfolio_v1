import React from 'react';
import styles from './Projects.module.scss';
import Project from '@/components/Project/Project'

function Projects() {

    const projects = [
        {
            image: "/assets/images/ecommecre.png",
            name: "Ecommerce Website",
            github: "https://github.com/TungPT12/ecommerce_client.git",
            linkDemo: "https://tung-store.netlify.app/",
            tech: [
                {
                    name: "ReactJS",
                    imageTech: "/assets/images/icons/reactjs.svg",
                    linkTech: "https://react.dev/"
                },
                {
                    name: "ExpressJS",
                    imageTech: "/assets/images/icons/express_js.svg",
                    linkTech: "https://expressjs.com/"
                },
                {
                    name: "MongoDB",
                    imageTech: "/assets/images/icons/mongo.svg",
                    linkTech: "https://www.mongodb.com/"
                },
            ]
        },
        {
            image: "/assets/images/booking_website.png",
            name: "Booking Website",
            github: "https://github.com/TungPT12/booking_client.git",
            linkDemo: "https://booking-clients.netlify.app/",
            tech: [
                {
                    name: "ReactJS",
                    imageTech: "/assets/images/icons/reactjs.svg",
                    linkTech: "https://react.dev/"
                },
                {
                    name: "ExpressJS",
                    imageTech: "/assets/images/icons/express_js.svg",
                    linkTech: "https://expressjs.com/"
                },
                {
                    name: "MongoDB",
                    imageTech: "/assets/images/icons/mongo.svg",
                    linkTech: "https://www.mongodb.com/"
                },
            ]
        },
        {
            image: "/assets/images/movie_trailer.png",
            name: "Movie Trailer",
            github: "https://github.com/TungPT12/movie_client.git",
            linkDemo: "https://movie-trailer-client.netlify.app/",
            tech: [
                {
                    name: "ReactJS",
                    imageTech: "/assets/images/icons/reactjs.svg",
                    linkTech: "https://react.dev/"
                },
                {
                    name: "ExpressJS",
                    imageTech: "/assets/images/icons/express_js.svg",
                    linkTech: "https://expressjs.com/"
                },
            ]
        },
        {
            image: "/assets/images/manga.png",
            name: "Manga for life",
            github: "https://github.com/TungPT12/manga_webstie.git",
            linkDemo: "https://mangaforlive.netlify.app/",
            tech: [
                {
                    name: "ReactJS",
                    imageTech: "/assets/images/icons/reactjs.svg",
                    linkTech: "https://react.dev/"
                },
            ]
        },

    ]

    const renderProjects = (projects) => {
        return projects.map((project) => {
            return <Project
                key={project.name}
                image={project.image}
                name={project.name}
                github={project.github}
                linkDemo={project.linkDemo}
                technologies={project.tech}
            />
        })
    }

    return (
        <div className={`${styles['projects']}`}>
            <div className={`${styles['projects_wrapper']}`}>
                <h3 className={`${styles['title']} color_text`}>Projects</h3>
                <div className={`${styles['list_project']}`}>
                    {renderProjects(projects)}
                </div>
            </div>
        </div>
    );
}

export default Projects;