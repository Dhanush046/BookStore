import React, { useState } from "react";
import "./searchbar.css";
// import SearchIcon from "@material-ui/icons/Search";
// import CloseIcon from "@material-ui/icons/Close";
// import { PRODUCTS } from "../product";
import { Product } from "../pages/shop/product";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.productName.toLowerCase().includes(searchWord.toLowerCase());
    });
    // setWordEntered(searchWord);
    // const newFilter1 = data.filter((value) => {
    //   return value.author.toLowerCase().includes(searchWord.toLowerCase());
    // });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
      //   setFilteredData(newFilter1);
    }
  };

  //   const clearInput = () => {
  //     setFilteredData([]);
  //     setWordEntered("");
  //   };

  return (
    <div className="search">
      <div className="searchInputs">
        <input className="ip"
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        {/* <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div> */}
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href={value.link} target="_blank">
                <p>
                  BOOK: {value.productName} AUTHOR: {value.author}
                </p>
              </a>
            );
          })}
        </div>
      )}
      <div className="op">
        {/* <div className="contain"> */}

        {filteredData.map((product) => (
          <Product data={product} />
        ))}
      </div>
      {/* </div> */}
    </div>
  );
}

export default SearchBar;
