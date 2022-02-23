import React from 'react';
import styles from './chartmetric.module.css';

const ChartMetric = (props) => {
    const dataAttributeStlye = {'data-style': (props.style === "one") ? "one": "two"};
    
    return (
        <div className={styles.chartMetric}>
            <h5><span {...dataAttributeStlye}></span>{props.title}</h5>
            <h3>{props.stat}</h3>
        </div>
    );
}

export default ChartMetric;