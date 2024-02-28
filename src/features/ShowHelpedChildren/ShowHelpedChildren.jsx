import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import NavBarForAllSite from "../../entities/NavBar/NavBarForAllSite.jsx";
import ButtonShowDetails from "../ButtonShowDetails/ButtonShowDetails.jsx";
import {ShowAllHelpedChildren} from "../../app/store/UserThunks.js";

const ShowHelpedChildren = () => {
    const [children, setChildren] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const childrenData = await ShowAllHelpedChildren();
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
                        {child.image && child.image.path && (
                            <img src={child.image.path} alt="Child"  />
                        )}
                    </CardContent>
                    <ButtonShowDetails child={child} />

                </Card>
            ))}
        </div>
    );
};

export default ShowHelpedChildren;
