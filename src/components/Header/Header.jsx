import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Header = () => {
    const { user,logOut } = useContext(AuthContext);
    const links = <>
        <li><Link to='/addService'>Add Service</Link></li>
        <li><Link to='/manageService'>Manage Service</Link></li>
        <li><Link to='/'>Booked Services</Link></li>
        <li><Link to='/'>Service To-Do</Link></li>
    </>
    const handleLogout = () => {
        logOut()
            .then(() => {
                // console.log('log out');
            })
            .catch(() => {
                // console.log('log out', err);
            })
    }
    return (
        <div className='bg-gradient-to-r from-purple-500  to-blue-400 '>
            <div className="navbar max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/services'>Services</NavLink></li>
                            {
                                user &&
                                <li>
                                    <a>Dashboard</a>
                                    <ul className="p-2">
                                        {links}
                                    </ul>
                                </li>
                            }
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-xl">Academia</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/services'>Services</NavLink></li>
                        <li>
                            {user && <details>
                                <summary>Dashboard</summary>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40">
                                    {links}
                                </ul>
                            </details>}
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <div className='flex gap-4 items-center'>
                            <div className="avatar">
                                <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={user.photoURL} alt={user.displayName} />
                                </div>
                            </div>
                            <button onClick={handleLogout} className="btn btn-primary text-white">Log Out</button>
                        </div> :
                            <Link to='/login'><button className="btn btn-primary text-white">Login</button></Link>
                    }


                </div>
            </div>
        </div>
    );
};

export default Header;