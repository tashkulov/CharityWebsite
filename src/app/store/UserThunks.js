import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const submitDataToServer = createAsyncThunk(
    'server/submitDataToServer',
    async (data,{ rejectWithValue }) => {
        try {
            const response = await axios.post(`http://localhost:5000/name`, data);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const getUserNeedMoney = createAsyncThunk(
    'server/getUserNeedMoney',
    async (userId, { rejectWithValue }) => {
        try {
            const response = await axios.get(`http://localhost:5000/name/${userId}`);
            const userData = response.data;
            return userData.needMoney;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const getUserLeftMoney = createAsyncThunk(
    'server/getUserLeftMoney',
    async (userId, { rejectWithValue }) => {
        try {
            const response = await axios.get(`http://localhost:5000/name/${userId}`);
            const userData = response.data;
            return userData.leftMoney;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const getUsersData = createAsyncThunk(
    'server/getUsersData',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('http://localhost:5000/name');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const updateUserNeedMoney = createAsyncThunk(
    'server/updateUserNeedMoney',
    async ({ userId, updatedMoney }, { rejectWithValue }) => {
        try {
            const response = await axios.patch(`http://localhost:5000/name/${userId}`, {
                needMoney: updatedMoney
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const updateUserLeftMoney = createAsyncThunk(
    'server/updateUserLeftMoney',
    async ({ userId, updatedMoney }, { rejectWithValue }) => {
        try {
            const response = await axios.patch(`http://localhost:5000/name/${userId}`, {
                leftMoney: updatedMoney
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

    export const ShowAllNeedHelpChildren = createAsyncThunk(
        'server/ShowAllNeedHelpChildren ',
        async (_, { rejectWithValue }) => {
            try {
                const response = await axios.get('http://localhost:5000/name');
                const allChildrenWhoNeedsHelp = response.data;
                const needHelpChildren = allChildrenWhoNeedsHelp.filter(child => child.needMoney != child.leftMoney);
                return needHelpChildren;
            } catch (error) {
                return rejectWithValue(error.response.data);
            }
        }
    );

export const ShowAllHelpedChildren = createAsyncThunk(
    'server/ShowAllHelpedChildren',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get("http://localhost:5000/helped");
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);


export const moveChildrenToHelped = createAsyncThunk(
    'server/moveChildrenToHelped',
    async (user,{ rejectWithValue }) => {
        try {
            console.log(user,'from data')
            await axios.post('http://localhost:5000/helped', user);
            const response2 = await axios.get('http://localhost:5000/helped');
            await axios.delete(`http://localhost:5000/name/${user.id}`)

            return user;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);



export const getChildDetailsById = createAsyncThunk(
    'server/getChildDetailsById',
    async (childId, { rejectWithValue }) => {
        try {
            const response = await axios.get(`http://localhost:5000/name/${childId}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const fetchUsersData = createAsyncThunk(
    'users/fetchUsersData',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('http://localhost:5000/name');
                return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);