import React from "react";
import SearchInput from "../../shop-ui/SearchInput/SearchInput";
import Button from "../../shop-ui/Button/Button";
import "./SearchPanel.sass";
const SearchPanel = ({ searchValue, setSearchValue, findItems, clearInput }) => {
  return (
    <div className="search-panel__wrapper">
      <SearchInput
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        clearInput={clearInput}
        placeholder="Search..."
      />
      <Button title="Search" onClick={findItems} />
    </div>
  );
};

export default SearchPanel;
