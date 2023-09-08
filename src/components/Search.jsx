import "./search.css";

const Search = ({ setSearch }) => {
  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="search-div">
      <input
        type="text"
        className="input placeholder:italic placeholder:text-gray-800"
        placeholder="Player..."
        onChange={handleInput}
      />
    </div>
  );
};

export default Search;
