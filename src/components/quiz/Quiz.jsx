const Quiz = (props) => {
    const backgroundStyles = {
        backgroundImage:`url(${props.item.album.images[0].url})`,
    };
      
    const progressBarStyles = {
    width: (props.progress_ms * 100 / props.item.duration_ms) + '%'
    };
    // window.onSpotifyWebPlaybackSDKReady = () => {
    //     var player = new Spotify.Player({
    //       name: 'Quizify Player',
    //       getOAuthToken: callback => {
    //         callback('BQBXDkA1RSCorqy--P62NwSfuyJmEpxAYXRmpYS5K4J9WiTMccJVMfOXkgX_E00iwXzpfZEfNBKmE9vhKwB4L48dPR4-02KlvMdXzlJ5ldf5a3GWJ4Q6EwyJ-NlLedP0JZFVHL3zbFSVUGNfVuV6KvkQEDZeFu4A3Mb2K8HG1ipDOIbpjGsdv1o');
    //       },
    //       volume: 0.5
    //     });
    //     player.connect().then(success => {
    //       if (success) {
    //         console.log('The Web Playback SDK successfully connected to Spotify!');
    //       }
    //     })
    //     player.addListener('ready', ({ device_id }) => {
    //     console.log('The Web Playback SDK is ready to play music!');
    //     console.log('Device ID', device_id);
    //     })
    //     player.togglePlay().then(() => {
    //       console.log('Toggled playback!');
    //     });
    //     player.nextTrack().then(() => {
    //       console.log('Skipped to next track!');
    //     });
    //     player.addListener('player_state_changed', ({
    //       position,
    //       duration,
    //       track_window: { current_track }
    //     }) => {
    //       console.log('Currently Playing', current_track);
    //       console.log('Position in Song', position);
    //       console.log('Duration of Song', duration);
    //     }); 
    // }
    return(
        <>
            <div>
                <h1>Quizify</h1>
                <div className="App">
                    <div className="main-wrapper">
                        <div className="now-playing__img">
                        <img src={props.item.album.images[0].url} />
                        </div>
                        <div className="now-playing__side">
                        <div className="now-playing__name">{props.item.name}</div>
                        <div className="now-playing__artist">
                            {props.item.artists[0].name}
                        </div>
                        <div className="now-playing__status">
                            {props.is_playing ? "Playing" : "Paused"}
                        </div>
                        <div className="progress">
                            <div
                            className="progress__bar"
                            style={progressBarStyles}
                            />
                        </div>
                        </div>
                        <div className="background" style={backgroundStyles} />{" "}
                    </div>
                    </div>
            </div>
        </>
    );
}

export default Quiz;