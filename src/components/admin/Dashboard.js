import React, { useEffect, useState } from 'react';
import ComingSoon from '../shared/ComingSoon'
import { FaUsers, FaBoxes } from "react-icons/fa";
import { MdOutlineGroupWork } from "react-icons/md";
import { useSelector } from 'react-redux';
import {
    AreaChart,
    Area,
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";

const Dashboard = () => {
    const [allUsers, setAllUsers] = useState([]);
    const workspaces = useSelector(state => state.workspace)

    useEffect(() => {
        fetch(`https://65.0.1.22/users/all`)
            .then((res) => res.json())
            .then((data) => setAllUsers(data));
    }, []);

    const usersCount = allUsers.length;
    const proManData = {
        users: usersCount,
        workspace: 166,
        boards: 382
    }
    // console.log(proManData)

    const chartReport = [
        {
            "_id": "6276edeebfcdae3b71869fb0",
            "month": "JAN",
            "members": 150,
            "boards": 107,
            "workspace": 87
        },
        {
            "_id": "6276edeebfcdae3b71869fad",
            "month": "FEB",
            "members": 22,
            "boards": 12,
            "workspace": 30
        },
        {
            "_id": "6276edeebfcdae3b71869fb1",
            "month": "MAR",
            "members": 50,
            "boards": 9,
            "workspace": 24
        },
        {
            "_id": "6276edeebfcdae3b71869fac",
            "month": "APR",
            "members": 80,
            "boards": 59,
            "workspace": 17
        },
        {
            "_id": "6276edeebfcdae3b71869fb5",
            "month": "MAY",
            "members": 86,
            "boards": 67,
            "workspace": 61
        },
        {
            "_id": "6276edeebfcdae3b71869fae",
            "month": "Mar",
            "members": 10,
            "boards": 42,
            "workspace": 4
        },
        {
            "_id": "6276edeebfcdae3b71869fb6",
            "month": "JUN",
            "members": 70,
            "boards": 10,
            "workspace": 3
        },
        {
            "_id": "6276edeebfcdae3b71869fb7",
            "month": "JUL",
            "members": 30,
            "boards": 15,
            "workspace": 78
        },
        {
            "_id": "6276edeebfcdae3b71869faf",
            "month": "AUG",
            "members": 190,
            "boards": 15,
            "workspace": 24
        },
        {
            "_id": "6276edeebfcdae3b71869fb3",
            "month": "SEP",
            "members": 70,
            "boards": 36,
            "workspace": 6
        },
        {
            "_id": "6276edeebfcdae3b71869fb2",
            "month": "OCT",
            "members": 60,
            "boards": 20,
            "workspace": 9
        },
        {
            "_id": "6276edeebfcdae3b71869fb4",
            "month": "NOV",
            "members": 70,
            "boards": 19,
            "workspace": 8
        }
    ]
    return (
        <div className='w-full'>
            {/* this is Dashboard page */}
            <div>
                <div className="mx-auto text-center py-10">
                    <div className=" shadow grid md:grid-cols-3 gap-6 px-5 ">
                        <div className="shadow my-4 py-5 cardHover bg-white">
                            <div className=" text-center w-12 mx-auto">
                                <FaUsers className="text-5xl text-yellow-500" />
                            </div>
                            <div className="text-xl">Users</div>
                            <div className="stat-value text-primary">86</div>
                        </div>

                        <div className="shadow my-4 py-5 cardHover bg-white">
                            <div className=" text-center w-12 mx-auto">
                                <MdOutlineGroupWork className="text-5xl text-secondary" />
                            </div>
                            <div className="text-xl">Workspace</div>
                            <div className="stat-value text-primary">250</div>
                        </div>

                        <div className="shadow my-4 py-5 cardHover bg-white">
                            <div className=" text-center w-12 mx-auto">
                                <FaBoxes className="text-5xl text-red-300" />
                            </div>
                            <div className="text-xl">Boards</div>
                            <div className="stat-value text-primary">474</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <ComingSoon /> */}
            <div className='flex justify-center'>
                <div className=''>
                    <h2 className='text-4xl mb-5 font-bold text-center text-primary'>ProMan Yearly Data </h2>
                    <ComposedChart
                        className='mx-auto shadow bg-white mb-10'
                        width={900}
                        height={450}
                        data={chartReport}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="month" scale="band" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="members" barSize={20} fill="#303441" />
                        <Area type="monotone" dataKey="workspace" fill="#8884d8" stroke="#8884d8" />
                        <Line type="monotone" dataKey="boards" stroke="#ff7300" />
                    </ComposedChart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;