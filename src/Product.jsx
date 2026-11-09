import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";
import products from "./products";

export default function Product() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const product = products.find((item) => item.id === Number(id));

  if (!product) return <h2>Товар не найден</h2>;

  function handleAdd() {
    addToCart(product);
    navigate("/cart");
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>ID товара: {id}</p>
      <p>Цена: {product.price} ₽</p>
      <button onClick={handleAdd}>В корзину</button>
    </div>
  );
}
