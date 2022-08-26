import React from 'react';
import { Link } from 'react-router-dom';

const WorkFieldDemo = () => {
    return (
        <div>
            <div className='px-32 my-16 mx-auto text-center'>
                <h1 className='text-4xl font-bold mb-5'>
                    It’s more than work. It’s a way of working together.
                </h1>
                <p className='text-xl'>Start with a Proman board, lists, and cards. Customize and expand with more features as your teamwork grows. Manage projects, organize tasks, and build team spirit—all in one place.</p>
                <br /><br />

                <Link to="" className='py-3 px-5 mt-12 rounded mx-auto w-auto bg-blue-600 text-white'>Start Doing</Link>


            </div>


            <img className='w-4/5 mx-auto' src="https://i.ibb.co/NtBhDh9/board-1.png" alt="" />
            <h1 className='text-center mb-6'>Join over 2,000,000 teams worldwide that are using Trello to get more done.</h1>
        </div>
    );
};

export default WorkFieldDemo;