import React from "react";
import ReactDOM from "react-dom/client";
import "@radix-ui/themes/styles.css";
import App from "./App";
import "./index.css";
import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "next-themes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider attribute="class">
      <Theme style={{ fontFamily: "Space Grotesk" }}>
        <App />
      </Theme>
    </ThemeProvider>
  </React.StrictMode>
);
