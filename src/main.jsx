import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from 'react-hot-toast'
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster
      position="top-centre"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
        // Define default options
        className: "",
        duration: 5000,
        style: {
          background: "white",
          color: "red",
          marginTop: "70px",
        },

        // Default options for specific types
        success: {
          duration: 5000,
          theme: {
            primary: "green",
            secondary: "black",
            background: "green",
            color: "white",
          },
          style: {
            marginBottom: "30px",
            padding: "20px 20px",
            fontSize: "15px",
            fontWeight: "600",
            border: "2px solid green",
          },
          position: "bottom-right",
        },
      }}
    />
    <App />
  </React.StrictMode>
);
