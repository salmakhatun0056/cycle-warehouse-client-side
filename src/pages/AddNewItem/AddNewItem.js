import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddNewItem = () => {
    const navigate = useNavigate()
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('https://serene-atoll-45482.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    const nameRef = useRef('')
    const numberRef = useRef('')
    const supplierRef = useRef('')
    const qtyRef = useRef('')
    const descriptionRef = useRef('')
    const photoRef = useRef('')

    const addItem = (event) => {
        event.preventDefault()
        const name = nameRef.current.value
        const price = numberRef.current.value
        const deliver = supplierRef.current.value
        const quantity = qtyRef.current.value
        const description = descriptionRef.current.value
        const img = photoRef.current.value
        const data = { name, price, deliver, quantity, description, img }

        fetch('https://serene-atoll-45482.herokuapp.com/items/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                data._id = result.insertId
                items.push(data)
                navigate('/inventories')
            })
        event.target.reset()
    }


    return (
        <div>
            <h2 className='text-center my-3'>Please Add a new item</h2>
            <div className='d-block mx-auto  w-100'>
                <form onSubmit={addItem} className='d-block mx-auto  w-50'>
                    <input ref={nameRef} className='w-100 mx-auto mt-3' type="text" name=" item-name" id="" placeholder='Please Add Item Name' /> <br />

                    <input ref={numberRef} className='w-100 mx-auto mt-3' type="number" name="number" id="" min="1" placeholder='Add Price' /> <br />

                    <input ref={supplierRef} className='w-100 mx-auto mt-3' type="text" name="supplier-man" id="" placeholder='Supplier nam' /><br />

                    <input ref={qtyRef} className='w-100 mx-auto mt-3 mb-3' type="number" name="number" id="" min="1" placeholder='Add Items Qty' /> <br />

                    <textarea ref={descriptionRef} name="" id="" className='w-100' rows="3" placeholder='Short description'></textarea><br />

                    <input ref={photoRef} className='w-100 mx-auto mt-3' type="url" name="photo-url" id="" placeholder='please add photo url' /><br />
                    <input className='w-100 mx-auto mt-3 ' type="submit" value="Add Item" />
                </form>
            </div>
        </div>
    );
}

export default AddNewItem;