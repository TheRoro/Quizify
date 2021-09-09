const SelectMode = () => {
	return (
		<div className='h-screen mx-auto'>
			<div className='container mx-auto h-full justify-center'>
				<div className='h-1/8 pb-5'>
					<h1 className='text-center text-5xl font-bold pt-10'>
						Select your play mode
					</h1>
				</div>
				<div className='h-3/4 flex flex-row justify-around'>
					<div className='flex items-center justify-center'>
						<p className='text-center text-5xl'>By Genre</p>
					</div>
					<div className='flex items-center justify-center'>
						<p className='text-center text-5xl'>By Artist</p>
					</div>
					<div className='flex items-center justify-center'>
						<p className='text-center text-5xl'>By Playlist</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SelectMode
