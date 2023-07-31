import React from "react";

const DateInput = ({ value, onChange }) => {
    const handleMonthChange = (e) => {
        const month = e.target.value;
        onChange({ ...value, month });
    };

    return (
        <div className="flex space-x-2">
            <input
                type="month"
                className="border border-gray-300 rounded-lg p-2 w-full bg-gray-50 border text-black border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                value={value.month}
                onChange={handleMonthChange}
            />
        </div>
    );
};

export default DateInput;
