import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import StartPage from "./pages/StartPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import AccountPage from "./pages/AccountPage";
import CheckOutPage from "./pages/CheckOutPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/details/:slug" element={<ProductDetailPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
