import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../Stores/Cart";
import React from "react";
import ModalDialog from "../ModalDialog";

function ProductCard({ product }) {
  const carts = useSelector((store) => store.cart.items);
  // console.log(carts);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: product.id,
        quantity: 1,
        price: product.discountedPrice || product.price,
        title: product.title,
        image: {
          src: product.image.url,
          alt: product.image.alt,
        },
      })
    );
    setOpen(true);
  };

  const handleOpen = () => setOpen(!open);

  return (
    <div className="relative bg-white rounded-lg shadow-md flex flex-col h-full justify-between hover:shadow-xl cursor-pointer">
      <Link to={`/Product/${product.id}`}>
        <div className="h-64">
          <img
            className="rounded-t-lg h-full w-full object-cover"
            src={product.image.url}
            alt={product.image.alt}
          />
        </div>
      </Link>
      {/* Content */}
      <div className="flex-grow p-2 mr-2">
        <h5 className="mb-2 ml-2 text-xl font-bold">{product.title}</h5>
        {product.discountedPrice < product.price ? (
          <>
            <p className="mb-1 flex justify-end line-through dark:text-gray-500 text-xs text-gray-400">
              ${product.price},-
            </p>
            <p className="mb-1 flex justify-end text-gray-700 dark:text-gray-400 text-xl font-semibold">
              ${product.discountedPrice},-
            </p>

            <div className="absolute top-1 right-1 text-white pl-3 pr-3 pt-1 pb-1 bg-red-500 rounded-full">
              <p className="font-bold text-md flex justify-end">
                {Math.round(
                  ((product.price - product.discountedPrice) / product.price) *
                    100
                )}
                %
              </p>
              <span className="text-xs pl-1">OFF</span>
            </div>
          </>
        ) : (
          <p className="mb-1 font-normal flex justify-end text-xl">
            ${product.price},-
          </p>
        )}
      </div>
      <div className="flex justify-center items-center mb-4">
        <button
          className="p-1 border text-md text-center flex justify-center bg-red-300 rounded-xl hover:bg-red-400"
          onClick={handleAddToCart}
        >
          Add to cart
          <ShoppingCartIcon className="h-4 w-4 mt-1 ml-2" />
        </button>
      </div>

      {/* Modal Dialog */}
      <ModalDialog open={open} handleOpen={handleOpen} carts={carts} />
    </div>
  );
}

export default ProductCard;
