import PropTypes from "prop-types";
import "../styles/index.css";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="min-h-screen w-full flex flex-col p-0 m-0">
      <Header />
      <main className="flex-grow flex flex-col items-center bg-rose-50 ">
        {children}
      </main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
