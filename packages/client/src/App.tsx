import "./App.css";
import { Route, Routes } from "react-router-dom";
import StartPage from "./pages/StartPage";
import AccountPage from "./pages/AccountPage";
import CheckOutPage from "./pages/CheckOutPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { UserContextProvider } from "./context/UserContext";

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/checkout" element={<CheckOutPage />} />
        </Routes>
        <Footer />
      </div>
    </UserContextProvider>
  );
}

export default App;
