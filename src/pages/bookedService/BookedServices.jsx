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
                            <th>Service Info</th>
                            <th>Provider Info</th>
                            <th>Booking Date</th>
                            <th>Status</th>
                            <th></th>
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
                                                <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{service.providerName}</div>
                                            <div className="text-sm opacity-50">{service.providerEmail}</div>
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