import { ThemeProvider } from "@material-tailwind/react";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider
} from "react-router-dom";
import "./index.css";
import router from "./routes/routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <div className=" bg-[#FEFAF6]">
      <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  </React.StrictMode>
);
