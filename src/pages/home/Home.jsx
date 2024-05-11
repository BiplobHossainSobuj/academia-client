import { Link, useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Services from "../services/Services";
import { useState } from "react";
import ServiceCard from "../../components/serviceCard/ServiceCard";

const Home = () => {
    const loadedServices = useLoaderData();
    const [services,setServices] = useState(loadedServices);
    
    return (
        <div className='max-w-7xl mx-auto my-24'>
            <h1 className='text-5xl text-primary'>this is home</h1>
            <Banner></Banner>
                <h1>Popular Services</h1>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                {services.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)}
            </div>
            <div className="flex justify-center my-6">

            <Link to={`/services`}><button className="btn btn-outline btn-warning">Show More</button></Link>
            </div>
        </div>
    );
};

export default Home;