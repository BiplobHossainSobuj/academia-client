import { useContext } from 'react';
import { FaImage, FaServicestack } from 'react-icons/fa';
import { FaLocationDot, FaMoneyCheckDollar } from 'react-icons/fa6';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider';

const UpdateService = () => {
    const loadedService = useLoaderData();
    const {user} = useContext(AuthContext);
    const {email,photoURL,displayName} = user;
    const {_id, serviceName,serviceImage,serviceArea,description,servicePrice,providerEmail,providerName,providerImg} = loadedService;
    const handleUpdate = (e) => { 
        e.preventDefault();
        const form = e.target;
        const serviceName = form.serviceName.value;
        const serviceImage = form.serviceImage.value;
        const serviceArea = form.serviceArea.value;
        const description = form.description.value;
        const servicePrice = form.servicePrice.value;
        const serviceDetails = { serviceName,serviceImage,serviceArea,description,servicePrice,providerEmail:email,providerName:displayName,providerImg:photoURL };
        console.log(serviceDetails);
        fetch(`http://localhost:5000/services/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(serviceDetails)
        })
            .then(res => res.json())
            .then(data => {
                toast('Your service updated successfully');
                console.log(data);
            })
    }
    return (
        <div>
            <form className="m-2" onSubmit={handleUpdate}>
                <div className='w-full md:w-3/4 mx-auto md:flex lg:flex justify-between gap-6'>
                    <div className='grow space-y-4'>
                        <div>
                            <p>Service Name</p>
                            <label className="input input-bordered flex items-center gap-2">
                            <FaServicestack />
                                <input type="text" defaultValue={loadedService.serviceName} name="serviceName" className="grow" placeholder="Ex:Sratch Programming" required/>
                            </label>
                        </div>
                        <div>
                            <p>Price</p>
                            <label className="input input-bordered flex items-center gap-2">
                            <FaMoneyCheckDollar />
                                <input type="number" defaultValue={loadedService.servicePrice} name="servicePrice" className="grow" placeholder="Ex:$49" required />
                            </label>
                        </div>
                        <div>
                            <p>Description</p>
                            <label>
                            <textarea name="description" defaultValue={loadedService.description} placeholder="write a short description" className="textarea textarea-bordered textarea-lg w-full " required></textarea>
                            </label>
                        </div>
                    </div>
                    <div className='grow space-y-4'>
                        <div>
                            <p>Image</p>
                            <label className="input input-bordered flex items-center gap-2">
                            <FaImage />
                                <input required type="text" defaultValue={loadedService.serviceImage} name="serviceImage" className="grow" placeholder="Put your photo url" />
                            </label>
                        </div>
                        <div>
                            <p>Location</p>
                            <label className="input input-bordered flex items-center gap-2">
                            <FaLocationDot />
                                <input required type="text" defaultValue={loadedService.serviceArea} name="serviceArea" className="grow" placeholder="Ex:Uttara,Mirpur or Online" />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-3/4 flex justify-center mx-auto my-4">
                    <input type="submit" className=" btn btn-block btn-outline btn-success text-white" value='Update' />
                </div>
            </form>
        </div>
    );
};

export default UpdateService;