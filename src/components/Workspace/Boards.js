import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import Loading from '../shared/Loading'
import { setCurrentWorkspace } from '../../global-state/actions/reduxActions'
import { useEffect } from 'react';

const Boards = () => {
    const { workspaceID } = useParams()
    const dispatch = useDispatch()
    // console.log(str);
    const workspace = useQuery(['singleData'], () => fetch(`https://morning-coast-54182.herokuapp.com/sworkspace/${workspaceID}`).then(res => res.json()))
    const { data } = workspace;
    useEffect(() => {
        if (data) {
            dispatch(setCurrentWorkspace(data?.title))
        }
    }, [data, dispatch])
    if (workspace.isLoading) {
        return <Loading />
    }
    // console.log(workspace);


    return (
        <div style={{ width: '100%' }} className=''>
            <div className='flex lg:py-6 lg:px-24 justify-between items-center'>
                <div>
                    <h1 className='text-2xl font-bold'>{data?.title}</h1>
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