import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GraphProvider } from "./context/GraphContext";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GraphProvider>
      <App />
    </GraphProvider>
  </React.StrictMode>
);
