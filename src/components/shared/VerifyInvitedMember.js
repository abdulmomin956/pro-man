import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useSelector } from 'react-redux';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import auth from '../firebase/firebase.init';
import Loading from './Loading';
import { RESTAPI } from '../../api';

const VerifyInvitedMember = () => {
   // const [allUsers, setAllUsers] = useState([]);
   let location = useLocation();
   const [user, loading] = useAuthState(auth)
   const navigate = useNavigate()
   const [verifyUser, setVerifyUser] = useState("");

   const users = useSelector(state => state.user)
   const { workspaceId, email, token } = useParams()

   // console.log(users);
   // console.log(user);
   // verify the user when accept invite request.
   useEffect(() => {
      if (user) {
         const userData = { userEmail: user.email, token: token }
         axios.post(RESTAPI + "invite/verify", userData)
            .then(res => {
               if (res.status === 200) {
                  setVerifyUser(res.data);
                  // console.log(res.data)
               }
            }).catch(err => {
               return navigate('/login')
            })
      }
   }, [user, token, navigate])

   // Update user as a member  ***
   useEffect(() => {
      if (verifyUser) {
         const userData = { userId: users._id, workspaceId: verifyUser.workspaceId }
         console.log(userData);

         axios.put(RESTAPI + "invite/update-user", userData)
            .then(res => {
               if (res.status === 200) {
                  console.log(res.data);
                  return navigate('/')
               }
            }).catch(err => {
               if (err.response.status === 409) {
                  console.log("User already added.");
                  return navigate('/my-board')
               }
            })
      }
   }, [verifyUser, navigate, users._id])


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