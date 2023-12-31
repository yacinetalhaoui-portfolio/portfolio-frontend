import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import About from "./pages/About.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Project from "./pages/Project.jsx";
import Experiences from "./pages/Experiences.jsx";
import AddEducation from "./pages/admin/AddEducation.jsx"
import AddProject from "./pages/admin/AddProject.jsx"
import AddExperience from "./pages/admin/AddExperience.jsx"
import Admin from "./pages/Admin.jsx";

const App = () => {

    const secretRoute = import.meta.env.VITE_REACT_SECRET_ROUTE;

    return (
        <div className="bg-[#101214]">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/about" element={<About/>}/>
                    <Route path="/portfolio" element={<Portfolio/>}/>
                    <Route path="/portfolio/:name" element={<Project/>}></Route>
                    <Route path="/experiences" element={<Experiences/>}></Route>
                    <Route path={`/${secretRoute}`} element={<Admin/>}></Route>
                    <Route path={`/${secretRoute}/add-project`} element={<AddProject/>}></Route>
                    <Route path={`/${secretRoute}/add-experience`} element={<AddExperience/>}></Route>
                    <Route path={`/${secretRoute}/add-education`} element={<AddEducation/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
