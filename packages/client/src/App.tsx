import React, { createContext, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import StartPage from "./pages/StartPage";
import AccountPage from "./pages/AccountPage";
import CheckOutPage from "./pages/CheckOutPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const UserContext = createContext<any>("")

function App() {
  const [name, setName] = useState<string>();



  return (
    <UserContext.Provider value={{name, setName}}>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
      </Routes>
      <Footer />
    </div>
    </UserContext.Provider>
  );
}

export { UserContext }
export default App;
