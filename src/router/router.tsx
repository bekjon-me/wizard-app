import { createBrowserRouter } from "react-router-dom";
import Agreement from "../pages/Agreement/Agreement";
import CardInfo from "../pages/CardInfo/CardInfo";
import FinalPage from "../pages/FinalPage/FinalPage";
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
  {
    path: "card-info",
    element: <CardInfo />,
  },
  {
    path: "agreement",
    element: <Agreement />,
  },
  {
    path: "final",
    element: <FinalPage />,
  },
]);
