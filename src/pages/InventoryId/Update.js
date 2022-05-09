import React, { useEffect, useState } from 'react';
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
                        <p>Price: {price}</p>
                        <p>Qty: {quantity}</p>
                        <p> Supplier-name: {deliver}</p>
                        <p>Description: {description}</p>
                    </Card.Text>
                    <Button>Delivered</Button>
                </Card.Body>
            </Card>
        </div>

    );
};

export default Update;