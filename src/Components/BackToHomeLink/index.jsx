import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

function BackToHomeLink() {
  return (
    <NavLink
      to={`/`}
      aria-label="Back to shopping"
      className={({ isActive }) =>
        `flex gap-1 items-center pl-3 ${
          isActive ? "text-red-200 font-bold" : "text-gray-600"
        } hover:text-red-400 transition-colors`
      }
    >
      <ArrowLeftIcon className="h-4 w-4" />
      <span className="text-sm hover:underline cursor-pointer">
        Back to shopping
      </span>
    </NavLink>
  );
}

export default BackToHomeLink;
