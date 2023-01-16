import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import Counter from "./routes/Counter"
import App from "./App"
import Profile from "./components/Profile";
import QueryTest from "./components/QueryTest";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/Counter",
    element: <Counter />
  },
  {
    path: "/App/",
    element: <App />
  },
  {
    path: "/profile/:username",
    element: <Profile />
  },
  {
    path: "/querytest",
    element: <QueryTest />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
