import Swal from 'sweetalert2'
import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceManagedCard = ({ service,handleDelete }) => {
    const { _id,serviceName, serviceArea, servicePrice, serviceImage, description } = service;
    
    
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={serviceImage} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h3>${servicePrice}</h3>
                    <h2 className="card-title">{serviceName}</h2>
                    <p>{description}</p>
                    <div className="card-actions">
                        <Link to={`/update/${_id}`}>
                            <button className="btn btn-outline btn-info">
                                <FaEdit />Update
                            </button>
                        </Link>
                        <Link onClick={()=>handleDelete(_id)}>
                            <button className="btn btn-outline btn-warning">
                                Delete
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceManagedCard;