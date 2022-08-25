import React from 'react';

const Banner = () => {
    return (
        <div className='flex gap-5 mt-16 items-center'>
            <div className='w-1/2 ml-10 '>
                <h1 className="text-5xl mb-4"                >
                Trello helps teams move work forward.
                </h1>
                <p className='text-xl my-5 text-justify'>Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique—accomplish it all with Trello.</p>
                <div>
                    <input type="text" className='text-lg pl-2 py-2 border w-3/5' placeholder='Email' />
                    <button className='py-3 px-5 rounded mx-6 bg-blue-600 text-white'>Sign up - its free</button>
                </div>
            </div>
            <div className='w-1/2'>
            <img className='w-1/2 mx-auto' src="https://images.ctfassets.net/rz1oowkt5gyp/5QIzYxue6b7raOnVFtMyQs/113acb8633ee8f0c9cb305d3a228823c/hero.png?w=1200&fm=webp" alt="" />

            </div>
        </div>
    );
};

export default Banner;