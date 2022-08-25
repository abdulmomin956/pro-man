import React, { useState } from "react";
import TempleteBoardModal from '../shared/TempleteBoardModal'


const TempleteBoard = ({ openTemp, setOpenTemp }) => {
    const [openTempBM, setOpenTempBm] = useState(false)
    const [tempBMTitle, setTempBMTitle] = useState('')
    const [bgUrl, setBgUrl] = useState('')

    const bTempletes = [
        { _id: 1, imgURL: 'https://i.ibb.co/t2FDrsK/pexels-felix-mittermeier-956981.jpg', name: 'Agile Board' },
        { _id: 2, imgURL: 'https://i.ibb.co/ZKgZCdc/pexels-isaac-garcia-13173092.jpg', name: 'Company Overview' },
        { _id: 3, imgURL: 'https://i.ibb.co/DQ4pSjB/pexels-rafael-guajardo-604684.jpg', name: 'Design Huddle ' },
        { _id: 4, imgURL: 'https://i.ibb.co/sQmZfgC/keith-misner-h0-Vxgz5ty-XA-unsplash.jpg', name: 'Kanban Template ' },
        { _id: 5, imgURL: 'https://i.ibb.co/7JVRYtw/jeremy-bishop-G9i-plbf-Dgk-unsplash.jpg', name: 'Project Management ' },

    ]
    const handleTemp = (title, bg) => {
        setTempBMTitle(title)
        setBgUrl(bg)
        setOpenTempBm(!openTempBM)
    }

    return (
        <div>
            <div
                tabIndex="0"
                className="dropdown-content menu p-4 bg-base-100 rounded w-80 pt-4 shadow-lg"
            >
                {
                    !openTempBM &&
                    <label

                        className="mb-2 h-full w-full  "
                        style={{ borderRadius: "0px" }}
                    >
                        <div>
                            <h1 className="text-md text-center mb-3">
                                Templetes
                            </h1>
                            <label
                                onClick={() => setOpenTemp(!openTemp)}
                                tabIndex="0"
                                className="btn btn-sm bg-transparent btn-circle absolute right-2 top-2"
                            >
                                ✕
                            </label>
                        </div>
                        <hr />

                        <div className='flex justify-between'>

                            <p className="text-sm">
                                Top templates
                            </p>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>

                        <div className='mt-2'>
                            {
                                bTempletes && bTempletes.map((templete) => (
                                    <div onClick={() => handleTemp(templete.name, templete.imgURL)} className='flex my-2  items-center cursor-pointer hover:bg-gray-200'><img style={{ width: '40px', height: '40px' }} className='rounded' src={templete.imgURL} alt="" /> <p className='ml-2'>{templete.name}</p></div>
                                ))
                            }
                        </div>
                    </label>
                }
                {
                    openTempBM &&
                    <label

                        className="mb-2 h-full w-full  "
                        style={{ borderRadius: "0px" }}
                    >
                        <div>
                            <h1 className="text-md text-center mb-3">

                                <label
                                    onClick={() => setOpenTemp(!openTemp)}
                                    tabIndex="0"
                                    className="btn btn-sm bg-transparent btn-circle absolute left-2 top-2"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                    </svg>
                                </label>

                                {tempBMTitle}
                            </h1>
                            <label
                                onClick={() => setOpenTemp(!openTemp)}
                                tabIndex="0"
                                className="btn btn-sm bg-transparent btn-circle absolute right-2 top-2"
                            >
                                ✕
                            </label>
                        </div>
                        <hr />

                        <TempleteBoardModal tempBMTitle={tempBMTitle} bgUrl={bgUrl}></TempleteBoardModal>
                    </label>
                }
            </div>


        </div>
    );
};

export default TempleteBoard;