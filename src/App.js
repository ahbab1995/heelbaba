import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import NavBar from "./components/Navbar/Navbar";
import Product from "./components/Products/Product/Product";
import ProductDetails from "./components/Products/ProductDetails/ProductDetails";
import Products from "./components/Products/Products";
import Register from "./components/Register/Register";
import RequireAuth from "./components/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="container">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/products"
          element={
            <RequireAuth>
              <Products></Products>
            </RequireAuth>
          }
        ></Route>
        <Route path="/product" element={<Product></Product>}></Route>
        <Route
          path="/productdetail/:detailId"
          element={<ProductDetails></ProductDetails>}
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
