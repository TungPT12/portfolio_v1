import Link from 'next/link';
import React from 'react';
import styles from './CVButton.module.scss';

function CVButton({ className }) {
    return (
        <div className={`${styles['cv_button']} w-fit ${className}`}>
            <div className={`${styles['wrapper_cv_button']} w-fit flex items-center`}>
                {/* <picture className={`${styles['']} h-full block`}>
                    <img className={`h-full w-auto`} src="/assets/images/icons/resume.svg" />
                </picture> */}
                <Link className={`color_second_text ${styles['resume_link']}`} target='_blank' href="./assets/cv/Front End Developer_Pham Thanh Tung.pdf">
                    My Resume
                </Link>
            </div>
        </div>
    );
}

export default CVButton;
