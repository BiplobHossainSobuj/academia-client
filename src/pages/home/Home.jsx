import { Link, useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Services from "../services/Services";
import { useState } from "react";
import ServiceCard from "../../components/serviceCard/ServiceCard";

const Home = () => {
    const loadedServices = useLoaderData();
    const [services, setServices] = useState(loadedServices);
    const [searchKey, setSearchKey] = useState('');
    let filtered = [];
    const handleChange = () => {
        if (searchKey != "") {
            services.filter(service => {
                if (service.serviceName.toLocaleLowerCase().includes(searchKey.toLocaleLowerCase())) {
                    filtered.push(service);
                }
            })
        }
        return filtered;
    }
    // console.log(handleChange())
    handleChange();
    return (
        <div className='max-w-7xl mx-auto my-24'>
            <h1 className='text-5xl text-primary'>this is home</h1>
            <Banner></Banner>
            <h1>Popular Services</h1>
            <div className=' bg-red-400 p-4 rounded-lg'>
                <label className="input input-bordered flex items-center gap-2">
                    <input onChange={(e) => setSearchKey(e.target.value)} type="text" className="grow" placeholder="Search" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </label>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                {searchKey ?
                    filtered.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                    :services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)}
            </div>
            <div className="flex justify-center my-6">

                <Link to={`/services`}><button className="btn btn-outline btn-warning">Show More</button></Link>
            </div>
        </div>
    );
};

export default Home;