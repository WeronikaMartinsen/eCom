import "../styles/index.css";

function Footer() {
  return (
    <>
      <footer className="h-26 bg-red-300 bottom-0 flex justify-center align-bottom">
        <div className="flex flex-col items-center text-center">
          <div className="container">
            <div>
              <p className="flex items-center justify-center mb-4 mt-4">
                <span className="me-4">Register for free</span>
                <button
                  type="button"
                  className="inline-block rounded-full border-2 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out hover:border-neutral-300 hover:text-neutral-200 focus:border-neutral-300 focus:text-neutral-200 focus:outline-none focus:ring-0 active:border-neutral-300 active:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600"
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                >
                  Sign up!
                </button>
              </p>
            </div>
            <div className="w-full p-4 text-center text-xs border-t-2">
              © 2023 Copyright: Weronika Martinsen
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
