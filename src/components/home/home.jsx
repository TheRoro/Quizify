import React from 'react';
import GenreImg from "../../assets/images/genre.png";
import PlaylistImg from "../../assets/images/playlist.png";
import ArtistImg from "../../assets/images/artist.png";
import './home.scss';

const Home = () => {
    return(
        <>
            <div className="home-container">
                <div className="title-row">
                    <h1 className="title">Quizify</h1>
                </div>
                <div className="select-row">
                    <p className="select-text">Select your play mode</p>
                </div>
                <div className="mode-row">
                    <div className="mode">
                        <img className="mode-img" src={GenreImg} alt="genre"/>
                        <p className="mode-text">by genre</p>
                    </div>
                    <div className="mode">
                        <img className="mode-img" src={PlaylistImg} alt="playlist"/>
                        <p className="mode-text">by playlist</p>
                    </div>
                    <div className="mode">
                        <img className="mode-img" src={ArtistImg} alt="artist"/>
                        <p className="mode-text">by artist</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;