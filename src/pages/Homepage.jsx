const Homepage = () => {
    return (
        <div className="bg-[#101214] text-2xl min-h-screen flex flex-col text-[#7A7C80] gap-1 justify-center text-center align-center">
            <h2 className="text-white font-bold">Yacine Talhaoui.</h2>
            <p className="text-xl">Paris, France.</p>
            <div className="space-x-6 text-2xl">
                <a className="hover:text-white transition ease-in" href="https://www.linkedin.com/in/yacine-talhaoui-3b8bba241/"><i className="fab fa-linkedin"></i></a>
                <a className="hover:text-white transition ease-in" href="https://github.com/ycncy"><i className="fab fa-github"></i></a>
            </div>
            <a className="hover:text-white transition ease-in" href="/about"> Démarrer la visite </a>
        </div>
    );
};

export default Homepage;