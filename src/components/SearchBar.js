import React, { useEffect, useState } from "react";
import "./searchbar.css";
import { BsXLg } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { Product } from "../pages/shop/product";
// import { AimOutlined } from "@ant-design/icons";


function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [bookCount, setBookCount] = useState(0);

  useEffect(() => {
    setBookCount(filteredData.length);
  });

  const handleClick = (event) =>{
    const word = event.target.value;
    if(wordEntered.length !==0){
      setWordEntered("");
      setFilteredData([]);
    }
  }
  
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.productName.toLowerCase().includes(searchWord.toLowerCase()) || value.author.toLowerCase().includes(searchWord.toLowerCase()) || value.date.toLowerCase().includes(searchWord.toLowerCase());
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
        <a className="search"><BsSearch /></a><input className="ip"
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        /><a className="close" onClick={handleClick}><BsXLg /></a>
            {/* <AiOutlineClose /> */}
        {/* <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
            ) : (
              <CloseIcon id="clearBtn" onClick={clearInput} />
              )}
            </div> */}
        {/* <a><AiOutlineClose /></a> */}
      </div>
            <div className="book">Books Count: {bookCount}</div>
      {/* {filteredData.length !== 0 && (
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
      )} */}

      <div className="op">
        {/* <div className="contain"> */}

        {filteredData.map((product) => (
          // <a className="op-res"href={product.link}>
          <Product data={product}/>
          //  </a>
          ))}
      </div>
      {/* </div> */}
      {/* <AiOutlineClose /> */}
    </div>
  );
}

export default SearchBar;
