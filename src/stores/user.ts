import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { rootState } from "stores";

export interface IUserState {
  userId: string;
  userName: string;
  profileImage: string;
}

const initialState: IUserState = {
  userId: "",
  userName: "",
  profileImage: "",
};

const user = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUserState>) => {
      state.userId = action.payload.userId;
      state.userName = action.payload.userName;
      state.profileImage = action.payload.profileImage;
    },
  },
});

export const { setUser } = user.actions;
export const userSelecter = (state: rootState) => state.user;
export default user;
