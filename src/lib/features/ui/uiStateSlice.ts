import { createSlice } from "@reduxjs/toolkit";

const initalState = {
    isMobileMenuOpen: false,
}

export const uiStateSlice = createSlice({
    name: 'uiState',
    initialState: initalState,
    reducers: {
        toggleMobileMenuState: (state, action) =>
        {
            state.isMobileMenuOpen = !action.payload;
        },
    }
})

export const { toggleMobileMenuState } = uiStateSlice.actions; 
export default uiStateSlice.reducer;