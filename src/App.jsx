import MainNeedHelpPageForm from "./NeedHelpPage/MainNeedHelpPageForm.jsx";
import {BrowserRouter, Link, Route, Routes, Outlet} from 'react-router-dom';
import Cardiology from "./NeedHelpPage/PageForDiseases/Cardiology.jsx";
import DeformationsOfSystem from "./NeedHelpPage/PageForDiseases/DeformationsOfSystem.jsx";
import Dota2 from "./NeedHelpPage/PageForDiseases/Dota2.jsx";
import GenomicProfiling from "./NeedHelpPage/PageForDiseases/GenomicProfiling.jsx";
import SpinalDeformity from "./NeedHelpPage/PageForDiseases/SpinalDeformity.jsx";
import SurgicalTreatment from "./NeedHelpPage/PageForDiseases/SurgicalTreatment.jsx";
import MainWantToHelp from "./WantToHelp/MainWantToHelp.jsx";

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
