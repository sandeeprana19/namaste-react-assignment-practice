import { useDispatch, useSelector } from "react-redux";
import ItemList from "../ItemList/ItemList";
import { clearItems } from "../../utils/cartSlice";

const Cart = () => {
  const addedCartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearItems());
  };

  return (
    <div className="pt-[8.125rem]">
      <div className="w-5/12 mx-auto">
        <div className="flex items-center justify-between mb-[1.875rem]">
          <h1 className="m-0 text-2xl font-extrabold text-black">Cart</h1>

          <button
            className="text-white cursor-pointer bg-[#eb2039] border-none rounded-[1.875rem] h-[2.8125rem] py-[0.625rem] px-5 text-base font-medium"
            onClick={handleClearCart}
          >
            Clear cart
          </button>
        </div>
        {addedCartItems.length === 0 && (
          <p>Your cart is empty. Please add some items to your cart!</p>
        )}
        <ItemList items={addedCartItems} />
      </div>
    </div>
  );
};

export default Cart;
