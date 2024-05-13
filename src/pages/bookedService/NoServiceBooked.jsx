import React from 'react';
import { Link } from 'react-router-dom';

const NoServiceBooked = () => {
    return (
        <div className="hero min-h-screen max-w-7xl mx-auto my-10" style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/404-error-with-tired-person-concept-illustration_114360-7969.jpg?t=st=1715576788~exp=1715580388~hmac=7cfbaa92ae36370cc324c0fe602e7510a701ee2c0e6aee6bef55d99bb60c5307&w=826)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-lg">
                    <h1 className="mb-5 text-5xl font-bold">You have not booked any services</h1>
                    <Link to='/'><button className="btn btn-primary">Go Back</button></Link>
                </div>
            </div>
        </div>
    );
};

export default NoServiceBooked;