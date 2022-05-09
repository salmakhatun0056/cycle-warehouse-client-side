import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AddNewItem from '../AddNewItem/AddNewItem';
import './Inventories.css'

const Inventories = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('https://serene-atoll-45482.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    const handleItemDelete = id => {
        const process = window.confirm('Are you sure you want to delete?')
        if (process) {
            console.log('deleting items', id)
            const url = `https://serene-atoll-45482.herokuapp.com/items/${id}`
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
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(item => <tr className='text-center' key={item._id} item={item}>
                            <td><img className='w-50 h-50' src={item.img} alt="" /></td>
                            < td> {item.name}</td>
                            <td>${item.price}</td>
                            <td>{item.quantity}</td>
                            <td><Button className='text-info text-white' onClick={() => handleItemDelete(item._id)}>Delete</Button></td>
                        </tr>)

                    }
                </tbody>

            </table>
            <Link to='/addnewitem'><button className='btn btn-primary text-white d-block text-decoration-none mx-auto mt-3'>Add New Item</button></Link>
        </div >
    );
};

export default Inventories;