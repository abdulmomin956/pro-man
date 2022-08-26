import React from 'react';

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-base-100 lg:px-20 mt-24">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src="https://images.ctfassets.net/rz1oowkt5gyp/5QIzYxue6b7raOnVFtMyQs/113acb8633ee8f0c9cb305d3a228823c/hero.png?w=1200&fm=webp" alt="" class="max-w-sm " />
                <div className='lg:mr-20 sm:mt-16 sm:px-20'>
                    <h1 className="text-6xl mb-8 font-[poppins]"                >
                        ProMan helps teams move work forward.
                    </h1>

                    <p className='text-xl mt-6 mb-12 text-justify'>Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique—accomplish it all with Trello.</p>
                    <div>
                        <input type="text" className='text-lg pl-2 py-2 border w-3/5' placeholder='Email' />
                        <button className='py-3 px-5 rounded mx-6 bg-blue-600 text-white'>Sign up - its free</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;