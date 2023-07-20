import { PRODUCTS } from "../products";
import Product from "../components/Product";
const Shop = () => {
  return (
    <div className="p-2">
      <div>
        <h1>Store</h1>
      </div>
      <div className="flex flex-wrap gap-3">
        {PRODUCTS.map((product) => {
          return <Product key={product.id} data={product} />;
        })}
      </div>
    </div>
  );
};

export default Shop;
