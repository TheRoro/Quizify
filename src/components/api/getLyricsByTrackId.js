import axios from 'axios'

export const getLyricsByTrackId = async (trackId) => {
	let res = await axios.get(
		`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${trackId}&apikey=a94e028b855f2de39b2d4c1fcfdd6bff`
	)
	return res.data.message.body
}
