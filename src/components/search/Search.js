import { useState } from 'react'
import { useForm } from '../hooks/useForm'
import { searchTrackByArtist } from '../api/searchTrackByArtist'
import { getLyricsByTrackId } from '../api/getLyricsByTrackId'

const onClickSearchIcon = async (searchValue, setTracks) => {
	let response = await searchTrackByArtist(searchValue)
	setTracks(response.track_list)
	console.log(response.track_list)
}

const onClickSong = async (trackId, setLyrics) => {
	let response = await getLyricsByTrackId(trackId)
	setLyrics(response.lyrics.lyrics_body)
	console.log(response.lyrics.lyrics_body)
}

const Search = () => {
	const [values, handleChange] = useForm({ searchValue: '' })
	const [tracks, setTracks] = useState()
	const [lyrics, setLyrics] = useState()
	return (
		<div>
			<div className='container mx-auto'>
				<label
					htmlFor='search'
					className='block text-md font-medium text-gray-700'
				>
					Search
				</label>
				<div className='mt-1 relative rounded-md shadow-sm'>
					<input
						type='text'
						name='searchValue'
						value={values.searchValue}
						onChange={handleChange}
						className='focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 pr-12 text-md border-gray-300 rounded-md'
						placeholder='Song title, Artist, Album'
					/>
				</div>
				<button
					className=''
					type='submit'
					onClick={() => {
						onClickSearchIcon(values.searchValue, setTracks)
					}}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-6 w-6'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
						/>
					</svg>
				</button>
				{tracks &&
					tracks.map((track, index) => (
						<div
							key={index}
							className='bg-blue-200 mt-3'
							onClick={() => {
								onClickSong(track.track.track_id, setLyrics)
							}}
						>
							{'- '}
							{track.track.track_name}
							{' - '}
							{track.track.artist_name}
						</div>
					))}
				{lyrics && <div>{lyrics}</div>}
			</div>
		</div>
	)
}

export default Search
