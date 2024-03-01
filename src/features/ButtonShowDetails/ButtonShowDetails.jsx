import React from 'react';
import { Link } from 'react-router-dom';
import Button from "@mui/material/Button";

const ButtonShowDetails = ({ child }) => {
    return (
        <div>
            {child && (
                <Link to={`/child/${child.id}`} style={{ textDecoration: 'none' }}>
                    <Button variant="contained">
                        Показать детали для {child.firstName}
                     </Button>
                </Link>
            )}
        </div>
    );
};

export default ButtonShowDetails;
