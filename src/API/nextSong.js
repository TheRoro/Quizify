import axios from 'axios';

const nextSong = async (token) => {
    const requestOptions = {
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    };
    const resp = await axios.post('https://api.spotify.com/v1/me/player/next', {}, requestOptions)
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

export default nextSong;