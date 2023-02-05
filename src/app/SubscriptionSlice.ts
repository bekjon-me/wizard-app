import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "react-redux-typescript";
import { subscription, user } from "./@types.data";
import { RootState } from "./store";

const initialState = [false, false, false] as subscription;

const SubscriptionSlice = createSlice({
  // name used in action types
  name: "subscription",
  // initial state
  initialState,
  // an object of "case reducers"
  // key names are used to generate actions
  reducers: {
    chooseSubscription: (
      state: subscription,
      action: PayloadAction<string, subscription>
    ) => {
      action.payload.forEach((item, index) => {
        if (item) state[index] = true;
      });
    },
  },
});

export const { chooseSubscription } = SubscriptionSlice.actions;
export default SubscriptionSlice.reducer;

// create and export the selector
export const selectSubscription = (state: RootState) => state.subscription;
