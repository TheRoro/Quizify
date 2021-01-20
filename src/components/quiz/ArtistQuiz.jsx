import React from 'react';
import OAuthToken from '../../assets/token';
import currentSong from '../../API/currentSong';
import playSong from '../../API/playSong';
import nextSong from '../../API/nextSong';
import getArtist from '../../API/getArtist';
import getTopTraks from '../../API/getTopTracks';
import searchArtist from '../../API/searchArtist';

const ArtistQuiz = (props) => {
    const [token, setToken] = React.useState(OAuthToken);
    const [score, setScore] = React.useState(0);
    const [artistId, setArtistId] = React.useState();
    const [artist, setArtist] = React.useState();
    const [names, setNames] = React.useState();
    const [rightAnswer, setRightAnswer] = React.useState();
    const [userInput, setUserInput] = React.useState();

    const handleChange = (event) => {
        setUserInput(event.target.value);
    }

    const onClickSearchArtist = async () => {
        const resp = await searchArtist(token, userInput);
        console.log("SEARCH RESULTS", resp);
        for(var i = 0; i < resp.tracks.items[0].artists.length; i++){
            if(resp.tracks.items[0].artists[i].name.toLowerCase().includes(userInput)){
                var id = resp.tracks.items[0].artists[i].id
                setArtistId(id);
                const artistResponse = await getArtist(token, id);
                setArtist(artistResponse);
            }
        }
    }

    const generateRandom = (total, max) => {
        let indexesSet = new Set();
        while(indexesSet.size < total){
            var rand =  Math.floor(Math.random() * Math.floor(max));
            indexesSet.add(rand);
        }
        let indexes = Array.from(indexesSet);
        return indexes;
    }

    const onClickStartGame = async () => {
        const songIndexes = generateRandom(4, 10);
        const rightAnswer = songIndexes[generateRandom(1, 4)[0]];
        const topTracks = await getTopTraks(token, artistId);
        console.log("TOP TRACKS", topTracks);
        let names = []
        for (let i = 0; i < 4; i++) {
            names.push(topTracks.tracks[songIndexes[i]].name);
            console.log(topTracks.tracks[songIndexes[i]].name);
        }
        setNames(names);
        setRightAnswer(topTracks.tracks[rightAnswer].name);
        const ready = await playSong(token, topTracks.tracks[rightAnswer].album.uri, topTracks.tracks[rightAnswer].track_number - 1);
    }

    const validateAnswer = (item) => {
        if(item === rightAnswer){
            setScore(score + 1);
        }
        onClickStartGame();
    }

    const onClickCurrentSong = async () => {
        const resp = await currentSong(token);
    }
    
    const onClickPlaySong = () => {
        playSong(token);
    }

    const onClickNextSong = async () => {
        const ready = await nextSong(token);
        const resp = await currentSong(token);
    }
 
    return(
        <>
            <div>
                <h1>Quizify</h1>
                <h3>My Score: {score}</h3>
                <input type="text" value={userInput} onChange={handleChange} />
                <button onClick={() => onClickSearchArtist()}>SEARCH ARTIST</button>
                <h2>Artist: {artist?.name}</h2>
                <img src={artist?.images[0].url}  width="100" height="100" alt={artist?.name}/>
                {names?.map((item, index) =>
                    <button key={index} onClick={() => validateAnswer(item)}>{item}</button>
                )}
                <button onClick={() => onClickStartGame()}>START GAME</button>
            </div>
        </>
    );
}

export default ArtistQuiz;