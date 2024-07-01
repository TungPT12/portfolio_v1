import React, { useMemo } from 'react';
import TechnologiesRow from '@/components/TechnologiesRow/TechnologiesRow';
import styles from './Technologies.module.scss';

function Technologies() {
    const technologies = useMemo(() => {
        return [
            {
                name: 'HTML',
                image: '/assets/html5.svg',
            },
            {
                name: 'CSS',
                image: '/assets/css.svg',
            },
            {
                name: 'NodeJS',
                image: '/assets/nodejs.svg',
            },
            ////
            {
                name: 'Javascript',
                image: '/assets/javascript.svg',
            },
            {
                name: 'Java',
                image: '/assets/java.svg',
            },
            ////
            {
                name: 'ExpressJS',
                image: '/assets/express_js.svg',
            },
            {
                name: 'NextJS',
                image: '/assets/nextjs.svg',
            },
            //////
            {
                name: 'ReactJS',
                image: '/assets/reactjs.svg',
            },
            {
                name: 'JQuery',
                image: '/assets/jquery.svg',
            },
            ///
            {
                name: 'MongoDB',
                image: '/assets/mongo.svg',
            },
            {
                name: 'GitHub',
                image: '/assets/github.svg',
            },
        ]
    }, [])


    return (
        <div id="technologies" className={`${styles['technologies']}`}>
            <div className={`${styles['technologies_wrapper']}`}>
                <h3 className={`${styles['title']} color_text`}>Technologies</h3>
                <div className={`${styles['tech']}`}>
                    <TechnologiesRow />
                    <TechnologiesRow />
                </div>
            </div>
        </div>
    );
}

export default Technologies;
