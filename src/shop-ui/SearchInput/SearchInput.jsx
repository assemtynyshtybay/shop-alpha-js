import React from "react";
import "./SearchInput.sass";
const SearchInput = ({ searchValue, setSearchValue, clearInput }) => {
  return (
    <>
      <input
        className="search-input__wrapper"
        value={searchValue}
        onChange={(e) => setSearchValue(e?.target?.value)}
      />
      <strong onClick={clearInput} color="white">
        x
      </strong>
    </>
  );
};

export default SearchInput;
