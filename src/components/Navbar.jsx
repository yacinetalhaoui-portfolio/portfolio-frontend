const Navbar = () => {
    return (
        <div className="text-[#7A7C80] text-xl flex justify-around items-center text-center">
            <a className="hover:text-white transition ease-in" href="/about">À propos</a>
            <a className="hover:text-white transition ease-in" href="/portfolio">Portfolio</a>
            <a className="hover:text-white transition ease-in" href="/contact">Contact</a>
        </div>
    );
};

export default Navbar;