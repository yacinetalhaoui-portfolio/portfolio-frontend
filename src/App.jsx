import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import About from "./pages/About.jsx";
import Portfolio from "./pages/Portfolio.jsx";

const App = () => {
    return (
        <div className="bg-[#101214]">
            <Router>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/about" element={<About/>}/>
                    <Route path="/portfolio" element={<Portfolio/>}/>
                </Routes>
            </Router>
        </div>
    );
};

export default App;