import React, { useState } from 'react';
import AddListInput from "../../components/AddListInput.jsx";
import {redirect} from "react-router-dom";
import DateInput from "../../components/DateInput.jsx";

const AddEducation = () => {
    const [educationList, setEducationList] = useState([]);
    const [dateValue, setDateValue] = useState({ month: "", year: "" });
    const [itemsList, setItemsList] = useState([]);

    const handleListUpdate = (newList) => {
        setEducationList(newList);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(dateValue)
    }

    const handleDateChange = (newDateValue) => {
        setDateValue(newDateValue);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="items-center grid grid-cols-2 gap-x-14">
                <AddListInput onListUpdate={handleListUpdate} />
                <DateInput value={dateValue} onChange={handleDateChange}/>
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg">
                    Soumettre
                </button>
            </form>
        </div>
    );
};

export default AddEducation;
