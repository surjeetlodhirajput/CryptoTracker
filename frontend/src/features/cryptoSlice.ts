// src/features/cryptoSlice.ts
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

interface CryptoState {
    name: string;
    data: any[];
    status: 'idle' | 'loading' | 'failed';
    isPopUpOpen: boolean;
    crytpoList:string[];
}

const initialState: CryptoState = {
    name: 'BTC',
    data: [],
    status: 'idle',
    isPopUpOpen: false,
    crytpoList:['BTC']
};

export const fetchCryptoData = createAsyncThunk<any[], string>(
    'crypto/fetchCryptoData',
    async (cryptoName: string) => {
        const response = await axios.get(`http://localhost:3002/getRecords/${cryptoName}`);
        return response.data;
    }
);

const cryptoSlice = createSlice({
    name: 'crypto',
    initialState,
    reducers: {
        setCryptoName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        setDialogVisibility: (state, action:PayloadAction<boolean>)=>{
            state.isPopUpOpen = action.payload;
        },
        setCryptoList: (state, action: PayloadAction<string[]>)=>{
            state.crytpoList = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCryptoData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCryptoData.fulfilled, (state, action: PayloadAction<any[]>) => {
                state.status = 'idle';
                state.data = action.payload;
            })
            .addCase(fetchCryptoData.rejected, (state) => {
                state.status = 'failed';
            });
    }
});

export const { setCryptoName, setDialogVisibility, setCryptoList } = cryptoSlice.actions;

export const selectCryptoName = (state: RootState) => state.crypto.name;
export const selectCryptoData = (state: RootState) => state.crypto.data;
export const selectCryptoStatus = (state: RootState) => state.crypto.status;
export const selectDialogVisibility = (state: RootState) => state.crypto.isPopUpOpen;
export const selectCryptoList = (state: RootState) => state.crypto.crytpoList;
export default cryptoSlice.reducer;
