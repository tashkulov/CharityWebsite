import React from 'react';
import FormWrapper from "./FormWrapper.jsx";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";

const TreatmentForm = ({needed,diagnosis,needMoney,updateFields}) => {
    return (



        <div>

            <FormWrapper title={"Требуемое лечение"}>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Требуется</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Age"
                            value={diagnosis} onChange={e => updateFields({diagnosis: e.target.value})}
                        >
                            <MenuItem value={"surgicalTreatment"}>хирургическое лечение</MenuItem>
                            <MenuItem value={"targetedTherapy"}>таргетная терапия</MenuItem>
                            <MenuItem value={"genomicProfiling"}>геномное профилирование</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Диагноз</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={diagnosis}
                            label="Age"
                            onChange={e => updateFields({diagnosis: e.target.value})}                        >
                            <MenuItem value={"Cardiology"}>Кардилогия</MenuItem>
                            <MenuItem value={"SpinalDeformity"}>Деформация позвоночника</MenuItem>
                            <MenuItem value={"Dota2"}> Дота 2</MenuItem>
                            <MenuItem value={"DeformationsOfSystem"}> Деформации костно-мышечной системы</MenuItem>
                        </Select>
                    </FormControl>
                </Box>




                <label>Сколько надо</label>
                <input autoFocus required type="number" value={needMoney}
                       onChange={e => updateFields({needMoney: e.target.value})}/>
            </FormWrapper>
        </div>
    );
};

export default TreatmentForm;