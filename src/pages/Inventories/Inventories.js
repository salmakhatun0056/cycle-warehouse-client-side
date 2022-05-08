import React, { useEffect, useState } from 'react';
import Inventori from '../Inventori/Inventori';

const Inventories = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div>
            <h2>This is Inventories pages {items.length}</h2>
            {
                items.map(item => <Inventori
                    key={item._id}
                    item={item}
                ></Inventori>)
            }
        </div>
    );
};

export default Inventories;