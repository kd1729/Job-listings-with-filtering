import React from "react";
import { useState } from "react";

const Search = (props) => {
  const [Tags, setTags] = useState([]);

  function handleKeyPress(e) {
    
    if (e.code === "Space") {
      var temp = e.target.value;
      if(temp[0] === " ")
        temp = temp.slice(1);
      setTags((x) => {
        return [...x, temp];
      });
      e.target.value = "";
    }

    if(e.code === "Enter"){
      props.onPressEnter(Tags);
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
      <br />

      <div className="TagsList">
        <span className="TagsHeading">Tags List : </span>
        {Tags.map((name) => (
          <span key={name} className="Tags">
            {" "}
            {name}{" "}
          </span>
        ))}
      </div>

    </div>
  );
};

export default Search;
