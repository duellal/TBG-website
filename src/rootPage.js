//This page is for the self-made router
import React from 'react';
import { RouterProvider } from "react-router-dom";
import router from "./router";

function RootPage() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default RootPage;
