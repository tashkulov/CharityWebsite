import React from 'react';
import { Link } from 'react-router-dom';

const ButtonShowDetails = ({ child }) => {

    return (
        <div>
            <Link to={`/child/${child.id}`} style={{ textDecoration: 'none' }}>
                <button>
                    Показать детали для {child.firstName}
                </button>
            </Link>
        </div>
    );
};

export default ButtonShowDetails;
