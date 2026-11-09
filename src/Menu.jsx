import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import products from "./products";

function Menu() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const linkStyle = (isActive) => ({
    color: isActive ? "red" : theme === "dark" ? "#fff" : "#000",
    fontWeight: isActive ? "bold" : "normal",
    marginRight: "10px",
  });

  return (
    <nav style={{ marginBottom: "20px" }}>
      <NavLink to="/" end style={({ isActive }) => linkStyle(isActive)}>
        Каталог
      </NavLink>
      <NavLink to="/about" style={({ isActive }) => linkStyle(isActive)}>
        О нас
      </NavLink>
      {products.map((product) => (
        <NavLink
          key={product.id}
          to={`/product/${product.id}`}
          style={({ isActive }) => linkStyle(isActive)}
        >
          Товар {product.id}
        </NavLink>
      ))}
      <NavLink to="/cart" style={({ isActive }) => linkStyle(isActive)}>
        Корзина
      </NavLink>
      <NavLink to="/login" style={({ isActive }) => linkStyle(isActive)}>
        Войти
      </NavLink>
      <NavLink to="/dashboard" style={({ isActive }) => linkStyle(isActive)}>
        Личный кабинет
      </NavLink>
      <button onClick={toggleTheme}>Переключить тему ({theme})</button>
    </nav>
  );
}

export default Menu;
