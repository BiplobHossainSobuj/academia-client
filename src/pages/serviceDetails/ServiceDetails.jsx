import React from 'react';
import { Helmet } from 'react-helmet';
import { FaLocationDot } from 'react-icons/fa6';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const loadedService = useLoaderData();
    const { serviceName, serviceImage, serviceArea, description, servicePrice, providerName, providerImg, _id } = loadedService;
    return (
        <div>
            <Helmet> 
                <meta charSet="utf-8" />
                <title>Service Details</title>
            </Helmet>
            <div className="hero min-h-screen my-10">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={serviceImage} className="w-2/3 rounded-lg shadow-2xl" />
                    <div className='bg-slate-200 w-full rounded-lg'>
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
                            <p className='text-5xl font-bold text-warning'>${servicePrice}</p>
                            <h2 className="card-title text-3xl">{serviceName}
                                <div className="badge">40hr</div>
                            </h2>
                            <p>{description}</p>
                            <div className="card-actions justify-between">
                                <div className='flex gap-2'>
                                    <div className="avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={providerImg} />
                                        </div>
                                    </div>
                                    <p>{providerName}</p>
                                </div>
                            </div>
                            <Link to={`/checkout/${_id}`}><button className="btn btn-success btn-block text-white font-bold">Book Now</button></Link>
                        </div>

                        <div className=''>
                            <h3 className='text-3xl text-center text-blue-500 underline'>Service List</h3>
                            <ul className="menu rounded-box text-xl">
                                <li>
                                    <a>
                                    <IoIosArrowDroprightCircle />
                                         20 Classes
                                    </a>
                                </li>
                                <li>
                                    <a>
                                    <IoIosArrowDroprightCircle />
                                        10 Projects/Assignment
                                    </a>
                                </li>
                                <li>
                                    <a>
                                    <IoIosArrowDroprightCircle />
                                        30 Quizes
                                    </a>
                                </li>
                                <li>
                                    <a>
                                    <IoIosArrowDroprightCircle />
                                        5 Workshop
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;