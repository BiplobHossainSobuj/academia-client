import React, { useEffect, useState } from 'react';
import ServiceCard from '../../components/serviceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    const [searchKey, setSearchKey] = useState('');
    let filtered = [];
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, []);
    const handleChange = () => {
        if (searchKey != "") {
            services.filter(service => {
                if (service.serviceName.toLocaleLowerCase().includes(searchKey.toLocaleLowerCase())) {
                    filtered.push(service);
                }
            })
        }
        return filtered;
    }
    // console.log(handleChange())
    handleChange();




    return (
        <div className='max-w-7xl mx-auto my-12'>
            <div>All services</div>
            <div className="flex justify-center my-6">
                <div className='w-2/3 bg-red-400 p-4 rounded-lg'>
                    <label className="input input-bordered flex items-center gap-2">
                        <input onChange={(e) => setSearchKey(e.target.value)} type="text" className="grow" placeholder="Search" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {searchKey ?
                    filtered.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                    : services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)}
            </div>
        </div>
    );
};

export default Services;