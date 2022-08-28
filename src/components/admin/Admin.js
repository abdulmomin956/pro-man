import React from 'react';
import { FaBoxes } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';
import CustomLink from '../shared/CustomLink';

const Admin = () => {
    const menusItem = [
        {
            path: `/`,
            name: "Dashboard",
            icon: <FaBoxes className='ml-1'></FaBoxes>
        },

        {
            path: `/makeadmin`,
            name: "Members",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
        },
        // {
        //     path: `/${shortname}/account`,
        //     name: "Settings",
        //     icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        //         <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        //         <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        //     </svg>
        // },
    ]
    return (
        <div className='flex'>

            <div className="w-49 min-h-screen  p-5 pt-4  duration-300 bg-secondary  relative shadow">


                <div className="flex gap-x-4 items-center mt-2">
                    <h1 className={`text-white origin-left font-medium text-xl duration-200 `}>Menu</h1>
                </div>
                <ul className={`pt-6 mr-8 w-full mb-12`}>
                    {
                        menusItem.map((menu, index) => (
                            <CustomLink to={menu.path} key={index} className={`flex my-2  workspace-sidebar-toggle-button py-1  rounded-md cursor-pointer   text-gray-300 text-sm items-center gap-x-4 `}>
                                <div  >{menu.icon}</div>
                                <span className={` origin-left duration-200`}>{menu.name}</span>
                            </CustomLink>
                        ))
                    }

                </ul>

            </div>

            <Outlet />


        </div >
    );
};

export default Admin;