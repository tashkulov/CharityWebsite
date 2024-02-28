import { createAsyncThunk } from '@reduxjs/toolkit';
import {getUserLeftMoney, getUserNeedMoney, getUsersData, updateUserLeftMoney} from "../../app/store/UserThunks.js";
import axios from "axios";

export const fetchUsersData = createAsyncThunk(
    'users/fetchUsersData',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('http://localhost:5000/name');
            return response.data;
        } catch (error) {
            console.error('Error fetching users data:', error);
            return rejectWithValue(error.response.data);
        }
    }
);

// Создаем thunk для получения данных о нужных пользователях
export const fetchUserFinancialData = createAsyncThunk('users/fetchUserFinancialData', async (userId) => {
    const needMoney = await getUserNeedMoney(userId);
    const leftMoney = await getUserLeftMoney(userId);
    return { userId, needMoney, leftMoney };
});

// Создаем thunk для обновления данных пользователя
export const updateUserFinancialData = createAsyncThunk('users/updateUserFinancialData', async ({ userId, updatedMoney }) => {
    const response = await updateUserLeftMoney(userId, updatedMoney);
    return response.data;
});