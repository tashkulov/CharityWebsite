import React, { useState, useEffect } from 'react';
import { ShowAllNeedHelpChildren } from "../../app/store/store.js";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const ShowChildrenWhoNeedHelp = () => {
    const [children, setChildren] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const childrenData = await ShowAllNeedHelpChildren();
                setChildren(childrenData);
            } catch (error) {
                console.error('Ошибка при загрузке данных о детях:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {children.map(child => (
                <Card key={child.id} variant="outlined" style={{ marginBottom: '20px' }}>
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
        </div>
    );
};

export default ShowChildrenWhoNeedHelp;
