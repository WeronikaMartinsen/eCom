import "../styles/index.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="h-26 bg-red-300 flex justify-center align-bottom">
        <div className="flex flex-col items-center text-center">
          <div className="container">
            <div>
              <p className="flex items-center justify-center mb-4 mt-4">
                <span className="me-4">Contact us</span>
                <NavLink to="/contact">
                  <button
                    type="button"
                    className="rounded-xl border border-white p-1 pr-2 pl-2"
                  >
                    Send message
                  </button>
                </NavLink>
              </p>
            </div>
            <div className="w-full p-4 text-center text-xs border-t border-white">
              © 2024 Copyright: Weronika Martinsen
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
