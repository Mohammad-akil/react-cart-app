import { PRODUCTS } from "../products";
import { ShopContext } from "../context/shopContext";
import { useContext } from "react";
import CartItem from "../components/CartItem";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  return (
    <>
      <div className="p-2">
        <h1 className="text-center text-lg font-semibold">Your cart items</h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="text-center mt-3">
          <p className="my-2">Subtotal : ${totalAmount}</p>
          <button
            className="w-max bg-black text-white text-center rounded-lg px-2 py-1 m-2"
            onClick={() => navigate("/")}
          >
            Continue Shopping{" "}
          </button>
          <button
            className="w-max bg-black text-white text-center rounded-lg px-2 py-1 m-2"
            onClick={() => {
              alert("Your total is " + totalAmount);
            }}
          >
            Checkout{" "}
          </button>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-xl font-semibold text-center">
            Your cart is empty
          </h1>
          <button
            className="w-max bg-black text-white text-center rounded-lg px-2 py-1 m-2"
            onClick={() => navigate("/")}
          >
            Go to Product page
          </button>
        </div>
      )}
    </>
  );
};

export default Cart;
