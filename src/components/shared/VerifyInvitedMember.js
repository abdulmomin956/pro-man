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
   const [verifyUser, setVerifyUser] = useState("");

   const { workspaceId, email, token } = useParams()

   useEffect(() => {
      if (user) {
         const userData = { userEmail: user.email, token: token }
         axios.post("https://morning-coast-54182.herokuapp.com/invite/verify", userData)
            .then(res => {
               if (res.status === 200) {
                  setVerifyUser(res.data);
                  console.log(res.data)
               }
            }).catch(err => {
               return navigate('/login')
            })
      }
   }, [user, token, navigate])

   // Update user as a member  ***
   useEffect(() => {
      if (verifyUser) {

         const userData = { email: verifyUser.email, workspaceId: verifyUser.workspaceId }
         axios.put("https://morning-coast-54182.herokuapp.com/invite/update-user", userData)
            .then(res => {
               if (res.status === 200) {
                  // console.log(res.data);
                  return navigate('/')
               }
            }).catch(err => {
               if (err.response.status === 409) {
                  console.log("User already added.");
                  return navigate('/')
               }
            })
      }
   }, [verifyUser, navigate])

   if (loading) {
      return <Loading></Loading>
   }

   if (!user) {
      return <Navigate to="/login" state={{ from: location }} replace />
   }

   return (
      <div>
         <h2 className='text-4xl text-center mt-16 italic  text-primary'> Please wait a moment.....</h2>
         <Loading></Loading>
      </div>
   );
};

export default VerifyInvitedMember;