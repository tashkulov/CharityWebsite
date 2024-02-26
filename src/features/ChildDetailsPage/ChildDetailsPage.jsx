import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import NavBarForAllSite from "../../entities/NavBar/NavBarForAllSite.jsx";
import { getChildDetailsById } from "../../app/store/store.js";
import styles from '../ShowHelpedChildren/style.module.scss';

const ChildDetailsPage = () => {
    const { id } = useParams();
    const [childDetails, setChildDetails] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const childData = await getChildDetailsById(id);
                setChildDetails(childData);
            } catch (error) {
                console.error('Ошибка при загрузке данных о ребенке:', error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <div className={styles.container}>
            <NavBarForAllSite />
            {childDetails && (
                <Grid container justifyContent="center">
                    <Grid item xs={22} sm={8} md={6}>
                        <Card className={styles.card}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>Информация о ребенке:</Typography>
                                <Grid container alignItems="center">
                                    <Grid item xs={12} md={6}>
                                        <Typography>Имя: {childDetails.firstName}</Typography>
                                        <Typography>Фамилия: {childDetails.lastName}</Typography>
                                        <Typography>Возраст: {childDetails.age}</Typography>
                                        <Typography>Штат: {childDetails.state}</Typography>
                                        <Typography>Город: {childDetails.city}</Typography>
                                        <Typography>Улица: {childDetails.street}</Typography>
                                        <Typography>Индекс: {childDetails.zip}</Typography>
                                        <Typography>Необходимость: {childDetails.needed}</Typography>
                                        <Typography>Диагноз: {childDetails.diagnosis}</Typography>
                                        <Typography>Необходимая сумма: {childDetails.needMoney}</Typography>
                                        <Typography>Оставшаяся сумма: {childDetails.leftMoney}</Typography>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        {childDetails.image && (
                                            <img src={childDetails.image} alt="Child" style={{ maxWidth: '500px', maxHeight: '500px', float:"right" ,marginRight:"50px",borderRadius:"70px"}} />
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
