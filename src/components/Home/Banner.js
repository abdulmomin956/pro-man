import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-100 lg:px-20 ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div data-aos="fade-left" data-aos-delay="1000" data-aos-duration="1000">
                    <img src="https://cdn.discordapp.com/attachments/962941524830715966/1013075270250536960/unknown.png" alt="" className="max-w-sm " />
                </div>
                <div className='lg:mr-40 sm:mr-0 sm:mt-16 sm:px-20 lg:px-0 text-primary '>

                    <h1 data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200" className="text-4xl  font-bold">ProMan helps teams move work forward.</h1>

                    <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" className=' mt-6 mb-6 text-justify'>Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique—accomplish it all with Trello.</p>

                    <div data-aos="zoom-in" data-aos-delay="1700">
                        <button href='/login' className='p-2 bg-blue-600 text-white'><a href="/login">Sign up - its free</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;