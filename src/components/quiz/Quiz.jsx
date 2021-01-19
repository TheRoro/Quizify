import React from 'react';
import currentSong from '../../API/currentSong';
import playSong from '../../API/playSong';
import nextSong from '../../API/nextSong';
import favoriteSongs from '../../API/favoriteSongs';
import getArtist from '../../API/getArtist';

const Quiz = (props) => {
    const [token, setToken] = React.useState('BQCAG1vMZ8OfgBDpGEZGUCex4_M21b4oxvDkEg3PfXvLnMcYF6cJaxZ711fVJstg4lXh7eVGykgo508mUbereBa5t-TUlpvLeOCeXJUhvkSO9GVglU8CfUxZqD93vSvEdm2tvH6z2SQEC8mo-RB1i946l09S9Uk0qLk7BfXOl2sn0gQtCScDXN7K3eDapGPwzUFhOKLvFX2tevkIXigC_v-2vJaenXgLKhMP2VyrQvuN1C24KMmyv9YXQuCZVMW6FHOkeuUvu_mxhQDdC5Y7t8I2NjnEtuPq0NaUxCY');
    const [songId, setSongId] = React.useState()
    const [current, setCurrent] = React.useState();
    const [favorites, setFavorites] = React.useState();
    const [artistId, setArtistId] = React.useState();

    const onClickCurrentSong = async () => {
        const resp = await currentSong(token);
        setCurrent(resp);
    }
    
    const onClickPlaySong = () => {
        playSong(token);
    }

    const onClickNextSong = async () => {
        const ready = await nextSong(token);
        const resp = await currentSong(token);
        setCurrent(resp);
    }

    const onClickFavoriteSongs = async () => {
        const resp = await favoriteSongs(token);
        setFavorites(resp);
    }
 
    return(
        <>
            <div>
                <h1>Quizify</h1>
                <h2>{current?.item.name}</h2>
                <h3>{current?.item.album.name}</h3>
                {current?.item.artists.map((item, index) => 
                    <p key={index}>{item.name}</p>
                )}
                {/* <p>{token}</p> */}
                <button onClick={() => onClickPlaySong()}>Play Random Song!</button>
                <button onClick={() => onClickNextSong()}>Next Song</button>
                <button onClick={() => onClickCurrentSong()}>Get current song</button>
                <button onClick={() => onClickFavoriteSongs()}>Get Saved songs!</button>
                {favorites?.items.map((item, index) => 
                    <p key={index}>{item.track.name}</p>
                )} 
            </div>
        </>
    );
}

export default Quiz;