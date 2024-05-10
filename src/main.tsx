import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFountPage from "./pages/404.tsx";
import Home from "./pages/Home.tsx";
import { Provider } from "react-redux";
import store from "./store/store.tsx";
import { enableMapSet } from "immer";
import Config from "./pages/Config.tsx";

enableMapSet();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFountPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/config", element: <Config /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
