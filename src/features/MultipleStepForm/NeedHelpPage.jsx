import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // Импортируем useDispatch из react-redux
import { useMultiStepForm } from './useMultiStepForm';
import ChildForm from '../../entities/FormsForMultiStepForm/UserForm';
import AddressForm from '../../entities/FormsForMultiStepForm/AdressForm';
import TreatmentForm from '../../entities/FormsForMultiStepForm/TreatmentForm';
import Button from '@mui/material/Button';
import { Dialog, Slide } from '@mui/material';
import {submitDataToServer} from "../../app/store/UserThunks.js";
import { v4 as uuidv4 } from 'uuid';

const INITIAL_DATA = {
    id:'',
    firstName: '',
    lastName: '',
    age: 0,
    state: '',
    city: '',
    street: '',
    zip: '',
    needed: '',
    diagnosis: '',
    needMoney: 0,
    leftMoney: 0,
    image: '',
};

function NeedHelpPage() {
    const [data, setData] = useState(INITIAL_DATA);
    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();


    function updateFields(fields) {
        setData(prev => {
            return { ...prev, ...fields };
        });
    }

    const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultiStepForm([
        <ChildForm {...data} updateFields={updateFields} />,
        <AddressForm {...data} updateFields={updateFields} />,
        <TreatmentForm {...data} updateFields={updateFields} />,
    ]);

    const onSubmit = async e => {
        e.preventDefault();
        if (!isLastStep) return next();

        try {

            const userDataWithId = { ...data, id: uuidv4() };
            await dispatch(submitDataToServer(userDataWithId));
            console.log('Data submitted successfully');
            setData(INITIAL_DATA);
            setOpen(true);
        } catch (error) {
            console.error('Error submitting data:', error.message);
        }
    };

    const toggleModal = () => {
        setOpen(state => !state);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
            <Button variant="contained" onClick={toggleModal}>Open modal</Button>

            <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={toggleModal}>
                <form onSubmit={onSubmit}>
                    <div style={{ position: 'absolute', top: '.5rem', right: '.5rem' }}>
                        {currentStepIndex + 1} / {steps.length}
                    </div>
                    {step}
                    <div style={{ marginTop: '1rem', display: 'flex', gap: '.5rem', justifyContent: 'center', paddingBottom: '20px' }}>
                        {!isFirstStep && (
                            <Button variant="outlined" onClick={back}>Back</Button>
                        )}
                        <Button variant="contained" type="submit">{isLastStep ? 'Finish' : 'Next'}</Button>
                    </div>
                </form>
            </Dialog>
        </div>
    );
}
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export default NeedHelpPage;
