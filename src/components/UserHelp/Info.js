import React from 'react';

const Info = () => {
    return (
        <div className="sm:w-full lg:w-1/2 mx-auto px-12">
            <div className='mx-auto text-center my-12'>
                <h1 className='text-2xl font-bold mb-5'>Check our help site</h1>
                <p className='text-lg'>Get an answer faster! There’s a good chance your question has been answered in one of our help articles.</p>
                <button className='hover:bg-blue-200 mt-3 border border-primary-focus font-bold py-3 px-6'>Visit help site</button>
            </div>
            <div className='mx-auto text-center my-12'>
                <h1 className='text-2xl font-bold mb-5'>Is ProMan down?</h1>
                <p className='text-lg'>Rarely, ProMMan will be down for maintenance or due to an unexpected error. If something isn’t working, check to see if it’s down.</p>
                <button className='bg-green-800 mt-3 border-2 text-white font-bold py-3 px-6'>All systems operations</button>
            </div>
            <div className='mx-auto text-center my-12'>
                <h1 className='text-2xl font-bold mb-5'>Ask the ProMan community</h1>
                <p className='text-lg'>Get an answer faster! There’s a good chance your question has been answered in one of our help articles.</p>
                <button className='hover:bg-blue-200 mt-3 border border-primary-focus font-bold py-3 px-6'>Go to community</button>
            </div>

        </div>
    );
};

export default Info;