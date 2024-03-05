import React, { useState } from 'react';
import Button from "@mui/material/Button";
import { Dialog, Slide } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";

const ButtonWantToHelp = ({ onPayment}) => {
    const [open, setOpen] = useState(false);
    const handleOpenModal = () => {
        setOpen(true);
    };

    const handleCloseModal = () => {
        setOpen(false);
    };

    const handlePayment = (amount) => {
        onPayment(amount);
        handleCloseModal();
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '10vh' }}>
            <Button variant="contained" onClick={handleOpenModal}>Open modal</Button>

            <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleCloseModal}>
                <form>
                    <ButtonGroup variant="contained" aria-label="Basic button group">
                        <Button variant="contained" onClick={() => handlePayment(250)}>250</Button>
                        <Button variant="contained" onClick={() => handlePayment(500)}>500</Button>
                        <Button variant="contained" onClick={() => handlePayment(1000)}>1000</Button>
                    </ButtonGroup>
                    <input
                        type="number"
                        placeholder="Другая сумма"
                    />
                    <Button variant="contained" onClick={() => handlePayment(document.querySelector('input').value)}>Помочь</Button>
                </form>
            </Dialog>
        </div>
    );
};

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default ButtonWantToHelp;
