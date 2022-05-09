import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import AddNewItem from '../AddNewItem/AddNewItem';
import './Inventories.css'

const Inventories = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    const handleItemDelete = id => {
        const process = window.confirm('Are you sure you want to delete?')
        if (process) {
            console.log('deleting items', id)
            const url = `http://localhost:5000/items/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('deleted')
                        const remaining = items.filter(item => item._id !== id)
                        setItems(remaining)
                    }

                })
        }

    }
    return (
        <div>
            <h2 className='text-center my-3'>Manage Inventory {items.length}</h2>
            <table className='mx-auto' >
                <thead>
                    <tr >
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(item => <tr className='text-center' key={item._id} item={item}>
                            < td> {item.name}</td>
                            <td>${item.price}</td>
                            <td>{item.quantity}</td>
                            <td><Button onClick={() => handleItemDelete(item._id)}>Delete</Button></td>
                        </tr>)

                    }
                </tbody>

            </table>
            <AddNewItem></AddNewItem>
        </div >
    );
};

export default Inventories;