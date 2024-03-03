import {createAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { fetchUserFinancialData, fetchUsersData } from "../userThunks/userThunks.js";

export const setCollectedMoney = createAction('users/setCollectedMoney');

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        list: [],
        selectedUser: null,
        totalMoney: 0,
        collectedMoney: 0,
        userFinancialData: {},
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsersData.fulfilled, (state, action) => {
                state.list = action.payload;
                if (state.list.length > 0) {
                    const randomIndex = Math.floor(Math.random() * state.list.length);
                    state.selectedUser = state.list[randomIndex];
                    state.totalMoney = parseInt(state.selectedUser.needMoney);
                }
            })
            .addCase(fetchUserFinancialData.fulfilled, (state, action) => {
                const { userId, needMoney, leftMoney } = action.payload;
                state.userFinancialData[userId] = { needMoney, leftMoney };
                if (userId === state.selectedUser?.id) {
                    state.totalMoney = parseInt(needMoney);
                    if (state.collectedMoney === 0) {
                        state.collectedMoney = leftMoney;
                    }
                }
            })
            .addCase(setCollectedMoney, (state, action) => {
                state.collectedMoney = action.payload;
            });
    },
});

export default userSlice.reducer;
