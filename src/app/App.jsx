import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainWantToHelp from "../pages/WantToHelp/MainWantToHelp.jsx";
import MainNeedHelpPageForm from "../pages/NeedHelpPage/MainNeedHelpPageForm.jsx";
import React from "react";
import Cardiology from "../entities/PageForDiseases/Cardiology.jsx";
import DeformationsOfSystem from "../entities/PageForDiseases/DeformationsOfSystem.jsx";
import Dota2 from "../entities/PageForDiseases/Dota2.jsx";
import GenomicProfiling from "../entities/PageForDiseases/GenomicProfiling.jsx";
import SpinalDeformity from "../entities/PageForDiseases/SpinalDeformity.jsx";
import SurgicalTreatment from "../entities/PageForDiseases/SurgicalTreatment.jsx";
import MainChildrenPage from "../pages/Children/ui/MainChildrenPage.jsx";
import MainPage from "../pages/MainPage/ui/MainPage.jsx";
import MedicinePage from "../pages/MedicinePage/ui/MedicinePage.jsx";
import TargetedTherapy from "../entities/PageForDiseases/TargetedTherapy.jsx";
import ButtonShowDetails from "../features/ButtonShowDetails/ButtonShowDetails.jsx";
import ChildDetailsPage from "../features/ChildDetailsPage/ChildDetailsPage.jsx";


function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainNeedHelpPageForm />} />
                    <Route path="/MainWantToHelp" element={<MainWantToHelp/>} />
                    <Route path="/Cardiology" element={<Cardiology />} />
                    <Route path="/DeformationsOfSystem" element={<DeformationsOfSystem />} />
                    <Route path="/Dota2" element={<Dota2 />} />
                    <Route path="/GenomicProfiling" element={<GenomicProfiling />} />
                    <Route path="/SpinalDeformity" element={<SpinalDeformity />} />
                    <Route path="/SurgicalTreatment" element={<SurgicalTreatment />} />
                    <Route path="/TargetedTherapy" element={<TargetedTherapy/>} />
                    <Route path="/MainChildrenPage" element={<MainChildrenPage />} />
                    <Route path="/MainPage" element={<MainPage />} />
                    <Route path="/MainNeedHelpPageForm" element={<MainNeedHelpPageForm />} />
                    <Route path="/MedicinePage" element={<MedicinePage/>} />

                    <Route path="/child/:id" element={<ChildDetailsPage />} /> {/* Добавляем маршрут для отображения страницы с подробностями о ребенке */}
                                 </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
