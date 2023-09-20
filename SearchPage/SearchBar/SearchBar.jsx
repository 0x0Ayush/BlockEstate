import React, { useEffect, useState } from "react";
import { BsSearch, BsArrowRight } from "react-icons/bs";


import Style from "./SearchBar.module.css";
const SearchBar = ({ onHandleSearch, onClearSearch }) => {
  const [search, setSearch] = useState("");
  const [searchItem, setSearchItem] = useState(search);

  useEffect(() => {
    const timer = setTimeout(() => setSearch(searchItem), 1000);
    return () => clearTimeout(timer);
  }, [searchItem]);

  useEffect(() => {
    if (search) {
      onHandleSearch(search);
    } else {
      onClearSearch();
    }
  }, [search]);

  
};

export default SearchBar;
