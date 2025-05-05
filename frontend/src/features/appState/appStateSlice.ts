import type { PayloadAction } from "@reduxjs/toolkit";
import { createAppSlice } from "../../app/createAppSlice";

export enum AppModes {
    Explore = 'Explore',
    Favorites = "Favorites"
}

export type AppModeSliceState = {
    mode: AppModes
}

const initialState:AppModeSliceState = {
    mode: AppModes.Explore
}

export const appModeSlice = createAppSlice({
    name: "appMode",
    initialState,
    reducers: create => ({
        setMode: create.reducer((state, action: PayloadAction<AppModes>) => {
            state.mode = action.payload
        })
    })
});