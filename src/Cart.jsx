import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Cart() {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Корзина</h2>
      {cart.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>
              {item.name} - {item.price} ₽

              <button
                onClick={() => addToCart(item)}
                style={{ marginLeft: "10px" }}
              >
                Ещё один
              </button>

              <button
                onClick={() => removeFromCart(index)}
                style={{ marginLeft: "10px" }}
              >
                Удалить
              </button>
            </li>
          ))}
        </ul>
      )}
      <h3>Итого: {total} ₽</h3>
    </div>
  );
}