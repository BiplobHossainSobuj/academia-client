import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { Helmet } from 'react-helmet';
// import ServiceRow from './serviceRow';

const ServiceToDo = () => {
    const { user } = useContext(AuthContext);
    const [services, setServices] = useState([]);
    const [serviceStatus, setServiceStatus] = useState('');
    useEffect(() => {
        fetch(`https://academia-server-sandy.vercel.app/serviceToDo?email=${user?.email}`,{credentials:'include'})
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServices(data);
            })
    }, [user]);
    const handleStatus = (e) => {
        const status = e.target.value;
        setServiceStatus(status);
        console.log(status)
    }
    const handleStatusChange = (id) => {
        console.log(id, serviceStatus);
        const currentService = { id, serviceStatus }
        fetch(`https://academia-server-sandy.vercel.app/serviceToDo/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(currentService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

            })
    }

    return (
        <div className='mx-auto max-w-7xl'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Service To DO</title>
            </Helmet>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Service Info</th>
                            <th>User Info</th>
                            <th>Booking Date</th>
                            <th>Change Status</th>
                            <th>Current Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {services.map(service =>
                            <tr key={service._id}>
                                <td>
                                    {service.serviceName}
                                    <br />
                                    <span className="badge badge-warning badge-lg">${service.servicePrice}</span>
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={service.serviceImage} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{service.userName}</div>
                                            <div className="text-sm opacity-50">{service.useEmail}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{service.takingDate}</td>
                                <th>
                                    <select onChange={handleStatus} onClick={() => handleStatusChange(service._id, onchange)} className="select select-info w-full max-w-xs">
                                        <option value='pending'>Pending</option>
                                        <option value='working'>Working</option>
                                        <option value='completed'>Completed</option>
                                    </select>
                                </th>
                                <td>
                                    <div className="badge badge-info gap-2">
                                        {service.status || "pending"}
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <p className='text-center my-4'>Refresh the page to see the updated status after status modification </p>
            </div>
        </div>
    );
};

export default ServiceToDo;