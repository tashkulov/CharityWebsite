import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { getUsersData, updateUserNeedMoney, getUserNeedMoney } from "../../app/store/store";

const MainWantToHelp = () => {
    const [donationAmount, setDonationAmount] = useState(0);
    const [email, setEmail] = useState('');
    const [totalMoney, setTotalMoney] = useState(0);
    const [initialRemainingMoney, setInitialRemainingMoney] = useState();
    const [collectedMoney, setCollectedMoney] = useState(0); 
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

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
        setDonationAmount(amount);
        setCollectedMoney(prevCollectedMoney => prevCollectedMoney + amount);
    };

    const handleHelpButtonClick = () => {
        if (!selectedUser) {
            console.error('Не выбран пользователь для зачисления денег');
            return;
        }
    
      
        updateUserNeedMoney(selectedUser.id, updatedNeedMoney)
            .then(response => {
                console.log('Сумма обновлена успешно');
                setSelectedUser(prevUser => ({ ...prevUser, leftMoney: updatedNeedMoney }));
            })
            .catch(error => {
                console.error('Ошибка при обновлении суммы:', error);
            });
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setCollectedMoney(prevCollectedMoney => prevCollectedMoney + value);

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
                value={email}
                onChange={handleInputChange}
                placeholder={"Другая сумма"}
            />
            {selectedUser && (
                <div>
                    <p>Выбранный пользователь: {selectedUser.firstName} {selectedUser.lastName}</p>
                    <Button variant="contained" onClick={handleHelpButtonClick}>Помочь</Button>
                    <input type="checkbox"/><p>Я согласен с условиями Нуриса</p>
                    <form action="https://formspree.io/f/myyrwjva" method="POST">
                        <input type="hidden" name="subject" value="Пожертвование"/>
                        <input type="hidden" name="message" value="Пожертвование на имя пользователя"/>
                        <input type="hidden" name="from_email" value={email}/>
                        <Button variant="contained" type="submit">Отправить</Button>
                    </form>
                    <div>
                        <p>Изначальная сумма: {totalMoney}</p>
                        <p>Собранная сумма: {collectedMoney}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MainWantToHelp;
