import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface InitialStateTypes {
    isSIdebarCollapsed: boolean;
    isDarkMode: boolean;
}

const initialState: InitialStateTypes = {
    isSIdebarCollapsed: false,
    isDarkMode: false,
};
export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setIsSiedebarCollapsed: (state, action: PayloadAction<boolean>) => {
            state.isSIdebarCollapsed = action.payload;
        },
        setIsDarkMode: (state, action: PayloadAction<boolean>) => {
            state.isDarkMode = action.payload;
        }
    },    
})

export const{ setIsSiedebarCollapsed, setIsDarkMode } = globalSlice.actions;

export default globalSlice.reducer;