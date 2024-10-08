import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Stores/Cart";
import { StarIcon as StarSolid } from "@heroicons/react/24/solid";
import { StarIcon as StarOutline } from "@heroicons/react/24/outline";
import ModalDialog from "../ModalDialog";
import React from "react";

function SingleCard({ product }) {
  const [open, setOpen] = React.useState(false);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const handleMinusQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
  };
  const handlePlusQuantity = () => {
    setQuantity(quantity + 1);
  };
  const handleAddToCard = () => {
    dispatch(
      addToCart({
        productId: product.id,
        quantity: quantity,
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
    <div className="mb-2 mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5 p-4 custom-max-width">
      <div className="h-96">
        <img
          className="rounded-lg h-full w-full object-cover"
          src={product.image.url}
          alt={product.image.alt}
        />
      </div>

      <div className="flex-grow p-5 relative">
        <h5 className="mb-4 text-3xl font-bold">{product.title}</h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
          {product.description}
        </p>

        <div className="mt-4 text-end">
          {product.discountedPrice < product.price ? (
            <>
              <p className="mb-1 mt-2 line-through dark:text-gray-400 text-xs text-gray-400">
                {product.price},-
              </p>

              <p className="mb-1 font-normal text-gray-700 dark:text-gray-400 text-xl">
                {product.discountedPrice},-
              </p>

              <div className="absolute -top-5 right-1 text-white pl-3 pr-3 pt-1 pb-1 bg-red-500 rounded-full">
                <p className="font-bold text-md flex justify-end">
                  {Math.round(
                    ((product.price - product.discountedPrice) /
                      product.price) *
                      100
                  )}
                  %
                </p>
                <span className="text-xs mr-2">OFF</span>
              </div>
            </>
          ) : (
            <p className="mb-1 font-normal text-gray-700 dark:text-gray-400 text-xl">
              {product.price},-
            </p>
          )}
        </div>

        <div className="h-auto">
          {product.reviews &&
          Array.isArray(product.reviews) &&
          product.reviews.length > 0 ? (
            product.reviews.map((review) => (
              <div
                key={review.id}
                className="p-4 border-red-200 border rounded-lg mt-8"
              >
                <p className="text-gray-600 italic">{review.description}</p>
                <div className="flex justify-between mt-2">
                  <div className="flex">
                    {[...Array(5)].map((star, index) => {
                      const ratingValue = index + 1;
                      return (
                        <span key={index}>
                          {ratingValue <= review.rating ? (
                            <StarSolid className="h-6 w-6 text-yellow-500" />
                          ) : (
                            <StarOutline className="h-6 w-6 text-gray-400" />
                          )}
                        </span>
                      );
                    })}
                  </div>
                  <p className="text-sm">{review.username}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm mt-4">
              This product does not have reviews yet.
            </p>
          )}
        </div>

        <div className="mt-8 flex gap-2 justify-center items-center">
          <button
            onClick={handleMinusQuantity}
            className="bg-gray-200 h-full w-10 font-bold rounded-xl text-xl text-center flex justify-center items-center"
          >
            -
          </button>
          <span className="bg-gray-200 h-full w-10 font-bold rounded-xl text-xl text-center flex justify-center items-center">
            {quantity}
          </span>
          <button
            onClick={handlePlusQuantity}
            className="bg-gray-200 h-full w-10 font-bold rounded-xl text-xl text-center flex justify-center items-center"
          >
            +
          </button>
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleAddToCard}
            className="mt-8 p-2 pr-10 pl-10 border text-md gap-2 flex justify-center bg-red-300 rounded-xl hover:bg-red-400"
          >
            Add To Cart
          </button>
        </div>
        <ModalDialog open={open} handleOpen={handleOpen} />
      </div>
    </div>
  );
}

export default SingleCard;
