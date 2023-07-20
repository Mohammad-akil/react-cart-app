import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="flex justify-end items-center text-white bg-black py-3 px-4 gap-3 font-semibold text-xl">
      <Link to="/">
        <h1>Shop</h1>
      </Link>
      <Link to="/cart">
        <AiOutlineShoppingCart size={25} />
      </Link>
    </div>
  );
}
