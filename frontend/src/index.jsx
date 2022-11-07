import React from "react";
import ReactDOM from "react-dom/client";
import PageMain from "@/components/pages/pageMain";
import ErrorPage from "@/components/routes/error-page";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import ProductRender from "@/components/products/ProductRender";

import App from "@/components/App";
import "@/index.css";

const router = createBrowserRouter([
  {
    path: "/products",
    element: <ProductRender />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <PageMain />,
  },
]);

function Main() {
  return (
    <React.StrictMode>
      <App />
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);