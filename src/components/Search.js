import React from "react";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";

const Search = ({ handleSearchApp }) => {
  const [searchText, setSearchText] = useState('');
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search..."
        onChange={event => { searchText(event.target.value); }}
      />
      
      <BsSearch className="search-icon" size="1.3rem" />
    </div>
  );
};

export default Search;
