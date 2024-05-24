import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme.js";
import Register from "./Register.jsx";
import Login from "./Login.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UpImg from "./UpImg.jsx";
import UpFile from "./UpFile.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Register/>},
  { path: "/login", element: <Login/>},
  { path: "/home", element: <App/>},
  { path: "/upImg", element: <UpImg/>},
  { path: "/upFile", element: <UpFile/>}
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router}/>
    </ChakraProvider>
  </React.StrictMode>
);
