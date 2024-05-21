import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BoardWrite } from "./page/board/BoardWrite.jsx";
import { Home } from "./page/member/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [{ path: "write", element: <BoardWrite /> }],
  },
]);

function App(props) {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
