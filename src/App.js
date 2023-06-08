import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
// import {SearchBar} from "./components/SearchBar";
// import BookData from "./Data.json";
import SearchBar from "./components/SearchBar";
import { PRODUCTS } from "./product";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          {/* <Searchbar /> */}
          {/* <Searchbar /> */}
          {/* <SearchBar /> */}
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/search" element = {<SearchBar placeholder="Enter a Book Name..." data={PRODUCTS} />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
