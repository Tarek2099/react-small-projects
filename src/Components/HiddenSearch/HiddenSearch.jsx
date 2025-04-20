import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import SearchBox from "./SearchBox";

const HiddenSearch = () => {
  const [isVisible, setIsVisible] = useState(false);
  const visibilityHandle = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div>
      {isVisible && <SearchBox />}
      {isVisible ? (
        <span style={{ margin: "5px" }} onClick={visibilityHandle}>
          X
        </span>
      ) : (
        <FaSearch style={{ margin: "5px" }} onClick={visibilityHandle} />
      )}
    </div>
  );
};

export default HiddenSearch;
