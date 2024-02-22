import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Personagem } from "../../models/personagem.model";
import axios from "axios";


export const personagensThunk = createAsyncThunk('personagem/get', async () => {
    const response = await axios.get('https://hp-api.onrender.com/api/characters')

    console.log(response.data.dataOfBirth)

    return response.data as Personagem []
})




const personagensSlice = createSlice({
    name: "personagens",
    initialState: [] as Personagem[],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(personagensThunk.fulfilled, (state, action: PayloadAction<Personagem[]>) => {
            state.push(...action.payload)
        })
    }
})


export default personagensSlice.reducer