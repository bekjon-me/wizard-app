import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import AuthReducer from "./AuthSlice";
import SubscriptionReducer from "./SubscriptionSlice";
import InfoReducer from "./InfoSlice";
import { logger } from "./logger";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    subscription: SubscriptionReducer,
    info: InfoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger, thunk),
});

// defining the 'rootstate' as the return type
export type RootState = ReturnType<typeof store.getState>;
// defining the 'dispatch' as the return type
export type AppDispatch = typeof store.dispatch;
