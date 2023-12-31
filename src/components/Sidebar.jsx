import Information from "./Information.jsx";

const Sidebar = () => {
    return (
        <div className="flex flex-col justify-items-center gap-7 max-h-screen m-auto">
            <img className="rounded-full w-[50%] mx-auto" src="https://i.ibb.co/rQbsBQj/profile-pic.png" alt="Profile Picture"/>
            <Information />
        </div>
    );
};

export default Sidebar;