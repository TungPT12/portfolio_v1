import React from 'react';
import styles from './Education.module.scss';
import EducationCard from '@/components/EducationCard/EducationCard';

function Education() {
    return (
        <div className={`${styles['education']}`}>
            <div className={`${styles['wrapper_education']}`}>
                <h3 className={`${styles['title']} color_text`}>Education</h3>
                <div className={`${styles['education_list']}`}>
                    <EducationCard />
                </div>
            </div>
        </div>
    );
}

export default Education;
