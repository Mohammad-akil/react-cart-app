import { ShopContext } from "../context/shopContext";
import { useContext } from "react";

const Product = (props) => {
  const { addToCart, cartItems } = useContext(ShopContext);

  const { id, price, productImage, productName } = props.data;
  const cartItemAmount = cartItems[id];
  return (
    <div className="w-48 flex flex-col justify-center items-center p-3 border-slate-950  border">
      <img className="w-44" src={productImage} alt="" />
      <div className="flex justify-evenly items-center">
        <p className="text-md">{productName}</p>
        <p>${price}</p>
      </div>
      <button
        className="mx-2 mt-2 bg-black text-white rounded-md px-3 py-1 "
        onClick={() => addToCart(id)}
      >
        Add to cart
        {cartItemAmount > 0 && <> ({cartItemAmount})</>}
      </button>
    </div>
  );
};

export default Product;
