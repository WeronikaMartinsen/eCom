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
    const products = JSON.parse(localStorage.getItem("products") || "[]");
    const findDetail = products.filter(
      (product) => product.id === productId
    )[0];
    setDetail(findDetail);
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
      <div className="grid grid-cols-1 sm:grid-cols-5 justify-center gap-2 items-center border bg-white rounded-xl mt-2 w-full">
        <div>
          <Link
            to={`/Product/${productId}`}
            className="flex items-center gap-2"
          >
            <img
              src={detail?.image?.url}
              alt={detail?.image?.alt || "Product image"}
              className="w-full h-36 object-cover rounded-xl rounded-r-none"
            />
          </Link>
        </div>
        <div className="flex justify-center items-center text-center">
          <h3 className="text-md">
            {detail ? detail.title : "Loading title..."}
          </h3>
        </div>

        <div className="flex justify-center items-center text-center">
          <p>
            {detail
              ? (detail.discountedPrice * quantity).toFixed(2)
              : "Loading price..."}
          </p>
        </div>

        <div className="ml-8 mr-8 flex justify-between gap-2">
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
            className="h-6 w-6 text-gray-500 cursor-pointer hover:shadow-md rounded-lg"
          />
        </div>
      </div>
    </>
  );
};
export default CheckoutCarts;
