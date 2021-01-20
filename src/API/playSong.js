import axios from 'axios';

const playSong = async (token, uri, track_number) => {
    const body = {
        "context_uri": uri,
        "offset": {
            "position": track_number
        },
        "position_ms": 45000
    }
    const header = {   
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        
    };
    const resp = await axios.put('https://api.spotify.com/v1/me/player/play', body, header)
        .then(
            (result) => {
                console.log(result);
                return result;
            },
            (error) => {
                console.log(error);
            }
        );
    return resp;
};

export default playSong;