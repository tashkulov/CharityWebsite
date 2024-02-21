import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {getUserNeedMoney, getUsersData, updateUserLeftMoney} from "../../app/store/store.js";

const MainWantToHelp = () => {
    const [email, setEmail] = useState('');

    const [totalMoney, setTotalMoney] = useState(0);
    const [initialRemainingMoney, setInitialRemainingMoney] = useState();
    const [collectedMoney, setCollectedMoney] = useState(0);
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [otherAmount, setOtherAmount] = useState(0); // Новое состояние для хранения значения другой суммы

    useEffect(() => {
        getUsersData()
            .then(usersData => {
                setUsers(usersData);
                if (!selectedUser && usersData.length > 0) {
                    const randomIndex = Math.floor(Math.random() * usersData.length);
                    const randomUser = usersData[randomIndex];
                    setSelectedUser(randomUser);
                    getUserNeedMoney(randomUser.id)
                        .then(leftMoney => {
                            setTotalMoney(randomUser.needMoney);
                            setInitialRemainingMoney(leftMoney);
                        })
                        .catch(error => {
                            console.error('Ошибка при получении оставшейся суммы:', error);
                        });
                } else {
                    setTotalMoney(selectedUser.needMoney);
                }
            })
            .catch(error => {
                console.error('Ошибка при получении пользователей:', error);
            });
    }, [selectedUser]);

    const handleAmountButtonClick = (amount) => {
        if (collectedMoney + amount > totalMoney) {
            alert('Достигнута изначальная сумма!');
            return;
        }
        setCollectedMoney(prevCollectedMoney => {
            const updatedCollectedMoney = prevCollectedMoney + amount;
            updateUserLeftMoney(selectedUser.id, updatedCollectedMoney); // Обновляем значение leftMoney
            return updatedCollectedMoney;
        });
    };

    const handleInputChange = (e) => {
        const value = parseFloat(e.target.value);
        setOtherAmount(value);
    };
    const handleInputChangeForEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleOtherAmountButtonClick = () => {
        handleAmountButtonClick(otherAmount);
    };

    return (
        <div className={'container'}>
            <h1>Сделать пожертвование детям</h1>
            <ButtonGroup variant="contained" aria-label="Basic button group">
                <Button variant="contained" onClick={() => handleAmountButtonClick(250)}>250</Button>
                <Button variant="contained" onClick={() => handleAmountButtonClick(500)}>500</Button>
                <Button variant="contained" onClick={() => handleAmountButtonClick(1000)}>1000</Button>
            </ButtonGroup>

            <input
                onChange={handleInputChange}
                placeholder={"Другая сумма"}
            />
            <input
                onChange={(e)=>handleInputChangeForEmail(e)}
                placeholder={"введите emeil"} />
            <Button variant="contained" onClick={handleOtherAmountButtonClick}>Добавить другую сумму</Button> {/* Добавляем кнопку для добавления другой суммы */}
            {selectedUser && (
                <div>
                    <p>Выбранный пользователь: {selectedUser.firstName} {selectedUser.lastName}</p>
                    <input type="checkbox" /><p>Я согласен с условиями Нуриса</p>
                    <form action="https://formspree.io/f/myyrwjva" method="POST">
                        <input type="hidden" name="subject" value="Пожертвование" />
                        <input type="hidden" name="он пожертвовал" value={collectedMoney} />
                        <input type="hidden" name="from_email" value={email}/>
                        <Button variant="contained" type="submit">Отправить</Button>
                    </form>
                    <div>
                        <div>
                            <p>Изначальная сумма: {totalMoney}</p>
                            <p>Собранная сумма: {collectedMoney}</p>
                            <p>Оставшаяся сумма: {totalMoney - collectedMoney}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MainWantToHelp;
