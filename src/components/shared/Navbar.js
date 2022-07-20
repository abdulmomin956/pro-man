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
        <div style={{ zIndex: '200' }} class="navbar bg-accent">
            <div class="navbar-start lg:px-12">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li tabindex="0">
                            <a class="justify-between">
                                Parent
                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul class="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li tabindex="0">
                            <button>
                                Parent

                            </button>
                            <ul class="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>

                        {user ? <button onClick={logout} className="btn btn-ghost rounded-lg">Sign Out</button> : <button style={{ backgroundColor: '#BFC9FF' }} className='btn '><NavLink className='rounded-lg px-2' to="/login">Login</NavLink></button>}
                    </ul>
                </div>
                <a href='/' class="btn btn-ghost normal-case text-xl">PRO-MAN</a>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        <li style={{ zIndex: '100' }} className='px-2' tabindex="0">
                            <a>
                                Workspaces
                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul class="p-2 bg-slate-100">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li tabindex="0">
                            <button style={{ backgroundColor: '#BFC9FF' }} className='btn '> Create</button>
                            <ul class="p-2 bg-slate-100">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>


                    </ul>
                </div>
            </div>

            <div class="navbar-end lg:px-12">
                {user ? <button onClick={logout} className="btn btn-ghost rounded-lg">Sign Out</button> : <button style={{ backgroundColor: '#BFC9FF' }} className='btn'><NavLink className='rounded-lg px-2' to="/login">Login</NavLink></button>}

                <button type="button" class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <span class="sr-only">Open user menu</span>
                    <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </button>
            </div>
        </div>


    );
};

export default Navbar;