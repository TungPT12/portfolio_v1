import React from 'react';
import styles from './Certificate.module.scss';
import Link from 'next/link';

function Certificate({ name, linkCertificate, image }) {
    return (
        <div className={`${styles['certificate']}`}>
            <picture className={`${styles['image_certificate']} block`}>
                <img src={image} alt={name} className={`w-full`} />
            </picture>
            <div className={`${styles['wrapper_info']}`}>
                <Link
                    href={linkCertificate}
                    target='_blank'
                    className={`${styles["certificate_name"]} capitalize color_second_text`}
                >
                    {name}
                </Link>
            </div>
        </div>
    );
}

export default Certificate;
