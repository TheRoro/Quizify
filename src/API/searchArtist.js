import axios from 'axios';

const searchArtist = async (token, userInput) => {
    var config = {
        method: 'get',
        url: `https://api.spotify.com/v1/search?q=${userInput}&type=track%2Cartist&market=US&limit=10&offset=5`,headers: { 
          'Authorization': `Bearer ${token}`
        }
    };
    const resp = axios(config)
        .then(
            (result) => {
                //console.log(result);
                return result.data;
            },
            (error) => {
                console.log(error);
            }
        );
    return resp;
};

export default searchArtist;