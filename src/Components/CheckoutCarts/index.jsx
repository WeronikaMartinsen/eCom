import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeQuantity, removeFromCart } from "../../Stores/Cart";
import { TrashIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const CheckoutCarts = (props) => {
  const { productId, quantity } = props.data;
  const [detail, setDetail] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("carts") || "[]");
    if (!Array.isArray(products) || products.length === 0) {
      console.error("No products found in localStorage");
      return;
    }
    const findDetail = products.find(product => product.productId === productId);

    if (findDetail) {
      setDetail(findDetail);
    } else {
      console.error(`Product with ID ${productId} not found`);
    }
  }, [productId]);
  const handleMinusQuantity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity - 1,
      })
    );
  };
  const handlePlusQuantity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity + 1,
      })
    );
  };
  const removeItem = () => {
    dispatch(
      removeFromCart({
        productId: productId,
      })
    );
  };

  console.log(detail);

  return (
    <>
      <div className="grid grid-cols-5 custom-grid-col justify-stretch items-center border bg-white rounded-xl mt-2 w-full">
        <div>
          <Link
            to={`/Product/${productId}`}
            className="flex items-center gap-2"
          >
            <img
               src={detail ?.image.url}
               alt={detail ?.image.alt} 
              className="w-40 h-40 object-cover rounded-xl rounded-r-none"
            />
          </Link>
        </div>
        <div className="flex justify-start pl-1 items-center text-center custom-d-none">
          <h3 className="text-md font-semibold text-start">
            {detail ? detail.title : "Loading title..."}
          </h3>
        </div>

        <div className="flex justify-center items-center text-center">
          {detail ? (
            detail.discountedPrice ? (
              <p>${(detail.discountedPrice * quantity).toFixed(2)}</p>
            ) : (
              <p>${(detail.price * quantity).toFixed(2)}</p>
            )
          ) : (
            <p>Loading price...</p>
          )}
        </div>

        <div className="ml-8 mr-8 custom-media-query flex justify-between gap-2">
          <button
            className="rounded-full w-6 h-6 text-cyan-600"
            onClick={handleMinusQuantity}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            className="rounded-full w-6 h-6 text-cyan-600"
            onClick={handlePlusQuantity}
          >
            +
          </button>
        </div>

        <div className="flex justify-center items-center text-center">
          <TrashIcon
            onClick={removeItem}
            className="h-6 w-6  text-gray-500 cursor-pointer hover:shadow-md rounded-lg"
          />
        </div>
      </div>
    </>
  );
};
export default CheckoutCarts;
