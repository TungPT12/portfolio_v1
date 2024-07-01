import React from 'react';
import styles from './TechnologyCard.module.scss';
import Link from 'next/link';

function TechnologyCard({ className }) {
    return (
        <Link href={"/"} className={`${styles['technology_card']} ${className}`}>
            <picture className={`block ${styles['wrapper_icon']}`}>
                <img src='/assets/images/icons/reactjs.svg' alt='reactjs' />
            </picture>
            <p>ReactJS</p>
        </Link>
    );
}

export default TechnologyCard;
