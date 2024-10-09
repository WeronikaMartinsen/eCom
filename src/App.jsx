import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Contact from "./Pages/Contact";
import Checkout from "./Pages/Checkout";
import NoPage from "./Pages/NoPage";
import CheckoutSuccess from "./Pages/CheckoutSuccess";
import ContactSuccess from "./Pages/ContactSuccess";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout-success" element={<CheckoutSuccess />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/contact-success" element={<ContactSuccess />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
