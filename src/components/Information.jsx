const Information = () => {
    return (
        <div className="text-secondary flex flex-col gap-2 justify-center text-center">
            <h1 className="text-white text-2xl font-bold">Yacine Talhaoui.</h1>
            <h2 className="text-secondary text-2xl">Data Engineer.</h2>
            <p className="text-xl">Paris, France.</p>
            <div className="space-x-6 text-2xl">
                <a className="hover:text-white transition ease-in" href="https://www.linkedin.com/in/yacine-talhaoui-3b8bba241/"><i className="fab fa-linkedin"></i></a>
                <a className="hover:text-white transition ease-in" href="https://github.com/ycncy"><i className="fab fa-github"></i></a>
            </div>
        </div>
    );
};

export default Information;