import React, { useContext } from 'react';
import { FaImage, FaLocationDot, FaMoneyCheckDollar, FaServicestack } from 'react-icons/fa6';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';

const Checkout = () => {
    const loadedService = useLoaderData();
    const { serviceName, serviceImage, serviceArea, description, servicePrice, providerName, providerEmail, _id } = loadedService;
    const {user} = useContext(AuthContext);
    
    const handlePurchase =(e)=>{
        e.preventDefault();
        const form = e.target;
        const specialInstruction = form.instruction.value;
        const takingDate = form.takingDate.value;
        const purchaseDetails = {serviceId:_id,serviceName,serviceImage,servicePrice,providerEmail,providerName,userEmail:user.email,userName:user.displayName,takingDate,specialInstruction,status:'pending'}
        fetch('https://academia-server-sandy.vercel.app/servicePurchased', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(purchaseDetails)
        })
            .then(res => res.json())
            .then(data => {
                toast('You have purchased successfully');
                console.log(data);
            })
    }
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Checkout</title>
            </Helmet>
            <form className="m-2" onSubmit={handlePurchase}>
                <div className='w-full md:w-3/4 mx-auto md:flex lg:flex justify-between gap-6'>
                    <div className='grow space-y-4'>
                        <div>
                            <p>Service Id</p>
                            <label className="input input-bordered flex items-center gap-2">
                            <FaServicestack />
                                <input type="text" defaultValue={_id} className="grow" disabled/>
                            </label>
                        </div>
                        <div>
                            <p>Service Name</p>
                            <label className="input input-bordered flex items-center gap-2">
                            <FaServicestack />
                                <input type="text" defaultValue={serviceName} name="serviceName" className="grow" placeholder="Ex:Sratch Programming" disabled/>
                            </label>
                        </div>
                        <div>
                            <p>Price</p>
                            <label className="input input-bordered flex items-center gap-2">
                            <FaMoneyCheckDollar />
                                <input type="number" defaultValue={servicePrice} name="servicePrice" className="grow" placeholder="Ex:$49" disabled />
                            </label>
                        </div>
                        <div>
                            <p>Image</p>
                            <label className="input input-bordered flex items-center gap-2">
                            <FaImage />
                                <input disabled type="text" defaultValue={serviceImage} className="grow" />
                            </label>
                        </div>
                        <div>
                            <p>Special Instruction</p>
                            <label>
                            <textarea name="instruction" placeholder="You can customised your plan here" className="textarea textarea-bordered textarea-lg w-full" required></textarea>
                            </label>
                        </div>
                    </div>
                    <div className='grow space-y-4'>
                        <div>
                            <p>Provider Name</p>
                            <label className="input input-bordered flex items-center gap-2">
                            <FaImage />
                                <input defaultValue={providerName} type="text" className="grow" disabled/>
                            </label>
                        </div>
                        <div>
                            <p>Provider Email</p>
                            <label className="input input-bordered flex items-center gap-2">
                            <FaImage />
                                <input defaultValue={providerEmail} type="text"className="grow" disabled/>
                            </label>
                        </div>
                        <div>
                            <p>User Name</p>
                            <label className="input input-bordered flex items-center gap-2">
                            <FaLocationDot />
                                <input defaultValue={user.displayName} type="text" className="grow" disabled/>
                            </label>
                        </div>
                        <div>
                            <p>User Email</p>
                            <label className="input input-bordered flex items-center gap-2">
                            <FaLocationDot />
                                <input defaultValue={user.email} type="text" className="grow" disabled/>
                            </label>
                        </div>
                        <div>
                            <p>Date</p>
                            <label className="input input-bordered flex items-center gap-2">
                            <FaLocationDot />
                                <input  type="date" name='takingDate' className="grow" required/>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-3/4 flex justify-center mx-auto my-4">
                    <input type="submit" className=" btn btn-block btn-success text-white" value='Purchase Now' />
                </div>
            </form>
        </div>
    );
};

export default Checkout;