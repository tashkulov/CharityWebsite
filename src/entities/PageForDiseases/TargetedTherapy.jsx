import React, {useEffect, useState} from 'react';
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import NavBarForAllSite from "../NavBar/NavBarForAllSite.jsx";

const TargetedTherapy = () => {

    const [userIll, setUserIll] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/name')
            .then(response => {
                const users = response.data.filter(user => user.needed === "targetedTherapy");
                setUserIll(users);
            })
            .catch(error => {
                console.error('Ошибка при получении пользователей:', error);
            });
    }, []);

    return (
        <div>
            <NavBarForAllSite/>

            <h1>Пользователи с диагнозом "Таргетная терапия"</h1>
            <ul>
                {userIll.map(child => (
                    <Card key={child.id} variant="outlined" style={{marginBottom: '20px'}}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {child.firstName} {child.lastName}
                            </Typography>
                            <Typography variant="body2">
                                Возраст: {child.age}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </ul>
        </div>
    );
};

export default TargetedTherapy;