import React from 'react';
import { useQuery } from "@tanstack/react-query";
import Loading from '../shared/Loading';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux";

const LoardBoard = ({ props, workspaceID }) => {
    const navigate = useNavigate();
    // console.log(props);
    const shortname = props;
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])

    // const data1 = useSelector(state => state.workspace)
    // if (data1 && shortname) {
    //     data1?.map((item1) => {
    //         const itemId = item1._id === shortname
    //         const itemName = item1.sortname
    //         console.log(itemName)
    //     })
    // }
    // console.log(shortname)



    useEffect(() => {
        setLoading(true)
        fetch(`https://morning-coast-54182.herokuapp.com/board/w/${workspaceID}`)
            .then(res => res.json())
            .then(result => {
                setData(result)
                setLoading(false)
                // console.log(result);
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
    // onClick={() => navigate(`/${shortname}/${item._id}`)}
    return <>{
        data?.map(item => <div key={item._id} onClick={() => navigate(`/${shortname}/${item._id}`)} className=" w-60 bg-base-100 shadow">
            <label
                style={{background: `url(${item.boardBg})`, backgroundSize: 'cover'}}
                className=" hover:cursor-pointer text-white hover:bg-gray-700 hover:font-bold flex w-60 h-32 justify-center items-center"
            //   onClick={() => {
            //     dispatch(setWorkspaceID(item._id))
            //   }}
            >
                <p className="mr-2 text-lg shadow-xl">
                    {item.title}
                    
                </p>
                {/* <FaRegPlusSquare className="mr-1 text-sm"></FaRegPlusSquare> */}

            </label>
        </div>
        )}
    </>
};

export default LoardBoard;