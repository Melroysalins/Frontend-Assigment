import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./index.css";

const SearchBar = () => {
  return (
    <div className="searchbar">
      <SearchIcon className="searchIcon" />
      <input type="text" placeholder="search anything..." />
    </div>
  );
};

export default SearchBar;
