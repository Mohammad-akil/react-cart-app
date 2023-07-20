import { ShopContext } from "../context/shopContext";
import { useContext } from "react";
const CartItem = (props) => {
  const { cartItems, addToCart, removeFromCart, updateCartItemsCount } =
    useContext(ShopContext);
  const { id, price, productImage, productName, getTotalCartAmount } =
    props.data;
  return (
    <div className="w-96 flex justify-start items-center p-3 border-slate-950 rounded-lg gap-2  border m-2">
      <img className="w-44" src={productImage} alt="" />
      <div className="flex flex-col justify-start text-lg font-semibold">
        <p className="text-md">{productName}</p>
        <p>${price}</p>
        <div className="flex">
          <button
            className="w-10 bg-black text-white text-center rounded-lg"
            onClick={() => removeFromCart(id)}
          >
            -
          </button>
          <input
            className="w-20  border-2 border-black rounded-md mx-2 p-1"
            value={cartItems[id]}
            onChange={(e) => updateCartItemsCount(Number(e.target.value), id)}
          />
          <button
            className="w-10 bg-black text-white text-center rounded-lg"
            onClick={() => addToCart(id)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
