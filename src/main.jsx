import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import { store } from "../src/Stores/index.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
