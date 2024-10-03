import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../Stores/Cart";

function ProductCard({ product }) {
  const carts = useSelector((store) => store.cart.items);
  console.log(carts);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: product.id,
        quantity: 1,
        price: product.discountedPrice || product.price,
      })
    );
  };
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
      <div className="flex-grow p-2">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {product.title}
        </h5>
        {product.discountedPrice < product.price ? (
          <>
            {/* Display original price with a line-through */}
            <p className="mb-1 line-through dark:text-gray-400 text-xs text-gray-400">
              {product.price},-
            </p>

            {/* Display discounted price */}
            <p className="mb-1 font-normal text-gray-700 dark:text-gray-400 text-xl">
              {product.discountedPrice},-
            </p>

            {/* Calculate and display discount percentage */}
            <p className="absolute top-1 right-1 text-md text-red-600 font-semibold p-2 bg-white rounded-full">
              {Math.round(
                ((product.price - product.discountedPrice) / product.price) *
                  100
              )}
              %
            </p>
          </>
        ) : (
          // Display only the original price if there’s no discount
          <p className="mb-1 font-normal text-gray-700 dark:text-gray-400 text-xl">
            {product.price},-
          </p>
        )}
      </div>
      <div className="flex justify-center items-center mb-4">
        <button
          className="p-1 border text-md text-center flex justify-center bg-red-300 rounded-xl hover:bg-red-400 hover:shadow-xl dark:bg-gray-800 dark:border-gray-700"
          onClick={handleAddToCart}
        >
          Add to cart
          <ShoppingCartIcon className="h-4 w-4 mt-1 ml-2" />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
