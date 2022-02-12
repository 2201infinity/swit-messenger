import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { rootState } from "stores";
import { DEFAULT_PROFILE_IMAGE } from "utils/constants";

export interface IUserState {
  userId: number;
  userName: string;
  profileImage: string;
}

const initialState: IUserState = {
  userId: 0,
  userName: "",
  profileImage: DEFAULT_PROFILE_IMAGE,
};

const user = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    setUser: (_, action: PayloadAction<IUserState>) => action.payload,
  },
});

export const { setUser } = user.actions;
export const userSelecter = (state: rootState) => state.user;
export default user;
