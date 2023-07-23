import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="text-[#7A7C80] text-xl flex justify-around items-center text-center h-32">
            <Link className="hover:text-white transition ease-in" to="/about">À propos de moi</Link>
            <Link className="hover:text-white transition ease-in" to="/experiences">Expériences</Link>
            <Link className="hover:text-white transition ease-in" to="/portfolio">Portfolio</Link>
        </div>
    );
};

export default Navbar;