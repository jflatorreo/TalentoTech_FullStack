// components/SearchBar.js
import React from 'react';

function SearchBar({ searchTerm, setSearchTerm }) {
    return (
        <div className="mb-6">
            <input
                type="text"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
}

export default SearchBar;