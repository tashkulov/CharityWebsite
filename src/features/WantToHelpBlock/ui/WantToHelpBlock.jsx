import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { useState } from "react";
import styles from "./style.module.scss";
import {
    fetchUsersData,
    getUsersData,
    moveChildrenToHelped,
    updateUserLeftMoney
} from "../../../app/store/UserThunks.js";
import {useDispatch} from "react-redux";

const WantToHelpBlock = () => {
    const [amount, setAmount] = useState(0);
    const [customAmount, setCustomAmount] = useState('');
    const [loading, setLoading] = useState(false);
    const dispatch=useDispatch();

    const handleAmountButtonClick = (value) => {
        setAmount(value);
    };

    const handleCustomAmountChange = (e) => {
        setCustomAmount(e.target.value);
    };

    const handleCustomAmountButtonClick = () => {
        if (customAmount.trim() !== '') {
            setAmount(parseFloat(customAmount));
        }
    };

    const handleHelpButtonClick = async () => {
        setLoading(true);
        try {
            const allUsers = await dispatch(fetchUsersData());
            const randomUser = allUsers.payload[Math.floor(Math.random() * allUsers.payload.length)];
            const updatedLeftMoney = randomUser.leftMoney + amount;
            await dispatch(updateUserLeftMoney({userId: randomUser.id, updatedMoney:updatedLeftMoney}));

        } catch (error) {
            console.error('Ошибка при помощи:', error);
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className={styles.container}> {/* Применяем класс из стилей */}
            <ButtonGroup variant="contained" aria-label="Basic button group" className={styles["button-group"]}>
                <Button variant="contained" onClick={() => handleAmountButtonClick(250)}>250</Button>
                <Button variant="contained" onClick={() => handleAmountButtonClick(500)}>500</Button>

                <Button variant="contained" onClick={() => handleAmountButtonClick(1000)}>1000</Button>
                <input
                    placeholder={'другая сумма'}
                    type={"number"}
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                />
                <Button variant="contained" onClick={handleCustomAmountButtonClick}>Я хочу помочь</Button>
            </ButtonGroup>
            <Button
                variant="contained"
                onClick={handleHelpButtonClick}
                disabled={amount === 0 || loading}
            >
                {loading ? 'Выполняется...' : 'Помочь случайному ребенку'}

            </Button>
        </div>
    );
};

export default WantToHelpBlock;