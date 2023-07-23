import Information from "../components/Information.jsx";
import {Link} from "react-router-dom";

const Homepage = () => {
    return (
        <div className="text-2xl text-[#7A7C80] min-h-screen flex flex-col gap-1 justify-center text-center align-center">
            <Information />
            <Link className="hover:text-white transition ease-in" to="/about"> Démarrer la visite </Link>
        </div>
    );
};

export default Homepage;