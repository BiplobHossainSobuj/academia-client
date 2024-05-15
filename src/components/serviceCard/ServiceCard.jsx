import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { serviceName, serviceImage, serviceArea, description, servicePrice, providerName, providerImg ,_id} = service;
    return (
        <div className='max-w-lg'>
            <div className="card">
                <figure><img className="rounded-xl" src={serviceImage} alt="Shoes" /></figure>
            </div>
            <div className="card hover:bg-blue-500 shadow-md bg-white mt-2">
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
                        <FaLocationDot />
                        <span>{serviceArea}</span>
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
                        <Link to={`/services/${_id}`}><button className="btn btn-outline btn-info justify-end">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;