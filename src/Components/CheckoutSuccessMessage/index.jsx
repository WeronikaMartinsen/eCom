import { Link } from "react-router-dom";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

function CheckoutSuccessMessage() {
  return (
    <>
      <div className="mt-8 custom-max-width h-full flex flex-col justify-center items-center gap-20 pl-1 pr-1 text-center">
        <div>
          <h2 className="text-3xl font-bold mt-8 mb-4">
            We have recived your order!
          </h2>
          <p className="text-xl mt-8">You order number is: 6879065</p>
          <div className="flex justify-center items-center mt-8">
            <CheckCircleIcon
              className="h-16 w-16 text-red-400"
              aria-hidden="true"
            />
          </div>
        </div>
        <Link to={`/`}>
          <button
            title="Continue shopping"
            className="mt-8 p-2 pr-10 pl-10 border text-md gap-2 flex justify-center bg-red-300 rounded-xl hover:bg-red-400"
          >
            Continue Shopping
          </button>
        </Link>
      </div>
    </>
  );
}

export default CheckoutSuccessMessage;
