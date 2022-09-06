import React from 'react';

const WorkFieldDemo = () => {
    return (
        <div className=' lg:w-1/2 mx-auto'>
            <img className='' src="https://cdn.pixabay.com/photo/2019/03/12/20/27/business-4051773_960_720.jpg" alt="" />

            <div className='mb-6 mt-8 mx-auto lg:text-center  sm:text-justify'>
                <h1 className='text-3xl font-bold mb-5 text-primary'>
                    It’s more than work. It’s a way of working together.
                </h1>
                <p className=''>Start with a Proman board, lists, and cards. Customize and expand with more features as your teamwork grows. Manage projects, organize tasks, and build team spirit—all in one place.</p>
                <button to="" className='py-2 px-5 mt-6 mx-auto  bg-primary text-white'>  <a href="/login">Start Doing</a></button>

            </div>
        </div>
    );
};

export default WorkFieldDemo;