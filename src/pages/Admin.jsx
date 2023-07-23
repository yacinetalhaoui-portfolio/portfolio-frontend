import React from 'react';
import {Link} from "react-router-dom";

const Admin = () => {
    return (
        <div className="h-screen text-white text-2xl gap-8 flex flex-col items-center justify-center">
            <Link to="/admin/add-project">Ajouter un projet</Link>
            <Link to="/admin/add-experience">Ajouter une expérience professionnelle</Link>
            <Link to="/admin/add-education">Ajouter une formation</Link>
        </div>
    );
};

export default Admin;