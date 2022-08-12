import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import Loading from '../shared/Loading'
import { setCurrentWorkspace } from '../../global-state/actions/reduxActions'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CommonTopDesign from './CommonTopDesign';

const Boards = () => {
    const { workspaceID } = useParams()
    const dispatch = useDispatch()
    const currentBoards = useSelector(state => state.currentWorkspaceBoards)
    const navigate = useNavigate()
    const [firstLetter, setFirstLetter] = useState('')

    const workspace = useQuery(['singleData'], () => fetch(`https://morning-coast-54182.herokuapp.com/sworkspace/${workspaceID}`).then(res => res.json()))
    const { data } = workspace;
    useEffect(() => {
        if (data) {
            dispatch(setCurrentWorkspace(data?.title))
        }
    }, [data, dispatch])

    useEffect(() => {
        if (data?.title) {
            const x = data?.title;
            const nameparts = x?.split(" ");
            const initials =
                nameparts[0]?.charAt(0)?.toUpperCase()
            setFirstLetter(initials)
        }
    }, [data?.title])

    if (workspace.isLoading) {
        return <Loading />
    }
    // console.log(workspace);


    return (
        <div style={{ width: '100%' }} className=''>
            <CommonTopDesign></CommonTopDesign>
            {/* <div className='flex lg:py-6 lg:px-24 justify-between items-center'>
                <div className='flex'>
                    <div className='text-5xl font-bold bg-[#081A51] text-white px-2 mr-3'>
                        {firstLetter}
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold'>{data?.title}</h1>
                        <p>visibility</p>
                    </div>
                </div>
                <div>
                    <button className='btn bg-[#081A51] text-white'>Invite Workspace members</button>
                </div>
            </div>
            <hr /> */}
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
                        currentBoards?.map(item => <div key={item._id} onClick={() => navigate(`/${workspaceID}/${item._id}`)} className=" bg-base-100 drop-shadow">
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