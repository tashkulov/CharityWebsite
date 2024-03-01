import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import NavBarForAllSite from "../../entities/NavBar/NavBarForAllSite.jsx";
import { useDispatch, useSelector } from 'react-redux';
import {fetchUsersData, moveChildrenToHelped, updateUserLeftMoney} from "../../app/store/UserThunks.js";
import {setCollectedMoney} from "../../features/UserSlice/UserSlice.js";

const MainWantToHelp = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.list);
    const selectedUser = useSelector(state => state.users.selectedUser);
    const totalMoney = useSelector(state => state.users.totalMoney);
    const collectedMoney = useSelector(state => state.users.collectedMoney);

    const [email, setEmail] = useState('');
    const [otherAmount, setOtherAmount] = useState(0);

    useEffect(() => {
        dispatch(fetchUsersData());
    }, [dispatch]);

    const handleAmountButtonClick = async (amount) => {
        if (!selectedUser) {
            alert('Пользователь не выбран!');
            return;
        }

        if (collectedMoney + amount > totalMoney) {
            alert('Достигнута изначальная сумма!');
            return;
        }

        try {
            await dispatch(updateUserLeftMoney({ userId: selectedUser.id, updatedMoney: collectedMoney + amount }));

            dispatch(setCollectedMoney(collectedMoney + amount));
            await dispatch(moveChildrenToHelped({data: users}));

        } catch (error) {
            console.error('Ошибка при обновлении суммы:', error);
        }
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
        setOtherAmount(0);
    };

    return (
        <div>
            <NavBarForAllSite />
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
                onChange={handleInputChangeForEmail}
                placeholder={"введите email"} />
            <Button variant="contained" onClick={handleOtherAmountButtonClick}>Добавить другую сумму</Button>
            {selectedUser && (
                <div>
                    <p>Выбранный пользователь: {selectedUser.firstName} {selectedUser.lastName}</p>
                    <input type="checkbox" /><p>Я согласен с условиями Нуриса</p>
                    <form action="https://formspree.io/f/myyrwjva" method="POST">
                        <input type="hidden" name="subject" value="Пожертвование" />
                        <input type="hidden" name="он пожертвовал" value={collectedMoney} />
                        <input type="hidden" name="from_email" value={email} />
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
