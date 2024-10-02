import { AiOutlineSearch } from 'react-icons/ai'

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative w-full flex">
      {/* Search icon */}
      <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <AiOutlineSearch className="text-gray-500 " size={24} />
      </span>

      {/* Input field */}
      <input
        type="text"
        placeholder="Search for movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-300   rounded-lg  pl-12 p-6 w-full shadow-sm" // Adjust padding for icon
      />

      {/* Search button */}
      <button
        className="bg-red-500 text-white px-6 py-2 rounded-lg ml-3 hover:bg-red-600 transition-all duration-300"
        onClick={() => console.log('Search clicked!')}
      >
        Search
      </button>
    </div>
  )
}

export default SearchBar
