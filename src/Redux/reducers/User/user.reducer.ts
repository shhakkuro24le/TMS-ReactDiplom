

import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type InitialStateType = {
    email: string;
    tocken: string;
    id: string;
};

const initialState: InitialStateType = {
    email: '',
    tocken: '',
    id: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state: any, action: any) => {
            state.email = action.payload.email;
          
            state.id = action.payload.id;
            state.tocken = action.payload.token;
        },
        removeUser: (state: any) => {
            state.email = '';
            state.tocken = '';
            state.id = '';
        },
    },
});

export const { setUser, removeUser } = userSlice.actions;

const reducer = userSlice.reducer;

export default reducer;

export const UserSelectors = {
    getUser: (state: RootState) => state.user,
};