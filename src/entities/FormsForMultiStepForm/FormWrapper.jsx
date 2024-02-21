import React from 'react';

const FormWrapper = ({title,children}) => {
    return (
        <div>
            <h2 style={{textAlign:"center",margin:0,marginBottom:"2rem",padding:'10px'}}>{title}</h2>
            <div
            style={{display:"grid",gap:'1rem 1.5rem',
                padding: "20px",
            justifyContent:"flex-start",gridTemplateColumns:'auto minmax(auto,400px)',
            }}
            >{children}</div>
        </div>
    );
};

export default FormWrapper;