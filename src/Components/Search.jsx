import React from "react";
import { useState } from "react";

const Search = () => {

  const [Tags, setTags] = useState([]);

 
  function handleKeyPress(e) {
    console.log(e.target.value);
    if (e.code === "Space") {      
      setTags(x => {return [...x, e.target.value]});
      e.target.value = "";
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
      {console.log(Tags)}
    </div>
  );
};

export default Search;
