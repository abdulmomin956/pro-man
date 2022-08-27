import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux"
import axios from 'axios';
import { setUser } from '../../global-state/actions/reduxActions';

function getWithExpiry(key) {
    const itemStr = localStorage.getItem(key)
    // if the item doesn't exist, return null
    if (!itemStr) {
        return null
    }
    const item = JSON.parse(itemStr)
    const now = new Date()
    // compare the expiry time of the item with the current time
    if (now.getTime() > item.expiry) {
        // If the item is expired, delete the item from storage
        // and return null
        localStorage.removeItem(key)
        return null
    }
    return item.accessToken
}

const RequireAuth = ({ children }) => {
    const email = useSelector(state => state.user.email)
    const dispatch = useDispatch()
    let location = useLocation();
    // if (loading) {
    //     return <Loading></Loading>
    // }

    const token = getWithExpiry('token')

    if (!email) {
        if (!token) {
            return <Navigate to="/login" state={{ from: location }} replace />;
        }
        else {
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };

            const bodyParameters = {
                key: "value"
            };

            const fetchData = async () => {
                const res = await axios.post(
                    'https://morning-coast-54182.herokuapp.com/api/auth',
                    bodyParameters,
                    config
                )
                if (res.status === 200) {
                    dispatch(setUser(res.data))
                }
                else return <Navigate to="/login" state={{ from: location }} replace />
            }
            fetchData();

        }
    }

    return children;
}

export default RequireAuth;