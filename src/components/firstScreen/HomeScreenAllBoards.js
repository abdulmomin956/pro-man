import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../shared/Loading';

const HomeScreenAllBoards = ({ props, workspaceID }) => {
    const navigate = useNavigate();
    // console.log(props);
    const shortname = props;
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    // const [numOfElement, setNumOfElement] = useState('')
    const sliceData = data.slice(1)
    // console.log(sliceData);

    if (sliceData) {
        // console.log(sliceData)
    }

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
        return <Loading></Loading>
    }

    return <>{
        data?.map(item => <div key={item._id} onClick={() => navigate(`/${shortname}/${item._id}`)} className="bg-base-100  my-2 rounded">
            <div className='flex items-center hover:bg-[#808080] h-12 p-1 cursor-pointer rounded '>
                <img style={{ height: '40px', width: '40px' }} className="rounded my-2" src={item.boardBg} alt="" />
                <p className='ml-2'>{item.title}</p>
            </div>

        </div>
        )}
    </>
};

export default HomeScreenAllBoards;