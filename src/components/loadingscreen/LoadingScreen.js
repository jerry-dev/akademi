import React from 'react';
import styles from './loadingscreen.module.css';

const LoadingScreen = () => {
    return (
        <img
        className={styles.loadingScreen}
        src="https://assets-global.website-files.com/61406347b8db463e379e2732/6170b5377b069c085b0991e5_ezgif-2-2260bc5d0d32.gif"
        alt="Loading screen"/>
    );
}

export default LoadingScreen;