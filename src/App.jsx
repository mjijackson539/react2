import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Product from "./Product";
import Menu from "./Menu";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Cart from "./Cart";
import { ThemeContext } from "./ThemeContext";
import { CartProvider } from "./CartContext";
import "./App.css";
function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const appStyles = {
    backgroundColor: theme === "dark" ? "#333" : "#fff",
    color: theme === "dark" ? "#fff" : "#000",
    minHeight: "100vh",
    padding: "20px",
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <CartProvider>
        <div style={appStyles} className={theme}>
          <BrowserRouter>
            <Menu />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </BrowserRouter>
        </div>
      </CartProvider>
    </ThemeContext.Provider>
  );
}
export default App;
