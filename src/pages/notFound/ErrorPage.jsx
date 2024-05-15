import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Not Found</title>
            </Helmet>
            <h3>404 not found </h3>
            <Link to="/"><button className='btn btn-outline btn-info btn-block'>Back To Home</button></Link>
        </div>
    );
};

export default ErrorPage;