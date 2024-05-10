import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            404 not found 
            <Link to="/"><button className='btn btn-outline btn-info btn-block'>Back To Home</button></Link>
        </div>
    );
};

export default ErrorPage;