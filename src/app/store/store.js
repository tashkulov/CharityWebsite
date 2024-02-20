import axios from 'axios';

export async function submitDataToServer(data) {
    try {
        const response = await axios.post(`http://localhost:5000/name`, data);
        return response.data;
    } catch (error) {
        throw new Error("Error submitting data:", error);
    }
}
export async function getUserNeedMoney(userId) {
    try {
        const response = await axios.get(`http://localhost:5000/name/${userId}`);
        const userData = response.data;
        return userData.needMoney; 
    } catch (error) {
        throw new Error("Error getting user's need money:", error);
    }
}
export async function getUserLeftMoney(userId) {
    try {
        const response = await axios.get(`http://localhost:5000/name/${userId}`);
        const userData = response.data;
        return userData.leftMoney; // Возвращаем значение оставшейся суммы требуемых денег для пользователя
    } catch (error) {
        throw new Error("Error getting user's need money:", error);
    }
}

export async function getUsersData() {
    try {
        const response = await axios.get('http://localhost:5000/name');
        return response.data;
    } catch (error) {
        throw new Error("Error getting users data:", error);
    }
}

export async function updateUserNeedMoney(userId, updatedMoney) {
    try {
        const response = await axios.patch(`http://localhost:5000/name/${userId}`, {
            needMoney: updatedMoney
        });
        return response.data;
    } catch (error) {
        throw new Error("Error updating user's need money:", error);
    }
}
