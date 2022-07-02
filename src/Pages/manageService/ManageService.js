import React, { useEffect, useState } from 'react';
import './manageService.css'

const ManageService = () => {
    const [services, setService] = useState([]);

    useEffect(() => {
        fetch("https://obscure-brushlands-64553.herokuapp.com/services/")
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const handleDelete = (id) => {
        const url = `https://obscure-brushlands-64553.herokuapp.com/services/${id}`;
        fetch(url, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('deleted')
                    const remaining = services.filter(service => service._id !== id);
                    setService(remaining)
                }
            })



    }
    return (
        <div style={{ marginTop: "4em" }}>
            <h2>ManageService</h2>

            <div className='manageService-action'>
                <div>Service Name</div>
                <div>Action</div>
            </div>

            {
                services.map(service =>
                    <div className='manageService-list'>
                        <div>{service.name}</div>
                        <div style={{cursor:"pointer"}} onClick={() => handleDelete(service._id)}>
                        <i class="fas fa-times"></i>
                        </div>
                    </div>

                )
            }
        </div>
    );
};

export default ManageService;