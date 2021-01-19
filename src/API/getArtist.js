import axios from 'axios';

const getArtist = (token, id) => {
    var config = {
        method: 'get',
        url: `https://api.spotify.com/v1/artists/${id}`,
        headers: { 
          'Authorization': `Bearer ${token}`
        }
    };
    const resp = axios(config)
        .then(
            (result) => {
                console.log(result);
                return result.data;
            },
            (error) => {
                console.log(error);
            }
        );
    return resp;
};

export default getArtist;