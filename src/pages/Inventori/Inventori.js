import React from 'react';

const Inventori = ({ item }) => {
    const { name } = item
    return (
        <div>
            <h2>name{name}</h2>
        </div>
    );
};

export default Inventori;