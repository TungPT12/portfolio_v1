import React from 'react';
import styles from './TechnologiesRow.module.scss';
import TechnologyCard from './TechnologyCard/TechnologyCard';

const TechnologiesRow = () => {
    return (
        <div className={`${styles['technologies_row']}`}>
            <TechnologyCard />
            <TechnologyCard />
            <TechnologyCard />
            <TechnologyCard />
            <TechnologyCard />
            <TechnologyCard />
        </div>
    );
}

export default TechnologiesRow;
