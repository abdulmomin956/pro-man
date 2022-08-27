import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import auth from '../firebase/firebase.init';
import Loading from './Loading';

const VerifyInvitedMember = () => {
   const [allUsers, setAllUsers] = useState([]);
   let location = useLocation();
   const [user, loading] = useAuthState(auth)
   const navigate = useNavigate()

   const { workspaceId, email, token } = useParams()
   // console.log(token);


   useEffect(() => {
      fetch(`https://morning-coast-54182.herokuapp.com/users`)
         .then((res) => res.json())
         .then((data) => setAllUsers(data));
   }, []);

   useEffect(() => {
      if (user) {
         const userData = { userEmail: user.email, token: token }

         axios.post("http://localhost:5000/invite/verify", userData)
            .then(res => {
               // console.log(res.data);
               if (res.status === 200) {
                  //  setUserInfoToken(res.data.token);
               }
            })

      }
      // const verifyUser = allUsers?.filter(u => u.email === user?.email)
      // if (verifyUser.length != 0) {

      // } else {
      //    <Navigate to="/login" state={{ from: location }} replace />
      // }
   }, [user, token, email, location, allUsers])

   if (loading) {
      return <Loading></Loading>
   }

   if (!user) {
      console.log("null.......")
      return <Navigate to="/login" state={{ from: location }} replace />
   }






   // console.log(users)
   return (
      <div>
         <h2 className='text-4xl text-center mt-16'> Verify the member.....</h2>


         <Loading></Loading>
      </div>
   );
};

export default VerifyInvitedMember;