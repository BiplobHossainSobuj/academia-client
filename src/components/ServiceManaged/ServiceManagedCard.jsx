import Swal from 'sweetalert2'
import { FaEdit } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const ServiceManagedCard = ({ service }) => {
    const { _id,serviceName, serviceArea, servicePrice, serviceImage, description } = service;
    const navigate = useNavigate();
    const handleDelte =(_id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/delete/${_id}`,{
            method:"DELETE",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(service)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount >0){
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                }
                navigate(0);
        })
              
            }
          });
        
    }
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
                        <Link onClick={()=>handleDelte(_id)}>
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