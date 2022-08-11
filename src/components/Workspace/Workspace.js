import React, { useState } from 'react';
import { useEffect } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import control from '../../../src/assest/image/control.png'
import CustomLink from '../shared/CustomLink';
import Loading from '../shared/Loading';
import { useSelector } from "react-redux";
import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { setCurrentBoards } from '../../global-state/actions/reduxActions';

const Workspace = () => {
    const navigate = useNavigate()
    const { workspaceID } = useParams()
    const [open, setOpen] = useState(null);
    const [firstLetter, setFirstLetter] = useState('')
    const currentWorkspaceName = useSelector(state => state.currentWorkspace)
    const dispatch = useDispatch()


    useEffect(() => {
        const dataJson = localStorage.getItem("bData");
        if (JSON.parse(dataJson)) {
            setOpen(JSON.parse(dataJson));
        }
    }, [])

    const sidebarOpen = () => {
        setOpen(!open)
        localStorage.setItem('bData', JSON.stringify(!open))
    }


    const boards = useQuery(['boards'], () => fetch(`https://morning-coast-54182.herokuapp.com/board/${workspaceID}`).then(res => res.json()))
    useEffect(() => {
        if (currentWorkspaceName) {
            const x = currentWorkspaceName;
            const nameparts = x?.split(" ");
            const initials =
                nameparts[0]?.charAt(0)?.toUpperCase()
            setFirstLetter(initials)
        }
    }, [currentWorkspaceName])
    useEffect(() => {
        if (boards?.data) {
            dispatch(setCurrentBoards(boards?.data))
        }
    }, [boards?.data, dispatch])

    if (boards.isLoading) {
        return <Loading></Loading>;
    }
    // console.log(boards);

    const menusItem = [
        {
            path: `/${workspaceID}`,
            name: "Boards",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
            </svg>
        },

        {
            path: `/${workspaceID}/members`,
            name: "Members",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
        },
        {
            path: `/${workspaceID}/account`,
            name: "Settings",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        },
    ]




    return (


        <div className='flex'>

            <div style={{ backgroundColor: '#081A51' }} className={`${open ? "w-72" : "w-16 "} p-5 pt-4  duration-300 h-screen relative`}>

                <img style={{ border: '#081A51' }}
                    src={control}
                    className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full  ${!open && "rotate-180"}`}
                    onClick={sidebarOpen}
                    alt=""
                />
                <div className="flex gap-x-4 items-center mt-2">
                    <div className="h-8 p-2 w-8  border-2  flex justify-center items-center cursor-pointer duration-500">
                        <span
                            title={currentWorkspaceName}
                            className="text-white  font-bold block "
                        >
                            {firstLetter}
                        </span>
                    </div>
                    <h1 className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                        }`}>{currentWorkspaceName}</h1>
                </div>
                <ul className="pt-6 mr-8">
                    {
                        menusItem.map((menu, index) => (
                            <CustomLink to={menu.path} key={index} className={`flex py-2 rounded-md cursor-pointer   text-gray-300 text-sm items-center gap-x-4 `}>
                                <div  >{menu.icon}</div>
                                <span className={`${!open && "hidden"} origin-left duration-200`}>{menu.name}</span>
                            </CustomLink>
                        ))
                    }

                    <div className=' my-6'>
                        <h4 className={`${!open && "hidden"} mx-auto text-white font-bold origin-left duration-200`}>Your Boards</h4>
                    </div>
                    {
                        boards?.data?.map((item, index) => (
                            <CustomLink to={`/${workspaceID}/${item._id}`} key={index} className={`flex py-2 rounded-md cursor-pointer   text-gray-300 text-sm items-center gap-x-4 `}>

                                <span className={`${!open && "hidden"} mr-2 origin-left duration-200`}>{item.title}</span>


                            </CustomLink>
                        ))
                    }

                </ul>

            </div>

            <Outlet className={` ${!open && "scale-0"}`} />


        </div>

    );
};

export default Workspace;