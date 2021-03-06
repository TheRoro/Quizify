import React from 'react'
import { Link } from "react-router-dom";

import Ari from "../../assets/images/ari.png"
import Dua from "../../assets/images/dua.png"
import Doja from "../../assets/images/doja.png";
import Weeknd from "../../assets/images/weeknd.png";
import './search.scss';

const SearchArtist = () => {
    return (
        <>
            <div className="search-container">
                <div className="search-title-row">
                    <h1 className="search-title">Select your favorite artist</h1>
                </div>
                <div className="search-input-row">
                    <input className="search-input" type="text"/>
                </div>
                <div className="search-images-grid">
                    <div className="image-container">
                        <Link to="/" className="search-link">
                            <img className="image" src={Ari} alt="genre"/>
                            <p className="image-text">Ariana Grande</p>
                        </Link>
                    </div>
                    <div className="image-container">
                        <Link to="/" className="search-link">
                            <img className="image" src={Dua} alt="playlist"/>
                            <p className="image-text">Dua Lipa</p>
                        </Link>
                    </div>
                    <div className="image-container">
                        <Link to="/" className="search-link">
                            <img className="image" src={Doja} alt="artist"/>
                            <p className="image-text">Doja Cat</p>
                        </Link>
                    </div>
                    <div className="image-container">
                        <Link to="/" className="search-link">
                            <img className="image" src={Weeknd} alt="artist"/>
                            <p className="image-text">The Weeknd</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SearchArtist;