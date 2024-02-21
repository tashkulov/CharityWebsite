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
export async function updateUserLeftMoney(userId, updatedMoney) {
    try {
        const response = await axios.patch(`http://localhost:5000/name/${userId}`, {
            leftMoney: updatedMoney
        });
        return response.data;
    } catch (error) {
        throw new Error("Error updating user's left money:", error);
    }
}

export async function ShowAllNeedHelpChildren() {
    try {
        const response = await axios.get('http://localhost:5000/name');
        const allChildrenWhoNeedsHelp= response.data;

        const needHelpChildren=allChildrenWhoNeedsHelp.filter(child=>child.needMoney>0)
        return needHelpChildren
    } catch (error) {
        throw new Error("Ошибка при получении данных о детях, нуждающихся в помощи:", error);
    }
}
export async function ShowAllHelpedChildren() {
    try {
        const response = await axios.get("http://localhost:5000/name");
        const allChildren = response.data;

        const allChildrenHelped = allChildren.filter(child => child.needMoney == child.leftMoney);

        return allChildrenHelped;
    } catch (error) {
        throw new Error("Ошибка при получении данных о детях, которым уже помогли:", error);
    }
}