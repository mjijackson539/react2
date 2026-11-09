import ProductCard from "./ProductCard";
import products from "./products";

function Home() {
  return (
    <div>
      <h1>Каталог товаров</h1>
      <div className="products">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
