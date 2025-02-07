import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: _GeneralState = {
    navigateHome: false,
}

export const generalSlice = createSlice({
    initialState,
    name: 'general',
    reducers: {
        setHomeNavigate: (state: _GeneralState, action: PayloadAction<boolean>) => ({
            ...state,
            navigateHome: action.payload
        }),
    }
});

export const actionsType = generalSlice.actions;

export default generalSlice.reducer;