import React from 'react';
import { FaRegPlusSquare } from 'react-icons/fa';
import img from '../../images/uptodate.png'

const HomeScreen = () => {
    return (
        <div className='flex justify-start mx-10'>
            <div className="card w-[39rem] bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body text-center">
                    <h1 className="text-2xl text-center">Stay on track and up to date</h1>
                    <p>Invite people to boards and cards, leave comments, add due dates, and we'll show the most important activity here.</p>

                </div>
            </div>
            <div className='ml-10'>
                <p>Links</p>
                <div className='btn w-80 justify-start'>
                    <FaRegPlusSquare></FaRegPlusSquare>
                    <span className='ml-3'>Create a board</span>
                </div>
            </div>

        </div>
    );
};

export default HomeScreen;