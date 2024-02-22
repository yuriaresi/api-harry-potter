import { combineReducers } from "@reduxjs/toolkit";
import personagemSlice from "./modules/personagem.slice";

export const rootReducer = combineReducers({
    personagens: personagemSlice
});