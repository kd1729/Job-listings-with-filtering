import React from "react";

const Search = () => {
  function handleKeyPress(e) {
    if (e.code === 'Space') {
        console.log("Space Key Pressed");
    }
  }

  return (
    <div>
      <input
        className="searchTag"
        type="text"
        placeholder="Enter tags...."
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default Search;
