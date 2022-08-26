import React from 'react';

const Review = () => {
    return (
        <div className='bg-blue-100'>
            <div className='flex sm:p-12 md:p-32'>            
                <img src="https://i.ibb.co/TmW4p02/quotation-removebg-preview.png"  className='w-[75px] h-[75px] mr-5' alt="" />
                <div className='p-5 md:pr-12'>
                <h1 className=' text-2xl md:text-4xl leading-normal text-justify'>Very simple to use, great automation and keeps me on track with all I need to do. I also like that it can be shared with others.
                </h1>
                <div className='flex my-8 items-center justify-between'>
                    <p> <strong>KERRY PARKER-EVANS -IT</strong> Project Manager, Egencia</p>
                    <p>Industry: <strong>Travel</strong> </p>
                    <img className='w-[200px]' src="https://logos-download.com/wp-content/uploads/2019/01/Egencia_Logo-700x206.png" alt="" />
                </div>
                </div>
            </div>
        </div>
    );
};

export default Review;