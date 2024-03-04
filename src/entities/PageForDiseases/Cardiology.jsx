import React, { useState, useEffect } from 'react';
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import NavBarForAllSite from "../NavBar/NavBarForAllSite.jsx";
import ButtonShowDetails from "../../features/ButtonShowDetails/ButtonShowDetails.jsx";

const Cardiology = () => {
    const [children, setChildren] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/name')
            .then(response => {
                const users = response.data.filter(user => user.diagnosis === "Cardiology");
                setChildren(users); // Используем setChildren для установки состояния
            })
            .catch(error => {
                console.error('Ошибка при получении пользователей:', error);
            });
    }, []);

    return (
        <div>
            <NavBarForAllSite/>

            <h1>Пользователи с диагнозом "Кардиология"</h1>
            <ul>
                {children.map(child => (
                    <Card key={child.id} variant="outlined" style={{ marginBottom: '20px' }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {child.firstName} {child.lastName}
                            </Typography>
                            <Typography variant="body2">
                                Возраст: {child.age}
                            </Typography>

                            <ButtonShowDetails child={child} />

                        </CardContent>
                    </Card>
                ))}
            </ul>
        </div>
    );
};

export default Cardiology;
