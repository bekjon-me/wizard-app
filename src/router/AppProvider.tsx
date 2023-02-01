import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

export default function AppProvider() {
  return <RouterProvider router={router} />;
}
