import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Link } from 'react-router-dom';
import auth from '../firebase/firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };
    return (
        <div style={{ zIndex: '200' }} className="navbar bg-accent">
            <div className="navbar-start lg:px-12">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        <li tabIndex="0">
                            <p className="justify-between">
                                Workspaces
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </p>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li tabIndex="0">
                            <button>
                                Create

                            </button>
                            <ul className="p-2">
                                <li ><a >Item 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>

                        {user ? <button onClick={logout} className="btn btn-ghost rounded-lg">Sign Out</button> : <button style={{ backgroundColor: '#BFC9FF' }} className='btn '><NavLink className='rounded-lg px-2' to="/login">Login</NavLink></button>}
                    </ul>
                </div>
                <a href='/' className="btn btn-ghost normal-case text-xl">PRO-MAN</a>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">

                        <div className="dropdown">
                            <label tabIndex="0" className="btn btn-md m-1">Workspaces <a>
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a></label>
                            <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li ><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>

                        <div className="dropdown">
                            <label tabIndex="0" className="btn  btn-md m-1">Create</label>
                            <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li ><a >Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>


                    </ul>
                </div>
            </div>

            <div className="navbar-end lg:px-12">
                {user ? <button onClick={logout} className="btn btn-ghost rounded-lg">Sign Out</button> : <button style={{ backgroundColor: '#BFC9FF' }} className='btn'><NavLink className='rounded-lg px-2' to="/login">Login</NavLink></button>}

                <button type="button" className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <span className="sr-only">Open user menu</span>
                    <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </button>
            </div>
        </div>


    );
};

export default Navbar;