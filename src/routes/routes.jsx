import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    index: true,
    children: [
        {
            
        }
    ]
  },
]);