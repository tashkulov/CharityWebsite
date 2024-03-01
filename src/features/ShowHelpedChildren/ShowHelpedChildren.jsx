import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ButtonShowDetails from "../ButtonShowDetails/ButtonShowDetails.jsx";
import { useDispatch } from 'react-redux';
import {ShowAllHelpedChildren, ShowAllNeedHelpChildren} from "../../app/store/UserThunks.js";

const ShowHelpedChildren = () => {
    const [children, setChildren] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();



    useEffect(() => {
        const fetchData = async () => {
            try {
                const {payload} = await dispatch(ShowAllHelpedChildren());
                setChildren(payload);
                console.log(payload)
                setLoading(false);
            } catch (error) {
                console.error('Ошибка при загрузке данных о детях:', error);
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, [ dispatch]);
    return (
        <div>
            {children.length ? (
                children.map(child => (
                    <div key={child.id}>
                        <Card variant="outlined" style={{marginBottom: '20px'}}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {child.firstName} {child.lastName}
                                </Typography>
                                <Typography variant="body2">
                                    Возраст: {child.age}
                                </Typography>
                            </CardContent>
                            <ButtonShowDetails child={child}/>
                        </Card>
                    </div>
                ))
            ) : (
                <div>Дети, нуждающиеся в помощи, отсутствуют.</div>
            )}

        </div>
    );
};

export default ShowHelpedChildren;
