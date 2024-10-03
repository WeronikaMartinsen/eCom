import { ShoppingCartIcon } from "@heroicons/react/24/solid";

function AddToBag() {
  return (
    <button className="p-2 border text-sm gap-2 flex justify-center hover:bg-transparent hover:shadow-xl dark:bg-gray-800 dark:border-gray-700">
      <ShoppingCartIcon className="h-5 w-5 mr-2" /> Add to bag
    </button>
  );
}
export default AddToBag;
