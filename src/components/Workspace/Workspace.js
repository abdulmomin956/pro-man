import React, { useState } from 'react';
import { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import control from '../../../src/assest/image/control.png'
import CustomLink from '../shared/CustomLink';
import Loading from '../shared/Loading';
import { useSelector } from "react-redux";
import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { setCurrentBoards } from '../../global-state/actions/reduxActions';
import axios from 'axios';
// import Button from '@material-ui/core/Button';


const Workspace = () => {

    const { shortname } = useParams()
    const [open, setOpen] = useState(null);
    const [closeB, setCloseB] = useState(false);
    const [firstLetter, setFirstLetter] = useState('')
    const workspaces = useSelector(state => state.workspace)
    const currentWorkspace = workspaces.filter(workspaces => workspaces.shortname === shortname)
    const [close, setClose] = useState(false);
    // console.log(anchorEl);
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


    const boards = useQuery(['boards', currentWorkspace[0]?._id], () => fetch(`https://morning-coast-54182.herokuapp.com/board/w/${currentWorkspace[0]?._id}`).then(res => res.json()))
    useEffect(() => {
        if (currentWorkspace[0]?.title) {
            const x = currentWorkspace[0]?.title;
            const nameparts = x?.split(" ");
            const initials =
                nameparts[0]?.charAt(0)?.toUpperCase()
            setFirstLetter(initials)
        }
    }, [currentWorkspace])

    useEffect(() => {
        if (boards?.data) {
            dispatch(setCurrentBoards(boards?.data))
        }
    }, [boards?.data, dispatch])

    if (boards.isLoading) {
        return <Loading></Loading>;
    }
    // console.log(boards);

    const handleDelete = async id => {
        console.log(id);
        const res = await axios.delete(`https://morning-coast-54182.herokuapp.com/board/b/${id}`)
        console.log(res);
        if (res.status === 200) {
            boards.refetch();
        }
    }

    const menusItem = [
        {
            path: `/${shortname}`,
            name: "Boards",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
            </svg>
        },

        {
            path: `/${shortname}/members`,
            name: "Members",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
        },
        {
            path: `/${shortname}/account`,
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
                            title={currentWorkspace[0]?.title}
                            className="text-white  font-bold block "
                        >
                            {firstLetter}
                        </span>
                    </div>
                    <h1 className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                        }`}>{currentWorkspace[0]?.title}</h1>
                </div>
                <ul className={`pt-6 mr-8 w-full`}>
                    {
                        menusItem.map((menu, index) => (
                            <CustomLink to={menu.path} key={index} className={`flex my-2  workspace-sidebar-toggle-button py-2 rounded-md cursor-pointer   text-gray-300 text-sm items-center gap-x-4 `}>
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
                            <CustomLink to={`/${shortname}/${item._id}`} key={index} className={`flex justify-between  py-2 rounded-md cursor-pointer   text-gray-300 text-sm items-center gap-x-2 workspace-sidebar-toggle-button mb-2  w-full`}>

                                <div className='flex justify-center items-center '>
                                    <div >
                                        <button className="h-6  w-6  border-2  flex justify-center items-center cursor-pointer duration-500" style={{ backgroundImage: `url(${item.boardBg})` }} >

                                            <span >{item.title?.charAt(0).toUpperCase()}</span>{" "}
                                        </button>
                                    </div>
                                    <span className={`${!open && "hidden"} ml-2 origin-left duration-200`}>{item.title}</span>
                                </div>


                                {/* all board */}

                                <div className='flex justify-center items-center px-2'>
                                    <div className={`${!open && "hidden"}  origin-left duration-200 navbar-end`}  >

                                        <div className="dropdown ">
                                            <label

                                                tabIndex="0"

                                            >
                                                <div onClick={() => setClose(!close)} className="flex justify-center items-center">
                                                    <span
                                                        className=" block "
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                                        </svg>
                                                    </span>
                                                </div>
                                            </label >
                                            {
                                                close &&
                                                <ul
                                                    style={{ width: '280px' }}
                                                    tabIndex="0"
                                                    className="mt-3 text-gray-500  shadow menu  dropdown-content bg-base-100 rounded w-52"
                                                >
                                                    {
                                                        !closeB &&
                                                        <div className='flex justify-between items-center   mb-2 btn-sm w-full mt-2'>
                                                            <small className="mt-2 text-center text-sm   btn-sm w-full  ">
                                                                {item.title}

                                                            </small>
                                                            <small onClick={() => setClose(!close)} className="px-2">X</small>
                                                        </div>
                                                    }
                                                    <hr />



                                                    <li onClick={() => setCloseB(!closeB)}>
                                                        <div className="flex justify-between items-center   mb-2 btn-sm w-full mt-2 ">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                                            </svg>
                                                            <small className="mt-2 text-center text-sm   btn-sm w-full " >
                                                                Delete board
                                                            </small>



                                                        </div>

                                                        {
                                                            closeB &&
                                                            <div className='flex flex-col'>

                                                                <p>If you delete board, it will be deleted permanently</p>
                                                                <button onClick={() => handleDelete(item._id)} className='btn w-full btn-sm btn-warning'>Delete</button>
                                                            </div>
                                                        }
                                                    </li>

                                                </ul>
                                            }
                                        </div>



                                    </div>
                                    <div>
                                        <div className={`${!open && "hidden"} ml-2 origin-left duration-200 navbar-end`}  >
                                            <div className="dropdown ">
                                                <label
                                                    tabIndex="0"


                                                >
                                                    <div className="flex justify-center items-center">
                                                        <span
                                                            className=" block "
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4  w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </label >
                                            </div>





                                        </div>
                                    </div>
                                </div>


                            </CustomLink>
                        ))
                    }

                </ul>

            </div>

            <Outlet className={` ${!open && "scale-0"}`} />


        </div >

    );
};

export default Workspace;