import "../styles/index.css";
import Layout from "../Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import CheckoutCarts from "../Components/CheckoutCarts";
import { clearCart, selectTotalPrice } from "../Stores/Cart";
import BackToHomeLink from "../Components/BackToHomeLink";
import { Link } from "react-router-dom";

const Checkout = () => {
  const carts = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const totalPrice = useSelector(selectTotalPrice);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <Layout>
      {/* Check if carts have items */}
      {carts.length > 0 ? (
        <div className="custom-max-width h-full flex flex-col gap-20 pl-1 pr-1">
          <BackToHomeLink />
          <div>
            <h2 className="text-xl mt-6 mb-4">Shopping Cart</h2>

            {/* Display cart items */}
            {carts.map((item, key) => (
              <CheckoutCarts key={key} data={item} />
            ))}

            <div className="flex justify-end gap-2 mt-4">
              <span>Total price:</span>
              <span className="font-semibold">${totalPrice.toFixed(2)}</span>
            </div>
          </div>

          {/* Buttons for clearing cart and proceeding to checkout */}
          <div className="flex justify-between mb-8 mt-8">
            <button
              onClick={handleClearCart}
              className="p-3 border text-md gap-2 flex justify-center border-red-300 rounded-xl hover:bg-red-400 hover:shadow-xl dark:bg-gray-800 dark:border-gray-700"
            >
              Clear Cart
            </button>
            <button className="p-3 border text-md gap-2 flex justify-center bg-red-300 rounded-xl hover:bg-red-400 hover:shadow-xl dark:bg-gray-800 dark:border-gray-700">
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-8 custom-max-width h-full flex flex-col justify-center items-center gap-20 pl-1 pr-1 text-center mb-10">
          <div>
            <h2 className="text-2xl mt-6 mb-4">Your shopping cart is empty!</h2>
            <p>Looks like you have not added anything to your cart yet!</p>
          </div>
          <Link to={`/`}>
            <button className="mb-10 p-2 pr-10 pl-10 border text-md gap-2 flex justify-center bg-red-300 rounded-xl hover:bg-red-400 hover:shadow-xl dark:bg-gray-800 dark:border-gray-700">
              Continue Shopping
            </button>
          </Link>
        </div>
      )}
    </Layout>
  );
};

export default Checkout;
