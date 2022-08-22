import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';


import { useNavigate } from 'react-router-dom';
import auth from './firebase.init';
import SocialLogin from './SocialLogin';
import Loading from '../shared/Loading';

const Register = () => {
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit, reset, getValues } = useForm();
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, upError] = useUpdateProfile(auth);

    if (loading || updating) {
        <Loading></Loading>
    }

    let signInError;
    if (error || upError) {
        signInError = <p className='text-red-500'><small>{error?.message || upError?.message}</small></p>
    }

    useEffect(() => {
        if (user) {
            navigate('/')
            console.log(user)
        }
    }, [user, navigate])

    const onSubmit = async (data) => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password, data.displayName)
        const userName = data.name + " " + data.lastName
        await updateProfile({ displayName: userName });
        reset()
        // console.log(data)
    };
    return (
        <div className='mt-8'>
            <h1 className='text-3xl font-bold text-center '>Registration Here</h1>
            <div className="hero-content mx-auto flex-col lg:flex-row-reverse ">

                <div className="card  w-full   max-w-sm shadow-2xl bg-base-100">

                    <div className="card-body ">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-wrap -mx-3 ">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="label">
                                        <span className="label-text">Name</span>
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
                                        <span className="label-text">Name</span>
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
                                    <span className="label-text">Email</span>
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
                                    <span className="label-text">Password</span>
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
                                <button style={{ backgroundColor: 'black' }} className="btn text-white w-full mx-auto">Register</button>
                            </div>
                        </form>

                        <SocialLogin><span className='px-2'>Continue With</span></SocialLogin>
                        <label className="label">
                            <small>Already have an account?<a href="/login" className="label-text-alt link px-2 font-bold link-hover">Please Login</a></small>
                        </label>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;