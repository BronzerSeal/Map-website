import React from "react";
import ReactDOM from "react-dom/client";
import "@radix-ui/themes/styles.css";
import App from "./App";
import { Theme } from "@radix-ui/themes";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Theme style={{ background: "#f7fafc", fontFamily: "Space Grotesk" }}>
      <App />
    </Theme>
  </React.StrictMode>
);
