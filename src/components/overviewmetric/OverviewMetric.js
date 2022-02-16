import React from 'react';
import styles from './overviewmetric.module.css';

const OverviewMetric = (props) => {
    const metricDataAttribute = {'data-metric': `${props.statTitle.toLowerCase()}`};

    return (
        <article className={styles.overviewMetric}  {...metricDataAttribute}>
            <picture>
                <img src={props.icon}/>
            </picture>
            <span>
                <h5>{props.statTitle}</h5>
                <h3>{props.stat}</h3>
            </span>
        </article>
    );
}

export default OverviewMetric;