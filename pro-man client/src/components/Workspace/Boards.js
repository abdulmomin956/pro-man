import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom'
import Loading from '../shared/Loading'

const Boards = () => {
    const { workspaceID } = useParams()
    const str = workspaceID.substring(1);
    // console.log(str);
    const workspace = useQuery(['singleData'], () => fetch(`https://morning-coast-54182.herokuapp.com/sworkspace/${str}`).then(res => res.json()))
    if (workspace.isLoading) {
        return <Loading />
    }
    // console.log(workspace);
    const { data } = workspace;
    return (
        <div className='w-full'>
            <div className='flex py-6 px-24 justify-between items-center'>
                <div>
                    <h1 className='text-2xl font-bold'>{data.title}</h1>
                    <p>visibility</p>
                </div>
                <div>
                    <button className='btn btn-primary'>Invite Workspace members</button>
                </div>
            </div>
            <hr />
            <div>
                <h1 className='text-2xl'>Boards</h1>
            </div>
        </div>
    );
};

export default Boards;