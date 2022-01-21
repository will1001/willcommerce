import Home from "./pages/Home";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import ProductList from "./pages/ProductList";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { useSelector } from "react-redux";

function App() {
  const { user } = useSelector((state) => state.auths);

  return (
    <HashRouter basename="/">
      <TopBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
        <Route path="/cart" element={user ? <Cart /> : <Navigate to="/" />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
