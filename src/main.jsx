import { ThemeProvider } from "@material-tailwind/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import {
  RouterProvider
} from "react-router-dom";
import "./index.css";
import { store } from "./redux/store";
import router from "./routes/routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
    <Provider store={store}>
      <div className=" bg-[#FEFAF6]">
      <RouterProvider router={router} />
      </div></Provider>
    </ThemeProvider>
  </React.StrictMode>
);
