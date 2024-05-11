import React, { useEffect, useState } from 'react';
import ServiceCard from '../../components/serviceCard/ServiceCard';

const Services = () => {
    const [services,setServices] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>{
            setServices(data)
        })
    },[]);
    return (
        <div className='max-w-7xl mx-auto my-12'>
            <div>All services</div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {services.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)}
            </div>
        </div>
    );
};

export default Services;