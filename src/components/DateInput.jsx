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
                className="border border-gray-300 rounded-lg p-2"
                value={value.month}
                onChange={handleMonthChange}
            />
        </div>
    );
};

export default DateInput;
