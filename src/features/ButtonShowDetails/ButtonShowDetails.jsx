import React from 'react';
import { Link } from 'react-router-dom';
import Button from "@mui/material/Button";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";

const ButtonShowDetails = ({ child }) => {
    return (
        <div>
            {child && (
                <Link to={`/child/${child.id}`} style={{ textDecoration: 'none' }}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="90%"
                            image={child.image}
                            alt="Child"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {child.firstName}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                                Из: {child.needMoney} собрано: {child.leftMoney}
                            </Typography>
                        </CardContent>
                    </Card>

                </Link>
            )}
        </div>
    );
};

export default ButtonShowDetails;
