import React from 'react';
import logo from "./assets/loading.gif";
import './LoadingScreen.css';

const LoadingScreen = () => {
    return(
        <div>
            <img src={logo} alt="loadingGif" />
        </div>
    );
}

export default LoadingScreen;