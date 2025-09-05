import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Details from "./pages/Details/Details";
import Recipe from "./pages/Recipe/Recipe";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-details/:id" element={<Details />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Home />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
