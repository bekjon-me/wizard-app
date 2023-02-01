import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import PersonalInfo from "../pages/PersonalInfo/PersonalInfo";
import Subscription from "../pages/Subscription/Subscription";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "subscription",
    element: <Subscription />,
  },
  {
    path: "personal-info",
    element: <PersonalInfo />,
  },
]);
