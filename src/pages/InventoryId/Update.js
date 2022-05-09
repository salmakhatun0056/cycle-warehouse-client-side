import React, { useEffect, useRef, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Update = () => {
    const { id } = useParams()
    const [item, setItem] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        const getData = async () => {
            const url = `http://localhost:5000/items/${id}`
            fetch(url)
                .then(res => res.json())
                .then(data => setItem(data))
        }
        getData()
    }, [id])

    const { name, price, description, _id, img, quantity, deliver } = item

    const handleDeliver = async id => {
        const newQuantity = quantity - 1;
        item.quantity = newQuantity;
        await fetch(`http://localhost:5000/items/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })

        navigate(`/items/${id}`)
    }
    const quantityRef = useRef()

    const handleOneAdd = async e => {
        e.preventDefault()
        const newQty = parseInt(quantityRef.current.value) + quantity;
        item.quantity = newQty;
        await fetch(`http://localhost:5000/items/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
        navigate(`/items/${_id}`)
    }
    return (
        <div>
            <div className='mb-3 mt-5'>
                <Link style={{ textDecoration: "none" }} to='/inventories'><button className='btn btn-info  text-white mx-auto d-block'>Manage All Inventories</button></Link>
            </div>
            <Card className='mx-auto' style={{ width: '25rem' }}>
                <Card.Img className='w-50 h-50 mx-auto mt-3' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Name: {name}</Card.Title>
                    <Card.Text>
                        <p>Id: {_id}</p>
                        <p style={{ color: 'orange' }}>Price: {price}</p>
                        <p>Qty: {quantity}</p>
                        <p> Supplier-name: {deliver}</p>
                        <p>Description: {description}</p>
                    </Card.Text>
                </Card.Body>
                <button className='btn btn-info text-white d-block mx-auto mb-3' onClick={() => handleDeliver(_id)}>Delivered</button>
            </Card>

            <div className='w-50 mx-auto mt-5'>
                <form className='d-block mx-auto w-100' onSubmit={handleOneAdd}>
                    <input ref={quantityRef} type="number" min="1" placeholder='QTY' /><button>Restock</button>
                </form>
            </div>
        </div>

    );
};

export default Update;