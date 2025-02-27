import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import ServiceManagedCard from '../../components/ServiceManaged/ServiceManagedCard';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const ManageService = () => {
    const { user } = useContext(AuthContext);

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(`https://academia-server-sandy.vercel.app/manageServices?email=${user?.email}`,{credentials:'include'})
            .then(res => res.json())
            .then(data => setServices(data))
    }, [user])
    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://academia-server-sandy.vercel.app/delete/${_id}`, {
                    method: "DELETE",
                    
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = services.filter(service=>service._id!==_id)
                            setServices(remaining);
                        }
                    })
            }
        });

    }
    return (
        <div className='max-w-7xl mx-auto place-items-center grid grid-cols-1 md:grid-cols-2 gap-6 my-10'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Manage your services</title>
            </Helmet>
            {
                services.map(service => <ServiceManagedCard key={service._id} handleDelete={handleDelete} service={service}></ServiceManagedCard>)
            }
        </div>
    );
};

export default ManageService;