import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FileProvider } from "./context/fileContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FileProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FileProvider>
);
