import React from 'react';
import styles from './overviewmetric.module.css';

const OverviewMetric = (props) => {
    const metricDataAttribute = {'data-metric': `${props.statTitle.toLowerCase()}`};

    return (
        <div className={styles.overviewMetric}  {...metricDataAttribute}>
            <picture>
                <img src={props.icon}/>
            </picture>
            <span>
                <p>{props.statTitle}</p>
                <p>{props.stat}</p>
            </span>
        </div>
    );
}

export default OverviewMetric;