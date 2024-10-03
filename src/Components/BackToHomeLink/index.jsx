import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function BackToHomeLink() {
  return (
    <Link to={`/`}>
      <div className="flex gap-1 items-center pl-3">
        <ArrowLeftIcon className="h-4 w-4 items-center text-gray-500" />
        <span className="text-start text-sm hover:underline cursor-pointer">
          Back to shopping
        </span>
      </div>
    </Link>
  );
}
export default BackToHomeLink;
