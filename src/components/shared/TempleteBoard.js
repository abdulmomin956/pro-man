import React from 'react';

const TempleteBoard = ({ openTemp, setOpenTemp }) => {
    const bTempletes = [
        { _id: 1, imgURL: 'https://i.ibb.co/t2FDrsK/pexels-felix-mittermeier-956981.jpg', name: 'Agile Board' },
        { _id: 2, imgURL: 'https://i.ibb.co/ZKgZCdc/pexels-isaac-garcia-13173092.jpg', name: 'Company Overview' },
        { _id: 3, imgURL: 'https://i.ibb.co/DQ4pSjB/pexels-rafael-guajardo-604684.jpg', name: 'Design Huddle ' },
        { _id: 4, imgURL: 'https://i.ibb.co/sQmZfgC/keith-misner-h0-Vxgz5ty-XA-unsplash.jpg', name: 'Kanban Template ' },
        { _id: 5, imgURL: 'https://i.ibb.co/7JVRYtw/jeremy-bishop-G9i-plbf-Dgk-unsplash.jpg', name: 'Project Management ' },

    ]
    console.log(bTempletes)


    return (
        <div
            tabIndex="0"
            className="dropdown-content menu p-4 bg-base-100 rounded w-80 pt-4 shadow"
        >
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
                    {/* <button>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
                        </svg>
                    </button> */}
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>


                <ul className='mt-2'>
                    {
                        bTempletes && bTempletes.map((templete) => (
                            <li className='flex'><img style={{ width: '80px', height: '60px' }} src={templete.imgURL} alt="" /> <p>{templete.name}</p></li>
                        ))
                    }
                </ul>





            </label>
        </div>
    );
};

export default TempleteBoard;