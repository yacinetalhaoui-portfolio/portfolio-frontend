import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import useMobile from "../utils/useMobile.js";

const Navbar = () => {

    const isMobile = useMobile();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const renderMobile = () => {
        return (
            <div className="fixed top-0 left-0 w-full bg-white z-50 bg-[#1e2124] text-secondary">
                <div
                    className="text-[#7A7C80] text-xl flex justify-between gap-8 md:flex md:justify-between md:items-center md:h-16 p-4">
                    <div className="md:hidden">
                        <button onClick={handleMenuToggle} className="block text-xl">
                            ☰
                        </button>
                    </div>
                    <h1>Yacine Talhaoui</h1>
                </div>

                <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <nav className={`p-4 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
                        <Link
                            className="block py-2 text-center hover:text-white transition ease-in"
                            to="/about"
                            onClick={handleMenuToggle}
                        >
                            À propos de moi
                        </Link>
                        <Link
                            className="block py-2 text-center hover:text-white transition ease-in"
                            to="/experiences"
                            onClick={handleMenuToggle}
                        >
                            Expériences
                        </Link>
                        <Link
                            className="block py-2 text-center hover:text-white transition ease-in"
                            to="/portfolio"
                            onClick={handleMenuToggle}
                        >
                            Portfolio
                        </Link>
                    </nav>
                </div>
            </div>
        )
    }

    const renderDesktop = () => {
        return (
            <div className="text-[#7A7C80] text-xl md:flex md:justify-around md:items-center md:h-32">
                <div className='md:w-3/4 md:text-right md:p-4'>
                    <nav className="md:flex md:justify-around">
                        <Link className="block md:inline-block md:px-4 py-2 hover:text-white transition ease-in"
                              to="/about">À propos de moi</Link>
                        <Link className="block md:inline-block md:px-4 py-2 hover:text-white transition ease-in"
                              to="/experiences">Expériences</Link>
                        <Link className="block md:inline-block md:px-4 py-2 hover:text-white transition ease-in"
                              to="/portfolio">Portfolio</Link>
                    </nav>
                </div>
            </div>
        )
    }

    return isMobile ? renderMobile() : renderDesktop();
};

export default Navbar;
