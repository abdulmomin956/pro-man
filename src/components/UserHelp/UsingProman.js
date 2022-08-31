import React from 'react';
// import { useEffect } from 'react';
// import { useState } from 'react';

const UsingProman = ({upTopic}) => {
    // const [selectItem, setSelectItem] = useState("")

    // useEffect(()=>{
    //     if()
    // },[])

    return (
        <div className='mt-5'>

            {/* Topics -->  How to do something */}

            {   (upTopic === "How to do something" || upTopic === "Power-Ups and Integrations") &&

                <div className='p-5 bg-gray-200 shadow-teal-900 shadow-md'>
                    <h1 className='text-xl my-5 font-bold'>Getting help from the Atlassian Community</h1>
                    <p className='text-justify text-lg mb-5'>Ask questions or browse discussions to find the information you need. Support staff and developers from Atlassian check in regularly to help answer tricky or highly technical questions.</p>

                <button className='bg-primary mt-3 text-white font-bold py-3 px-6'>Explore Community</button>
                <br />
                    <h1 className='text-xl my-5 font-bold'>Check out our Proman how-to guides</h1>
                    <p className='text-justify text-lg mb-5'>You’ll find info on how to set up Proman and make the most of its features in our online documentation.</p>

                <button className='bg-primary mt-3 mb-5 text-white font-bold py-3 px-6'>View Documentation</button>

                </div>

            }

            {/* Topics -->  Report a bug */}

            {
                (upTopic === "Report a bug" || upTopic === "Features requests") &&
                <div>
                <label htmlFor="">Summary</label> <br />
                <input type="text" placeholder="Give us description what happening" className="w-full bg-gray-50 border px-3 my-2 py-1  text-black"/>
                <label htmlFor="">Add more details</label> <br />
                <textarea type="text" placeholder="If you gave more specific info, add here" className="w-full bg-gray-50 border px-3 my-2 py-1  text-black"/>
                <label htmlFor="">Page Link</label> <br />
                <input type="text" placeholder="Put hare a link where happening the issue" className="w-full bg-gray-50 border px-3 my-2 py-1  text-black"/>
                <div className='my-2 mx-auto w-full rounded-lg bg-primary shadow-lg text-center py-2 text-white justify-center shadow-teal-900'>
                    <input type="file" name="screenShort" id="" />
                    <p className='text-accent'>max. file size 150 MB, max. total file size 300 MB</p>
                </div>
                <label htmlFor="">Add people to this request</label> <br />
                <input type="text" placeholder="Add email separeded a comma" className="w-full bg-gray-50 border px-3 my-2 py-1  text-black"/>                
                <input type="checkbox" name="" id="" />
                <span className='ml-2'>Give Trello support staff temporary access to your account.</span>
                <button className='bg-primary mt-3 text-white font-bold py-3 px-6'>Submit Support Request</button>
                </div>
            }
        </div>
    );
};

export default UsingProman;