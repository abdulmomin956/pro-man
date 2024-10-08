import React from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from './firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import Loading from '../shared/Loading';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { setUser } from '../../global-state/actions/reduxActions';
import { RESTAPI } from '../../api';
// import { toast } from 'react-toastify';

const Login = () => {
    const dispatch = useDispatch()
    let location = useLocation();
    let from = location.state?.from?.pathname || '/my-board'
    const { register, formState: { errors }, handleSubmit, reset, getValues } = useForm();
    const navigate = useNavigate()
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
        auth
    );


    if (loading || sending) {
        <Loading></Loading>
    }
    // console.log(user);
    // console.log(user?.user?.email);

    // if (user) {
    //     navigate(from, { replace: true })
    // }

    let signInError;
    if (error || resetError) {
        signInError = <p className='text-red-500'><small>{error?.message || resetError?.message}</small></p>
    }

    const onSubmit = async data => {
        await signInWithEmailAndPassword(data.email, data.password)
        reset()
        const userInfo = { email: data.email }
        // console.log(data)
        const res = await axios.post(`${RESTAPI}api/login`, userInfo)
        // console.log(res);
        if (res.status === 200) {
            const accessToken = res.data.accessToken;
            const ttl = res.data.ttl;
            const now = new Date()

            // `item` is an object which contains the original value
            // as well as the time when it's supposed to expire
            const item = {
                accessToken: accessToken,
                expiry: now.getTime() + ttl,
                email: userInfo.email
            }
            localStorage.setItem("token", JSON.stringify(item))
            dispatch(setUser(res.data.usersDB))
            if (res.data.usersDB.role === "Admin") {
                navigate("/")
            }
            else {
                navigate(from, { replace: true })
            }
        }
    };

    return (
        <div style={{ backgroundImage: `url("https://i.ibb.co/JdkMHrY/b-RDQI7-1-1.webp")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className='h-screen'>

            <div className="hero-content mx-auto flex-col lg:flex-row-reverse ">
                <div className="card w-full lg:mt-20 mt-24 max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className='text-3xl font-bold text-center text-secondary'>Please Login First!</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-secondary">Email</span>
                                </label>
                                <input {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid email'
                                    }
                                })} type="text" placeholder="email" className="input input-bordered" />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500 ">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500 ">{errors.email.message}</span>}
                                </label>
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text text-secondary">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is Required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 characters or longer'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                </label>
                            </div>
                            {signInError}

                            <p className='text-secondary'>Forgot password? <button type='button' onClick={async () => {
                                const values = getValues('email');
                                await sendPasswordResetEmail(values);
                                alert('Sent email');
                            }} className=" link-hover text-secondary">Reset </button></p>

                            <div className="form-control ">
                                <button className="btn btn-secondary text-white w-full mx-auto">Login</button>
                            </div>
                        </form>

                        <SocialLogin><span className='px-2'>Continue With</span></SocialLogin>
                        <label className="label text-secondary">
                            <small >New to Pro-Man?<Link to="/register" className="label-text-alt link px-2 font-bold link-hover text-secondary">Please Register</Link></small>
                        </label>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;