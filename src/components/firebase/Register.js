import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from './firebase.init';
import SocialLogin from './SocialLogin';
import Loading from '../shared/Loading';
import axios from 'axios';
import { useDispatch } from "react-redux"
import { setUser } from '../../global-state/actions/reduxActions';

const Register = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, upError] = useUpdateProfile(auth);
    let location = useLocation();
    let from = location.state?.from?.pathname || "/my-board";
    useEffect(() => {
        // console.log(user);
        // console.log(user?.user);
        // console.log(user?.user?.displayName);
        if (user?.user?.displayName) {
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            // console.log(user?.user?.displayName);
            const userInfo = {
                displayName: user?.user?.displayName,
                email: user?.user?.email,
                profileBg: "#" + randomColor,
                bio: "",
                createdAt: Date.now()
            };

            const regUser = async () => {
                const res = await axios.post(`http://13.126.5.141:5000/api/reg`, userInfo)
                console.log(res)
                if (res.status === 201) {
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
                    dispatch(setUser(userInfo))
                    if (res.data?.usersDB?.role === "Admin") {
                        navigate("/")
                    }
                    else {
                        navigate(from, { replace: true })
                    }
                }
            }
            regUser();

        }
    }, [user?.user?.displayName, navigate, dispatch, from, user])

    if (loading || updating) {
        return <Loading></Loading>
    }

    let signInError;
    if (error || upError) {
        signInError = <p className='text-red-500'><small>{error?.message || upError?.message}</small></p>
    }


    // console.log(user);

    const onSubmit = async (data) => {

        await createUserWithEmailAndPassword(data.email, data.password, data.displayName)
        const userName = data.name + " " + data.lastName
        await updateProfile({ displayName: userName });


        reset()
        // console.log(data)
    };

    return (
        <div style={{ backgroundImage: `url("https://i.ibb.co/JdkMHrY/b-RDQI7-1-1.webp")`, backgroundRepeat: 'no-repeat' }} className='h-screen'>

            <div className="hero-content mx-auto flex-col lg:flex-row-reverse ">

                <div className="card  w-full lg:mt-12 mt-20 md:mt-52  max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body ">
                        <h1 className='text-3xl font-bold text-center text-secondary'>Registration Here</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-wrap -mx-3 ">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="label">
                                        <span className="label-text text-secondary">First Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("name", {
                                            required: {
                                                value: true,
                                                message: 'First Name is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.firstName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.firstName.message}</span>}
                                    </label>
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <label className="label">
                                        <span className="label-text text-secondary">Last Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("lastName", {
                                            required: {
                                                value: true,
                                                message: 'Last Name is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.lastName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.lastName.message}</span>}
                                    </label>
                                </div>
                            </div>

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
                            <div className="form-control ">
                                <button className="btn btn-secondary text-white w-full mx-auto">Register</button>
                            </div>
                        </form>

                        <SocialLogin><span className='px-2'>Continue With</span></SocialLogin>
                        <label className="label text-secondary">
                            <small>Already have an account?<Link to="/login" className="label-text-alt link px-2 font-bold link-hover text-secondary">Please Login</Link></small>
                        </label>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;