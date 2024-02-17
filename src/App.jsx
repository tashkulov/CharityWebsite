import {BrowserRouter, Link, Route, Routes, Outlet} from 'react-router-dom';
import MainWantToHelp from "./pages/WantToHelp/MainWantToHelp.jsx";
import MainNeedHelpPageForm from "./pages/NeedHelpPage/MainNeedHelpPageForm.jsx";
import React from "react";
import Cardiology from "./entities/PageForDiseases/Cardiology.jsx";
import DeformationsOfSystem from "./entities/PageForDiseases/DeformationsOfSystem.jsx";
import Dota2 from "./entities/PageForDiseases/Dota2.jsx";
import GenomicProfiling from "./entities/PageForDiseases/GenomicProfiling.jsx";
import SpinalDeformity from "./entities/PageForDiseases/SpinalDeformity.jsx";
import SurgicalTreatment from "./entities/PageForDiseases/SurgicalTreatment.jsx";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainNeedHelpPageForm />} />
                    <Route path="/MainWantToHelp" element={<MainWantToHelp />} />
                    <Route path="/Cardiology" element={<Cardiology />} />
                    <Route path="/DeformationsOfSystem" element={<DeformationsOfSystem />} />
                    <Route path="/Dota2" element={<Dota2 />} />
                    <Route path="/GenomicProfiling" element={<GenomicProfiling />} />
                    <Route path="/SpinalDeformity" element={<SpinalDeformity />} />
                    <Route path="/SurgicalTreatment" element={<SurgicalTreatment />} />
                </Routes>
            </BrowserRouter>
            <Outlet />
        </div>
    )
}

export default App;
