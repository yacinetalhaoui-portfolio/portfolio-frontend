import React, { useState } from "react";

const AddListInput = ({ onListUpdate }) => {
    const [newItem, setNewItem] = useState("");
    const [itemsList, setItemsList] = useState([]);

    const handleChange = (e) => {
        setNewItem(e.target.value);
    };

    const handleAdd = () => {
        if (newItem.trim() !== "") {
            setItemsList([...itemsList, newItem]);
            setNewItem("");
            onListUpdate([...itemsList, newItem]);
        }
    };

    const handleDelete = (index) => {
        const newList = [...itemsList];
        newList.splice(index, 1);
        setItemsList(newList);
        onListUpdate(newList);
    };

    return (
        <div className="p-4">
            <div className="flex space-x-2">
                <input
                    type="text"
                    className="border border-gray-300 rounded-lg p-2 flex-grow"
                    placeholder="Entrez un nouvel élément"
                    value={newItem}
                    onChange={handleChange}
                />
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                    onClick={handleAdd}
                >
                    Ajouter
                </button>
            </div>
            <ul className="mt-4">
                {itemsList.map((item, index) => (
                    <li key={index} className="mb-2 text-white flex gap-4 items-center">
                        <button
                            className="bg-red-500 text-white px-2 py-1 ml-2 rounded-lg"
                            onClick={() => handleDelete(index)}
                        >
                            Supprimer
                        </button>
                        <span className="inline-block w-40 overflow-hidden overflow-ellipsis">
                            {item}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AddListInput;
