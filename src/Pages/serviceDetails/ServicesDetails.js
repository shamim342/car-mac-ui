import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';

const ServicesDetails = () => {
    const {serviceId} = useParams();
    const [service,setService] = useState([]);
    console.log(service);

    useEffect(()=>{
        fetch(`https://obscure-brushlands-64553.herokuapp.com/services/${serviceId}`)
        .then(res =>res.json())
        .then(data =>setService(data) )
    },[])
    return (
        <div style={{marginTop:"6em"}}>
            <Container>
                <div>
                    <img src={service.img} alt="" />
                    <h4>name : {service.name}</h4>
                    <p>{service.description}</p>
                    <h5>Price : {service.price}</h5>
                </div>
            </Container>
            
        </div>
    );
};

export default ServicesDetails;