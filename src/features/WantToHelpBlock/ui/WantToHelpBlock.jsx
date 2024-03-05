import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import {useEffect, useState} from "react";
import styles from "./style.module.scss";
import {
    fetchUsersData, moveChildrenToHelped,
    updateUserLeftMoney
} from "../../../app/store/UserThunks.js";
import { useDispatch, useSelector } from "react-redux";
import { setCollectedMoney } from "../../UserSlice/UserSlice.js";

const WantToHelpBlock = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    const data = useSelector(state => state.users.list);
    const selectedUser = useSelector(state => state.users.selectedUser);
    const totalMoney = useSelector(state => state.users.totalMoney);
    const collectedMoney = useSelector(state => state.users.collectedMoney);
    const [customAmount, setCustomAmount] = useState(0);
    const [amount, setAmount] = useState(0);
    useEffect(() => {
        dispatch(fetchUsersData());
    }, [dispatch]);

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
                data.filter(user =>
                    user.needMoney === user.leftMoney ? dispatch(moveChildrenToHelped(user)) : ""
                );
            console.log('hello',data)
                await dispatch(updateUserLeftMoney({
                    userId: selectedUser.id, updatedMoney: collectedMoney + amount
                }));
                dispatch(setCollectedMoney(collectedMoney + amount));

        } catch (error) {
            console.error('Ошибка при обновлении суммы:', error);
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
