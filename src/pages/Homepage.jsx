import Information from "../components/Information.jsx";

const Homepage = () => {
    return (
        <div className="text-2xl text-[#7A7C80] min-h-screen flex flex-col gap-1 justify-center text-center align-center">
            <Information />
            <a className="hover:text-white transition ease-in" href="/about"> Démarrer la visite </a>
        </div>
    );
};

export default Homepage;