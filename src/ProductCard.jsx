import { useState } from "react";
function ProductCard(props) {
  const [count, setCount] = useState(0);
  return (
    <div className="productcard">
      {" "}
      <img src={props.image} alt={props.name} /> <h2>{props.name}</h2>{" "}
      <p>Цена: {props.price} ₽</p> <p>Количество: {count}</p>
      <button onClick={() => setCount(count + 1)}>Добавить в корзину</button>
    </div>
  );
}
export default ProductCard;
