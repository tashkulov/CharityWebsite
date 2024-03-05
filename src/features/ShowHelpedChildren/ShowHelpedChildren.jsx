import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ButtonShowDetails from "../ButtonShowDetails/ButtonShowDetails.jsx";



const ShowHelpedChildren = ({children}) => {





    return (
        <div>
            {children.length ? (
                children.map((child, index) => (
                    <div key={index}>
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
                <div key="no-children">Дети, нуждающиеся в помощи, отсутствуют.</div>
            )}


        </div>
    );
};

export default ShowHelpedChildren;
