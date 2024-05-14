import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import NoServiceBooked from './NoServiceBooked';

const BookedServices = () => {
    const [services, setServices] = useState([]);
    const { user } = useContext(AuthContext);
    useEffect(() => {
        fetch(`http://localhost:5000/servicePurchased?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServices(data);
            })
    }, [user])
    if (services.length == 0) {
        return <NoServiceBooked></NoServiceBooked>
    }
    return (
        <div className='mx-auto max-w-7xl'>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Provider Info</th>
                            <th>Service Info</th>
                            <th>Booking Date</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {services.map(service =>
                            <tr key={service._id}>
                                <td>
                                    {service.providerName}
                                    <br />
                                    <span className='opacity-50'>{service.providerEmail}</span>
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={service.serviceImage} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{service.serviceName}</div>
                                            <div className="text-sm badge badge-warning badge-lg">${service.servicePrice}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{service.takingDate}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">{service.status}</button>
                                </th>
                            </tr>
                        )}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default BookedServices;