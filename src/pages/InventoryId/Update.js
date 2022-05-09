import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

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

    const { name } = item
    return (
        <div>
            <h2>name:{name}</h2>
        </div>
    );
};

export default Update;