import React from 'react';
import styles from './EducationCard.module.scss'

const EducationCard = () => {
    return (
        <div className={`${styles['education_card']}`}>
            <picture className={`block ${styles['image_school']}`}>
                <img src='/assets/images/education/fpt_university.jpeg' alt={"fpt"} />
            </picture>
            <div className={`${styles['education_info']}`}>
                <h3 className={`${styles['degree_name']} color_second_text`}>Bachelor Of Software Engineering</h3>
                <div className={`${styles['degree_info']}`}>
                    <div className={`${styles['row_info']} flex`}>
                        <span className={`${styles['title']} color_text`}>School&#39;s name &#58; </span>
                        <p className={`${styles['description']} color_text`}>FPT University Ho Chi Minh</p>
                    </div>
                    <div className={`${styles['row_info']} flex`}>
                        <span className={`${styles['title']} color_text`}>GPA &#58; </span>
                        <p className={`${styles['description']} color_text`}>6.7 / 10</p>
                    </div>
                    <div className={`${styles['row_info']} flex`}>
                        <span className={`${styles['title']} color_text`}>Time &#58;</span>
                        <p className={`${styles['description']} color_text`}>2018/09 - 2023/04</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EducationCard;
