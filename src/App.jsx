import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Product } from "./pages/Product";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/login" element={<Login />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  ) 
}

export default App;