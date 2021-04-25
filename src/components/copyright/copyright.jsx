import React from 'react';
import Rodrigo from "../../assets/images/roro.jpg";
import Camila from "../../assets/images/camila.jpg";
import "./../home/home.scss";
import "./copyright.scss"

const Copyright = () => {
    return(
        <>
            <div className="home-container">
                <div className="title-row more-margin">
                    <h1 className="title">Copyright</h1>
                </div>
                <div className="mode-space">
                    <div className="mode-static">
                        <a href="https://rodrigoramirez.dev">
                            <img className="mode-img rounded" src={Rodrigo} alt="roro"/>
                        </a>
                            <p className="mode-text mt-text">Rodrigo Ramirez</p>
                    </div>
                    <div className="mode-static">
                            <a href="https://github.com/cammarb">
                                <img className="mode-img rounded" src={Camila} alt="cam"/>
                            </a>
                            <p className="mode-text mt-text">Camila Martínez</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Copyright;