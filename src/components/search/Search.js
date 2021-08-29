const Search = () =>{
    return(
    <div>
      <div className="container mx-auto">
        <label htmlFor="search" className="block text-md font-medium text-gray-700">
            Search
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
            <input
            type="text"
            name="Search"
            id="price"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 pr-12 text-md border-gray-300 rounded-md"
            placeholder="Song title, Artist, Album"
            />
        </div>
        <button className="" type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </button>
      </div>
    </div>
    );
}

export default Search;