import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import StartPage from "./pages/StartPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import AccountPage from "./pages/AccountPage";
import CheckOutPage from "./pages/CheckOutPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/details/:slug" element={<ProductDetailPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
      </Routes>
    </div>
  );
}

export default App;
