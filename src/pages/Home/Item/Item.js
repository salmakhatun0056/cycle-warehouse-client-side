import React from 'react';

const Item = ({ item }) => {
    const { name, img, price, description, quantity, deliver } = item
    return (
        <div className='mb-5 mt-3 item-container text-center'>
            <img className='item-img' src={img} alt="" />
            <h4 className='item-name mt-3'>{name}</h4>
            <p className='item-price'>Price: ${price}</p>
            <h6>Qty: {quantity}</h6>
            <p>Supplier name: <small>{deliver}</small></p>
            <p><small>Item-Description: {description}</small></p>
            <button className='btn btn-info text-white fw-bold'>Update</button>
        </div>
    );
};

export default Item;