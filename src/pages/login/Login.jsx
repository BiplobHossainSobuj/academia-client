import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const { login, loginWithGoogle } = useContext(AuthContext);
    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        // console.log(email, password);
        login(email, password)
            .then((res) => {
                // console.log(res.user);
                toast('Log in successful');
                const loggedInUser = res.user;
                const user = {email:loggedInUser.email}
                axios.post('http://localhost:5000/jwt', user)
                    .then(res => {
                        console.log(res.data)
                        navigate(location?.state ? location.state : '/');
                    })
            })
            .catch((err) => {
                console.log(err);
                toast('Something is wrong');
            })
    }

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(res => {
                console.log(res.user);
                toast('Log in successful');
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/abstract-geometric-wireframe-background_52683-59421.jpg?t=st=1715316378~exp=1715319978~hmac=0b7223e9eb5ff6715bc7d6eb9a34cb5c6cf6f2bcf7ae7aed7eb8721e9eae00d7&w=1380)' }}>
            <div className="w-1/3 bg-base-100 rounded-lg">
                <div className='text-center my-10 text-5xl text-blue-500'>
                    Please Login!
                </div>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <label className="input input-bordered border-cyan-500 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                            <input type="email" name='email' placeholder="Your Email" className="grow" required />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <label className="input input-bordered border-cyan-500 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                            <input type="password" name='password' placeholder="Your Password" className="grow" required />
                        </label>
                    </div>
                    <div>
                        <label className="label">
                            <p>New to the website ? Please <Link to="/register" className="text-blue-500 link link-hover">Register</Link> </p>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">Login</button>
                    </div>
                    <div>
                        <div className="divider divider-secondary">
                            Or Login Using
                            <span onClick={handleGoogleLogin} className='hover:cursor-pointer border-8 border-opacity-85 border-sky-500 rounded-full'><FcGoogle /></span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;