import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import CommonTopDesign from './CommonTopDesign';

const Boards = () => {
    const { shortname } = useParams()
    console.log(shortname)
    const currentBoards = useSelector(state => state.currentWorkspaceBoards)
    const navigate = useNavigate()
    console.log(currentBoards)

    return (
        <div style={{ width: '100%' }} className=''>
            <CommonTopDesign></CommonTopDesign>
            <div className='mx-12'>
                <h1 className='text-2xl'>Boards</h1>
                <div className='grid grid-cols-4 gap-4'>
                    <div className="  bg-base-100 drop-shadow">
                        <label

                            className=" hover:cursor-pointer hover:bg-gray-100  hover:font-bold flex  h-32 justify-center items-center"
                        //   onClick={() => {
                        //     dispatch(setWorkspaceID(item._id))
                        //   }}
                        >
                            <p className="mr-2">
                                Create new board
                            </p>
                            {/* <FaRegPlusSquare className="mr-1 text-sm"></FaRegPlusSquare> */}

                        </label>
                    </div>
                    {
                        currentBoards?.map(item => <div key={item._id} onClick={() => navigate(`/${shortname}/${item._id}`)} className=" bg-base-100 drop-shadow">
                            <label

                                className=" hover:cursor-pointer hover:bg-gray-100  hover:font-bold flex  h-32 justify-center items-center"

                            >
                                <p className="mr-2 mb-16 font-bold">
                                    {item.title}
                                </p>

                            </label>
                        </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Boards;