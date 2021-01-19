import React from 'react';
import currentSong from '../../API/currentSong';
import playSong from '../../API/playSong';
import nextSong from '../../API/nextSong';
import getArtist from '../../API/getArtist';
import getTopTraks from '../../API/getTopTracks';
import searchArtist from '../../API/searchArtist';

const Quiz = (props) => {
    const [token, setToken] = React.useState('BQAMIULpnP2jZUtH-d2KgxE0v9pKOfisUYVZVuMprFFjBaRbCfPlpCaGh9KPrKc8cDg7ZeMuD2N3eVxkKYu_Rz4LDOlLk1lA6H53Npmz2hLS0lRmw95GtcEnR1kBIUnUYZCUbE4D894SlFUvs8uY0cDpAT-SdY0vI8xr9R5bx6boXlB_zT71AHzzKFRiocTjrRVQlRAiZ3zF-XdD8x3vgCU6NUS2m7UIqSPW2qnv8uo6Naz1ji9beghDQp9qSbkRvLAifPpaT5jcXXFRR9-YnXoYg9MwjU1ysH7nCP8');
    const [artistId, setArtistId] = React.useState(); //'66CXWjxzNUsdJxJ2JdwvnR' artist id
    const [artist, setArtist] = React.useState(); //Artist Response from artistId
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
            alert('BIEEEEN');
        }
        else {
            alert("MONGOL");
        }
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

export default Quiz;