import React from 'react';
import styles from './loadingscreen.module.css';
import loading from '../../assets/images/loading/loading.svg';

const LoadingScreen = () => {
    return (
        <picture className={styles.picture}>
            <img
            className={styles.loadingScreen}
            src={loading}
            alt="Loading screen"/>
        </picture>
    );
}

export default LoadingScreen;