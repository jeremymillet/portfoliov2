import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

// Définir le type pour l'état initial
interface AppState {
    isEnglish: boolean;
}

// Initial state
const initialState: AppState = {
    isEnglish: false,
};

// Créer un slice
const slice = createSlice({
    name: "example",
    initialState,
    reducers: {
        setEnglish: (state, action: PayloadAction<boolean>) => {
            state.isEnglish = action.payload;
        },
    },
});

// Exporter les actions pour les utiliser dans les composants
export const { setEnglish } = slice.actions;

// Créer le store
export const store = configureStore({
    reducer: slice.reducer,
});

// Typage du RootState et AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;