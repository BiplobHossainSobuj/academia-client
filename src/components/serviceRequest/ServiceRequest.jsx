import React from 'react';
import { FaImage, FaLocationDot, FaMoneyCheckDollar, FaServicestack } from 'react-icons/fa6';
import { toast } from 'react-toastify';

const ServiceRequest = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const user_name = form.name.value;
        const user_email = form.email.value;
        const serviceName = form.serviceName.value;
        const serviceArea = form.serviceArea.value;
        const description = form.description.value;
        const serviceDetails = { serviceName,serviceArea,description,user_email,user_name};
        console.log(serviceDetails);
        fetch('http://localhost:5000/requestedServices', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(serviceDetails)
        })
            .then(res => res.json())
            .then(data => {
                toast('Your service requested successfull');
                console.log(data);
            })
    }
    return (
        <div>
            <form className="m-2" onSubmit={handleSubmit}>
                <div className='w-full md:w-3/4 mx-auto md:flex lg:flex justify-between gap-6'>
                    <div className='grow space-y-4'>
                        <div>
                            <p>Service Name</p>
                            <label className="input input-bordered flex items-center gap-2">
                            <FaServicestack />
                                <input type="text" name="serviceName" className="grow" placeholder="Ex:Sratch Programming" required/>
                            </label>
                        </div>
                        <div>
                            <p>Description</p>
                            <label>
                            <textarea name="description" placeholder="write a short description" className="textarea textarea-bordered textarea-lg w-full " required></textarea>
                            </label>
                        </div>
                    </div>
                    <div className='grow space-y-4'>
                        <div>
                            <p>Location</p>
                            <label className="input input-bordered flex items-center gap-2">
                            <FaLocationDot />
                                <input required type="text" name="serviceArea" className="grow" placeholder="Ex:Uttara,Mirpur or Online" />
                            </label>
                        </div>
                        <div>
                            <p>Your Name</p>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                                <input type="text" name="name" className="grow" placeholder="Username" />
                            </label>
                        </div>
                        <div>
                            <p>Your Email</p>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                <input type="email" name="email" className="grow" placeholder="Your Email" required/>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-3/4 flex justify-center mx-auto my-4">
                    <input type="submit" className=" btn btn-block btn-outline btn-success text-white" value='Request Service' />
                </div>
            </form>
        </div>
    );
};

export default ServiceRequest;