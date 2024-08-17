import { Cart } from "./pages/Cart";
import { Checkout } from "./pages/Checkout";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Product } from "./pages/Product";
import { Billing } from "./pages/Billing";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/checkout" element={<Checkout />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  ) 
}

export default App;