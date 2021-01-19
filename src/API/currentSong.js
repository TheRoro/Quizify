import axios from 'axios';

const getCurrentSong = async (token) => {
    const resp = await axios.get("	https://api.spotify.com/v1/me/player/currently-playing", {    
    headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    }).then(
      (result) => {
        console.log(result.data);
        return result.data;
      },
      (error) => {
        console.log(error);
      }
    )
    return resp;
}
export default getCurrentSong;