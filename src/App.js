import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login"
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import SearchBar from "./components/SearchBar";
import { PRODUCTS } from "./product";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Routes>
            <Route path="/" element = {<Login />} />
            </Routes>
            <Routes>
            </Routes>
          <Navbar />
            <Routes>
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/search"
              element={
                <SearchBar placeholder="Enter a Book Name..." data={PRODUCTS} />
              }
            />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
