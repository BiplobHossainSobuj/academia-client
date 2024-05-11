import React from 'react';

const ServiceCard = ({ service }) => {
    const { serviceName, serviceImage, serviceArea, description, servicePrice, providerName, providerImg } = service;
    return (
        <div className='max-w-lg'>
            <div className="card">
                <figure><img className="rounded-xl" src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            </div>
            <div className="card  shadow-md bg-white mt-2">
                <div className="card-body">
                    <div className='flex justify-between'>
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <div className="badge badge-info gap-2 justify-end">

                            5% OFF
                        </div>
                    </div>

                    <h2 className="card-title">{serviceName}
                        <div className="badge">40hr</div>
                    </h2>
                    <p>{description}</p>
                    <p className='text-2xl text-warning'>${servicePrice}</p>
                    <div className="card-actions justify-between">
                        <div className='flex gap-2'>
                            <div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src={providerImg} />
                                </div>
                            </div>
                            <p>{providerName}</p>
                        </div>
                        <button className="btn btn-primary justify-end">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;