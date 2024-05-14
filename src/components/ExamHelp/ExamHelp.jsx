import React from 'react';

const ExamHelp = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-10'>
            <div className="card  bg-base-100 shadow-xl image-full">
                <figure><img src="https://i.ibb.co/JF7Cy0h/books-with-graduation-cap-digital-art-style-education-day-23-2151164326.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">University Admission </h2>
                    <p>We provide extra care for University admisiion.We have dedicated team for helping those student</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Read Blog</button>
                    </div>
                </div>
            </div>
            <div className="card  bg-base-100 shadow-xl image-full">
                <figure><img src="https://i.ibb.co/fr4FqzM/abstract-office-desktop-155003-4104.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Carrer Guidline </h2>
                    <p>We provide career counsiling</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Read Blog</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExamHelp;