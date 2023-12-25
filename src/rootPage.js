//This page is for the self-made router
import React from 'react';
import { RouterProvider } from "react-router-dom";
import router from "./router";
import Website from './Website';

function RootPage() {
  return (
    <>
      <RouterProvider router={router}>
        <Website />
      </RouterProvider>
    </>
  );
}

export default RootPage;
