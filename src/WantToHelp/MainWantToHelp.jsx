import React, { useState, useEffect } from 'react';
import axios from "axios";

const MainWantToHelp = () => {
    const [needed, setNeeded] = useState('');
    const [donationAmount, setDonationAmount] = useState(0);
    const [email, setEmail] = useState('');
    const [totalMoney, setTotalMoney] = useState(0);
    const [remainingMoney, setRemainingMoney] = useState(0);
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    useEffect(() => {
        axios.get('http://localhost:5000/name')
            .then(response => {
                const usersData = response.data;
                setUsers(usersData);
                const total = usersData.reduce((acc, user) => acc + parseInt(user.needMoney), 0);
                setTotalMoney(total);
                setRemainingMoney(total);
            })
            .catch(error => {
                console.error('Ошибка при получении пользователей:', error);
            });
    }, []);
    useEffect(() => {
        if (users.length > 0 && !selectedUser) {
            const randomIndex = Math.floor(Math.random() * users.length);
            const randomUser = users[randomIndex];
            setSelectedUser(randomUser);
        }
    }, [users, selectedUser]);

    const handleAmountButtonClick = (amount) => {
        setDonationAmount(amount);
    };

    const handleHelpButtonClick = () => {
        if (!selectedUser) {
            console.error('Не выбран пользователь для зачисления денег');
            return;
        }

        console.log('Текущая сумма пожертвования:', donationAmount);
        const updatedMoney = remainingMoney - donationAmount;

        axios.patch(`http://localhost:5000/name/${selectedUser.id}`, {
            needMoney: updatedMoney
        })
            .then(response => {
                console.log('Сумма обновлена успешно');
                setRemainingMoney(updatedMoney);
            })
            .catch(error => {
                console.error('Ошибка при обновлении суммы:', error);
            });
    };

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };

    return (
        <div className={'container'}>
            <h1>Сделать пожертвование детям</h1>
            <button onClick={() => handleAmountButtonClick(250)}>250</button>
            <button onClick={() => handleAmountButtonClick(500)}>500</button>
            <button onClick={() => handleAmountButtonClick(1000)}>1000</button>
            <input
                onChange={handleInputChange}
                placeholder={"Другая сумма"}/>
            {selectedUser && (
                <div>
                    <p>Выбранный пользователь: {selectedUser.firstName} {selectedUser.lastName}</p>
                    <button onClick={handleHelpButtonClick}>Помочь</button>
                    <input type="checkbox" /><p>Я согласен с условиями Нуриса</p>
                    <form action="https://formspree.io/f/myyrwjva" method="POST">
                        <input type="hidden" name="subject" value="Пожертвование"/>
                        <input type="hidden" name="message" value="Пожертвование на имя пользователя"/>
                        <input type="hidden" name="from_email" value={email}/>
                        <button type="submit">Отправить</button>
                    </form>
                    <div>
                        <p>Изначальная сумма: {totalMoney}</p>
                        <p>Оставшаяся сумма: {remainingMoney}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MainWantToHelp;
