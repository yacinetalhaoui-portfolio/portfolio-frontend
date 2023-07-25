import React from 'react';
import {Link} from "react-router-dom";

const Admin = () => {

    const secretRoute = import.meta.env.VITE_REACT_SECRET_ROUTE;

    return (
        <div className="h-screen text-white text-2xl gap-8 flex flex-col items-center justify-center">
            <Link to={`/${secretRoute}/add-project`}>Ajouter un projet</Link>
            <Link to={`/${secretRoute}/add-experience`}>Ajouter une expérience professionnelle</Link>
            <Link to={`/${secretRoute}/add-education`}>Ajouter une formation</Link>
        </div>
    );
};

export default Admin;