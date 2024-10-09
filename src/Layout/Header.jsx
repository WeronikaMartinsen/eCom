import { useState, useEffect } from "react";
import "../styles/index.css";
import Logo from "../images/Logo.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector((store) => store.cart.items);

  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuantity(total);
  }, [carts]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className="bg-rose-50">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex">
            <div className="flex sm:hidden">
              <button
                type="button"
                onClick={toggleMenu}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                aria-expanded={isMenuOpen ? "true" : "false"}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  )}
                </svg>
              </button>
            </div>
            <div className="flex lg:flex-1">
              <NavLink
                className={
                  "link-styles p-1 hover:bg-red-200 active:bg-red-200 focus:active:bg-red-200 rounded-lg"
                }
                to="/"
              >
                <img src={Logo} alt="Logo" className="w-15 h-8" />
              </NavLink>
            </div>

            <div className="hidden sm:flex sm:gap-x-12 bg-rose-50">
              <div className="relative">{/* Dropdown menu */}</div>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "link-styles p-1 bg-red-300 rounded-lg" // Active link styling
                    : "link-styles p-1 hover:bg-red-200 rounded-lg"
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "link-styles p-1 bg-red-300 rounded-lg" // Active link styling
                    : "link-styles p-1 hover:bg-red-200 rounded-lg"
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </div>
          </div>

          {/*Shopping bag*/}

          <div className="lg:flex relative">
            <NavLink className={"link-styles p-1 rounded-lg"} to="/checkout">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              {totalQuantity > 0 && (
                <span className="absolute right-1/2 top-6 bg-red-400 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center">
                  {totalQuantity}
                </span>
              )}
            </NavLink>
          </div>
          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="sm:hidden" role="dialog" aria-modal="true">
              <div className="fixed inset-0 z-10 bg-rose-50"></div>
              <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                  <NavLink className={"link-styles"} to="/">
                    <img src={Logo} alt="Logo" className="w-15 h-8" />
                  </NavLink>
                  <button
                    type="button"
                    onClick={toggleMenu}
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  >
                    <span className="sr-only">Close menu</span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flow-root bg-rose-50">
                  <div className="divide-y divide-gray-500/10">
                    <div className="flex flex-col col justify-center gap-4 mt-8">
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "link-styles-mobile bg-red-300" // Active link styling for mobile
                            : "link-styles-mobile hover:bg-red-200"
                        }
                        onClick={toggleMenu}
                        to="/"
                      >
                        Home
                      </NavLink>
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "link-styles-mobile bg-red-300" // Active link styling for mobile
                            : "link-styles-mobile hover:bg-red-200"
                        }
                        onClick={toggleMenu}
                        to="/contact"
                      >
                        Contact
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
