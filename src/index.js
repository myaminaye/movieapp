import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import flowerFavicon from "./assets/favicon.png";

const setFavicon = () => {
  const link = document.createElement("link");
  link.rel = "icon";
  link.href = flowerFavicon;
  document.head.appendChild(link);
};

setFavicon();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
