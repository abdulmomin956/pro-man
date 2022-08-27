import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const TempleteBoardModal = ({ tempBMTitle, bgUrl }) => {
    const allWorkspace = useSelector(state => state.workspace)
    const [bTitle, setBtitle] = useState("")
    // const [newTitle, setNewTitle] = useState(tempBMTitle)

    useEffect(() => {
        if (tempBMTitle) {
            setBtitle(tempBMTitle)
        }
    }, [tempBMTitle, setBtitle])

    const handleOnChange = (e) => {

        setBtitle(e.target.value)

        console.log(e.target.value)
    }


    const handleSubmit = async (e) => {

        e.preventDefault()
        const workspaceID = e.target.workspaceID.value
        const title = bTitle
        const visibility = e.target.visibility.value

        const newBoard = {
            workspaceID: workspaceID,
            title: title,
            boardBg: bgUrl,
            visibility: visibility,
        };

        console.log(newBoard)
        const res = await axios.post('https://morning-coast-54182.herokuapp.com/board', newBoard)
        console.log(res)

        e.target.boardTitle.value = ""

    }
    return (
        <div>
            <form
                // onSubmit={handleSubmit(onSubmit)}
                onSubmit={handleSubmit}
                className=" mt-8 "
                id="wordspace-form-card"
            >
                <div className='flex items-center'>
                    <img style={{ width: '50px', height: '50px' }} className='rounded' src={bgUrl} alt="" />
                    <div className=" ml-2  board-modal-title ">
                        <p className='text-lg'>{tempBMTitle}</p>
                        <p className='text-sm'>by Trello Engineering Team</p>
                    </div>
                </div>
                <p className='text-[12px] mt-2'>Use this basic structure to build your team's ideal workflow, for projects big or small.</p>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="text-sm font-bold board-modal-title">
                            Board Title
                        </span>
                    </label>
                    <input
                        className="input input-bordered w-full h-[30px] "
                        onChange={handleOnChange}
                        defaultValue={tempBMTitle}
                        autoFocus
                        fullWidth
                    />
                </div>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="text-sm font-bold board-modal-title">
                            Workspace
                        </span>
                    </label>
                    <select
                        name="workspaceID"
                        className="select select-bordered select-sm w-full h-[30px] mt-2"
                    >
                        {
                            allWorkspace?.map(item =>
                                <option key={item?._id} value={item?._id}>{item?.title}</option>
                            )
                        }
                    </select>
                    <label className="label">Select your workspace </label>
                </div>

                <div>
                    <p className="text-sm font-bold board-modal-title">Visibility</p>
                    <select
                        defaultValue={"workspace"}
                        className="select select-bordered select-sm w-full h-[30px] mt-2"
                        name="visibility"
                    >
                        <option value="private">Private</option>
                        <option value="workspace">Workspace</option>
                        <option value="public">Public</option>
                    </select>

                    <p className="text-justify text-sm my-2">This Workspace has 6 boards remaining. Free Workspaces can only have 10 open boards. For unlimited boards, upgrade your Workspace.</p>
                </div>

                <button className='w-full border-2 text-primary border-gray hover:bg-primary hover:text-white py-1'>Create</button>
            </form>
        </div>
    );
};

export default TempleteBoardModal;