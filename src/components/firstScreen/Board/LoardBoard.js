import React from 'react';
import { useQuery } from "@tanstack/react-query";
import Loading from '../../shared/Loading';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const LoardBoard = ({ props }) => {
    const navigate = useNavigate();
    // console.log(props);
    const workspaceID = props;
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])

    // const { data, isLoading } = useQuery(['workspaceID'], () =>
    //     fetch(`https://morning-coast-54182.herokuapp.com/board/${workspaceID}`).then(res =>
    //         res.json()
    //     )
    // )
    useEffect(() => {
        setLoading(true)
        fetch(`https://morning-coast-54182.herokuapp.com/board/${workspaceID}`)
            .then(res => res.json())
            .then(result => {
                setData(result)
                setLoading(false)
            })
            .catch(err => {
                // console.log(err)
                setLoading(false)
            })
    }, [workspaceID])

    if (loading) {
        <Loading></Loading>
    }
    // console.log(data);
    return <>{
        data?.map(item => <div key={item._id} onClick={() => navigate(`/b/${item._id}`)} className=" w-60 bg-base-100 shadow">
            <label

                className=" hover:cursor-pointer hover:bg-gray-100  hover:font-bold flex w-60 h-32 justify-center items-center"
            //   onClick={() => {
            //     dispatch(setWorkspaceID(item._id))
            //   }}
            >
                <p className="mr-2">
                    {item.title}
                </p>
                {/* <FaRegPlusSquare className="mr-1 text-sm"></FaRegPlusSquare> */}

            </label>
        </div>
        )}
    </>
};

export default LoardBoard;