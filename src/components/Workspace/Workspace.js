import React from 'react';
import { Outlet } from 'react-router-dom';

const Workspace = () => {
    return (
        <div className='flex'>

            <div className='bg-primary min-h-screen w-72 text-white'>
                sidebar
            </div>

            {/* সাইডবার এর পাশে Outlet কনটেন্ট দেখাবে */}
            <Outlet />
        </div>
    );
};

export default Workspace;