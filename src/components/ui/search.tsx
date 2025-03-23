const SearchBox = () => {
    return (
      <div className="flex items-center bg-white shadow-md rounded-lg p-2 w-80 mb-10">
        <input
          type="text"
          placeholder="Tìm kiếm bài viết"
          className="flex-1 bg-transparent text-gray-500 placeholder-gray-400 outline-none px-2"
        />
        <button className="bg-green-600 p-2 rounded-lg hover:bg-green-500 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="white"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m2.85-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    );
  };
  
  export default SearchBox;
  