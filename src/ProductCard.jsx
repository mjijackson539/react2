import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";

function ProductCard(props) {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  function handleAdd() {
    addToCart({ id: props.id, name: props.name, price: props.price });
    navigate("/cart");
  }

  return (
    <div className="productcard">
      <img src={props.image} alt={props.name} />
      <h2>
        <Link to={`/product/${props.id}`}>{props.name}</Link>
      </h2>
      <p>Цена: {props.price} ₽</p>
      <button onClick={handleAdd}>В корзину</button>
    </div>
  );
}

export default ProductCard;
