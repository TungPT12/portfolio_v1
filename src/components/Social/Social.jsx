import React from 'react';
import styles from './Social.module.scss'
import Link from 'next/link';

function Social() {
    return (
        <div className={`${styles['social']}`}>
            <div className={`${styles['social_wrapper']}`}>
                <Link href="https://github.com/TungPT12" target='_blank' className={`${styles['link_social']}`}>
                    <img src='./assets/images/icons/github_white.svg' />
                </Link>
                <Link href="https://www.linkedin.com/in/tungpt12/" target='_blank' className={`${styles['link_social']}`}>
                    <img src='./assets/images/icons/linkedin.svg' />
                </Link>
            </div>
        </div>
    );
}

export default Social;