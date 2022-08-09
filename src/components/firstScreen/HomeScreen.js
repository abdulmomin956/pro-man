import React from 'react';
import { FaRegPlusSquare } from 'react-icons/fa';
import img from '../../images/uptodate.png'

const HomeScreen = () => {
    return (
        <div className='md:flex justify-start mx-10'>
            <div className="card md:w-[39rem] bg-base-100 shadow">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body text-center">
                    <h1 className="text-2xl text-center">Stay on track and up to date</h1>
                    <p>Invite people to boards and cards, leave comments, add due dates, and we'll show the most important activity here.</p>

                </div>
            </div>
            <div className='ml-10'>
                <p className='text-xl font-semibold px-3 mb-2 '>Links</p>
                <div className='md:w-80 justify-start'>
                    <label
                      htmlFor="my-modal-6"
                      className="flex items-center px-3 py-1 myButton cursor-pointer rounded-lg"
                      style={{borderRadius: "0px"}}
                      >
                        <FaRegPlusSquare className='mr-2'></FaRegPlusSquare>
                        Create a board</label>
                    {/* <span className='ml-3'>Create a board</span> */}
                </div>
            </div>

        </div>
    );
};

export default HomeScreen;