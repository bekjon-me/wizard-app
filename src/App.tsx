import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { selectAuth } from "./app/AuthSlice";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { selectSubscription } from "./app/SubscriptionSlice";
import AppProvider from "./router/AppProvider";

export default function App() {
  const selectorAuth = useAppSelector(selectAuth);
  const selectorSubscription = useAppSelector(selectSubscription);

  const dispatch = useAppDispatch();

  return <AppProvider />;
}
