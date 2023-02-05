import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "react-redux-typescript";
import { info } from "./@types.data";
import { RootState } from "./store";

// init state
const initialState = {
  firstName: "",
  lastName: "",
  middleName: "",
  birthdate: "",
  email: "",
  gender: "",
  isOlderThan18: false,
  cardNUmber: "",
} as info;

const InfoSlice = createSlice({
  // name used in action types
  name: "info",
  // initial state
  initialState,
  // an object of "case reducers"
  // key names are used to generate actions
  reducers: {
    addInfo: (state, action: PayloadAction<string, info>) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.middleName = action.payload.middleName;
      state.birthdate = action.payload.birthdate;
      state.email = action.payload.email;
      state.gender = action.payload.gender;
      state.isOlderThan18 = action.payload.isOlderThan18;
    },

    addCard: (state, action: PayloadAction<string, string>) => {
      state.cardNumber = action.payload;
    },
  },
});

export const { addInfo, addCard } = InfoSlice.actions;
export default InfoSlice.reducer;

// create and export the selector
export const selectInfo = (state: RootState) => state.info;
