import React from 'react';

const HomeScreenShot = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-primary text-center mt-12'>SCREENSHOTS</h1>
            <p className=' text-center mb-6 text-secondary'>Have look some screenshots of application that will draw a vivid picture of app in you mind </p>

            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  lg:px-12 mb-6'>
                <div className='card mx-auto w-96 bg-white shadow'>
                    <img src="https://i.ibb.co/k8QJWx8/Screenshot-2022-09-06-173946-1.png" alt="" />
                </div>
                <div className='card mx-auto w-96 bg-white shadow'>
                    <img src="https://i.ibb.co/rsYzynC/Screenshot-2022-09-06-174404-1.png" alt="" />
                </div>
                <div className='card mx-auto w-96 bg-white shadow'>
                    <img className='h-full' src="https://i.ibb.co/qMfGBH7/Screenshot-2022-09-06-184003-1.png" alt="" />
                </div>



            </div>
        </div>
    );
};

export default HomeScreenShot;