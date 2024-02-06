import { useEffect, useState } from "react";
import SearchPanel from "./Components/SearchPanel/SearchPanel";
import Cards from "./Components/Cards/Cards";
const items = [
  {
    id: 1,
    name: "T-Shirt",
    price: 2300,
    unit: "$",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    name: "Skirt",
    price: 2000,
    unit: "$",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 3,
    name: "Pant",
    price: 3300,
    unit: "$",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 4,
    name: "Hat",
    price: 600,
    unit: "$",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 5,
    name: "Black T-Shirt",
    price: 2300,
    unit: "$",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 6,
    name: "Ivory Skirt",
    price: 2000,
    unit: "$",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 7,
    name: "White Pant",
    price: 3300,
    unit: "$",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 8,
    name: "Black Hat",
    price: 600,
    unit: "$",
    sizes: ["S", "M", "L", "XL"],
  },
];
function App() {
  const [searchValue, setSearchValue] = useState("");
  const [filteredItems, setFilteredItems] = useState(
    JSON.parse(localStorage.getItem("items")) || items
  );
  const findItems = () => {
    if (searchValue.trimStart()) {
      const newitems = items?.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      console.log(searchValue, newitems);
      setFilteredItems(newitems);
    }
    setSearchValue("");
  };
  const clearInput = () => {
    setSearchValue("");
    setFilteredItems(items);
  };
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(filteredItems));
    return () => {
      localStorage.setItem("items", JSON.stringify(items));
    };
  });

  return (
    <div className="app">
      <SearchPanel
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        findItems={findItems}
        clearInput={clearInput}
      />
      <Cards items={filteredItems} />
    </div>
  );
}

export default App;
