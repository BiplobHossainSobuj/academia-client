import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import ServiceManagedCard from '../../components/ServiceManaged/ServiceManagedCard';

const ManageService = () => {
    const {user} = useContext(AuthContext);
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/manageServices?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[user])
    return (
        <div>
            {
                services.map(service=><ServiceManagedCard key={service._id} service={service}></ServiceManagedCard>)
            }
        </div>
    );
};

export default ManageService;