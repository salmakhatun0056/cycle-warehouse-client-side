import React from 'react';
import { useNavigate } from 'react-router-dom';

const Item = ({ item }) => {
    const { _id, name, img, price, description, quantity, deliver } = item
    const navigate = useNavigate()
    const navigateToInventoryDetail = _id => {
        navigate(`/items/${_id}`)
    }
    return (
        <div className='mb-5 mt-3 item-container text-center'>
            <img className='item-img' src={img} alt="" />
            <h4 className='item-name mt-3'>{name}</h4>
            <p className='item-price'>Price: ${price}</p>
            <h6>Qty: {quantity}</h6>
            <p>Supplier name: <small>{deliver}</small></p>
            <p><small>Item-Description: {description}</small></p>
            <button onClick={() => navigateToInventoryDetail(_id)} className='btn btn-info text-white fw-bold'>Update: {name}</button>
        </div>
    );
};

export default Item;