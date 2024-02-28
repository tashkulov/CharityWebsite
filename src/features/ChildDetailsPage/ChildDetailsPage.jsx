import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import NavBarForAllSite from "../../entities/NavBar/NavBarForAllSite.jsx";
import styles from '../ShowHelpedChildren/style.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { ShowAllNeedHelpChildren } from "../../app/store/UserThunks.js";

const ChildDetailsPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [child, setChild] = useState(null);

    const children = useSelector(state => state.users.children);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const actionResult = await dispatch(ShowAllNeedHelpChildren());
                const childrenData = actionResult.payload; // Доступ к массиву детей в объекте
                const selectedChild = childrenData.find(child => child.id === id);
                setChild(selectedChild);
            } catch (error) {
                console.error('Ошибка при загрузке данных о детях:', error);
            }
        };

        fetchData(); // Вызов функции fetchData

    }, [dispatch, id]);

    return (
        <div className={styles.container}>
            <NavBarForAllSite />
            {child && (
                <Grid container justifyContent="center">
                    <Grid item xs={22} sm={8} md={6}>
                        <Card className={styles.card}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>Информация о ребенке:</Typography>
                                <Grid container alignItems="center">
                                    <Grid item xs={12} md={6}>
                                        <Typography>Имя: {child.firstName}</Typography>
                                        <Typography>Фамилия: {child.lastName}</Typography>
                                        <Typography>Возраст: {child.age}</Typography>
                                        <Typography>Штат: {child.state}</Typography>
                                        <Typography>Город: {child.city}</Typography>
                                        <Typography>Улица: {child.street}</Typography>
                                        <Typography>Индекс: {child.zip}</Typography>
                                        <Typography>Необходимость: {child.needed}</Typography>
                                        <Typography>Диагноз: {child.diagnosis}</Typography>
                                        <Typography>Необходимая сумма: {child.needMoney}</Typography>
                                        <Typography>Оставшаяся сумма: {child.leftMoney}</Typography>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        {child.image && (
                                            <img src={child.image} alt="Child" style={{ maxWidth: '500px', maxHeight: '500px', float: "right", marginRight: "50px", borderRadius: "70px" }} />
                                        )}
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            )}
        </div>
    );
};

export default ChildDetailsPage;
