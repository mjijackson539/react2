import ProductCard from "./ProductCard";
import "./App.css";
function App() {
  return (
    <div>
      {" "}
      <h1>Товары</h1>
      <div className="products">
        <ProductCard
          name="Наушники"
          price={2500}
          image="https://placehold.co/200x150?text=Headphones"
        />

        <ProductCard
          name="Клавиатура"
          price={3000}
          image="https://placehold.co/200x150?text=Keyboard"
        />

        <ProductCard
          name="Мышь"
          price={1500}
          image="https://placehold.co/200x150?text=Mouse"
        />
      </div>
    </div>
  );
}
export default App;
