import React, { useState } from "react";
import {useNavigate} from "react-router-dom";

const SearchableList = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const navigate = useNavigate();

    const items = [
        { id: 1, name: "Iron Man", description: "Iron Man" },
        { id: 2, name: "Spiderman", description: "Spiderman" },
        { id: 3, name: "Ant-Man", description: "Ant-Man" },
        { id: 4, name: "Captain America", description: "Captain America" },
    ];

    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleItemClick = (item) => {
        navigate(`/item/${item.id}`);
    };

    return (
        <div className="searchable-list-container">
            <input
                type="text"
                placeholder="Keresés..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                className="search-input"
            />

            {isFocused && filteredItems.length > 0 && (
                <ul className="item-list">
                    {filteredItems.map((item) => (
                        <div
                            key={item.id}
                            className="list-item"
                            onClick={() => handleItemClick(item)}
                        >
                            {item.name}
                        </div>
                    ))}
                </ul>
            )}
            {isFocused && filteredItems.length === 0 && (
                <p className="no-results">Nincs találat.</p>
            )}
        </div>
    );
};

export default SearchableList;