import React, { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useSelector } from "react-redux";
import auth from '../firebase/firebase.init';
import UsingProman from './UsingProman';

const ContactForm = () => {

    const [list, setList] = useState(false)
    const [upList, setupList] = useState(false)
    const [selectItem, setSelectItems] = useState("")
    const [upTopic, setupTopic] = useState("")
    const [user] = useAuthState(auth)

  const user1 = useSelector((state) => state.user);
    const email = user1?.email

    console.log(user1?.email)
    /* 
    useEffect(() => {
        fetch(`https://morning-coast-54182.herokuapp.com/profile/${email}`)
          .then(res => res.json())
          .then(data => setUser(data))
      }, [email])
*/
      if(user){
      console.log(user)

      }

      /*
      if(selectItem){
        return <div onClick={()=>setList(!list)} className='w-full border bg-gray-50 flex justify-between px-3 my-2 py-1'>
        <input type="text" disabled placeholder={selectItem ? `${selectItem}` : 'Select from the list'} className=" bg-transparent text-black"/>
        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
        </div>
      }

      */
      
    return (
        <div className='w-1/2 mx-auto px-12'>
            <div className='mb-5 p-5 flex bg-blue-100 rounded'>
                <div className='mx-5'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                </svg>
                </div>
                <div>
                <p>Your are contacting us as ......</p>
                <br /> <p>Not you? <span className='underline text-primary font-bold italic'>Log Out</span></p>
                </div>
                
            </div>

            <form action="#">
                <label htmlFor="">Your Name</label> <br />
                <input type="text" disabled placeholder={user?.displayName} className="w-full border px-3 my-2 py-1  text-black"/>
                <label htmlFor="">Email Address</label> <br />
                <input type="text" disabled placeholder={user?.email} className="w-full border px-3 my-2 py-1 text-black"/>
                <label htmlFor="">What can we help you with?</label> <br />
                <div onClick={()=>setList(!list)} className='w-full border bg-gray-50 flex justify-between px-3 my-2 py-1'>
                <input type="text" disabled placeholder={selectItem ? `${selectItem}` : 'Select from the list'} className=" bg-transparent text-black"/>
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                </div>

                {list && <div>
                    <ul onClick={()=>setList(!list)}>
                        <li onClick={()=>setSelectItems("Using Proman")} className='pl-3 py-2 border-primary hover:border mb-1'>Using Proman</li>
                        <li onClick={()=>setSelectItems("Acounts Issue")} className='pl-3 py-2 border-primary hover:border mb-1'>Acounts Issue</li>
                        <li onClick={()=>setSelectItems("Billing")} className='pl-3 py-2 border-primary hover:border mb-1'>Billing</li>
                        <li onClick={()=>setSelectItems("Sales")} className='pl-3 py-2 border-primary hover:border mb-1'>Sales</li>
                        <li onClick={()=>setSelectItems("Report Issue")} className='pl-3 py-2 border-primary hover:border mb-1'>Report Issue</li>
                    </ul>
                </div>}
                
                { (selectItem === "Using Proman") && 
                <div onClick={()=>setupList(!upList)} className='w-full border bg-gray-50 flex justify-between px-3 my-2 py-1'>
                <input type="text" disabled placeholder={upTopic ? `${upTopic}` : 'Select from the list'} className=" bg-transparent text-black"/>
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                </div>}
                {upList && <div>
                    <ul onClick={()=>setList(!upList)}>
                        <li onClick={()=>setupTopic("How to do something")} className='pl-3 py-2 border-primary hover:border mb-1'>How to do something</li>
                        <li onClick={()=>setupTopic("Report a bug")} className='pl-3 py-2 border-primary hover:border mb-1'>Report a bug</li>
                        <li onClick={()=>setupTopic("Power-Ups and Integrations")} className='pl-3 py-2 border-primary hover:border mb-1'>Power-Ups and Integrations</li>
                        <li onClick={()=>setupTopic("Features requests")} className='pl-3 py-2 border-primary hover:border mb-1'>Features requests</li>
                    </ul>
                </div>}
                {
                    upTopic && <UsingProman upTopic={upTopic}></UsingProman>
                }


                
                
            </form>
        </div>
    );
};

export default ContactForm;