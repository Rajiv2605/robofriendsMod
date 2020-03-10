import React from 'react';
import logo from "./assets/loading.gif";
import './LoadingScreen.css';

const LoadingScreen = () => {
    return(
        <div className="loadingDiv">
            <img className="loadingGif" src={logo} alt="loadingGif" />
        </div>
    );
}

export default LoadingScreen;