import axios from 'axios'

export const searchTrack = async (searchValue) => {
	let res = await axios.get(
		`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_artist=${searchValue}&page_size=10&page=1&s_track_rating=desc&apikey=a94e028b855f2de39b2d4c1fcfdd6bff`
	)
	return res.data.message.body
}
