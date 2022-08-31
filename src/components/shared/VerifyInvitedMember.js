import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import auth from '../firebase/firebase.init';
import Loading from './Loading';

const VerifyInvitedMember = () => {
   let location = useLocation();
   const [user, loading] = useAuthState(auth)
   const navigate = useNavigate()
   const [verifyUser, setVerifyUser] = useState("");

   const { workspaceId, email, token } = useParams()

   // const [allUsers, setAllUsers] = useState([]);
   // useEffect(() => {
   //    fetch(`https://morning-coast-54182.herokuapp.com/users`)
   //       .then((res) => res.json())
   //       .then((data) => setAllUsers(data));
   // }, []);

   // verify the User 
   useEffect(() => {
      if (user) {
         const userData = { userEmail: user.email, token: token }
         axios.post("http://localhost:5000/invite/verify", userData)
            .then(res => {
               if (res.status === 200) {
                  setVerifyUser(res.data);
               }
            }).catch(err => {
               return navigate('/login')
            })
      }
   }, [user, token, navigate, location])

   // Update user as a member
   useEffect(() => {
      if (verifyUser) {
         const userData = { email: verifyUser.email, workspaceId: verifyUser.workspaceId }
         axios.put("http://localhost:5000/invite/update-user", userData)
            .then(res => {
               if (res.status === 200) {
                  console.log(res.data);
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
      console.log("null.......")
      return <Navigate to="/login" state={{ from: location }} replace />
   }

   return (
      <div>
         <h2 className='text-4xl text-center mt-16'> Verify the member.....</h2>
         <Loading></Loading>
      </div>
   );
};

export default VerifyInvitedMember;