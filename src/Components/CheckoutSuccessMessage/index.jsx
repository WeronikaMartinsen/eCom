import { Link } from "react-router-dom";

function CheckoutSuccessMessage() {
  return (
    <>
      <div className="mt-8 custom-max-width h-full flex flex-col justify-center items-center gap-20 pl-1 pr-1 text-center">
        <div>
          <h2 className="text-2xl mt-6 mb-4">We have recived your order!</h2>
          <p>You order number is: 6879065</p>
        </div>
        <Link to={`/`}>
          <button className="mt-8 p-2 pr-10 pl-10 border text-md gap-2 flex justify-center bg-red-300 rounded-xl hover:bg-red-400 hover:shadow-xl dark:bg-gray-800 dark:border-gray-700">
            Continue Shopping
          </button>
        </Link>
      </div>
    </>
  );
}

export default CheckoutSuccessMessage;
