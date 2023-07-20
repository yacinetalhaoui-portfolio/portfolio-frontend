import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import About from "./pages/About.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Project from "./pages/Project.jsx";
import Skills from "./components/Skills.jsx";
import Experiences from "./pages/Experiences.jsx";

const App = () => {
    return (
        <div className="bg-[#101214]">
            <Router>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/about" element={<About/>}/>
                    <Route path="/portfolio" element={<Portfolio/>}/>
                    <Route path="/portfolio/:name" element={<Project/>}></Route>
                    <Route path="/experiences" element={<Experiences/>}></Route>
                </Routes>
            </Router>
        </div>
    );
};

export default App;