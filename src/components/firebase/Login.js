import React from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from './firebase.init';
import { useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';



const Login = () => {
    const { register, formState: { errors }, handleSubmit, reset, getValues } = useForm();
    const navigate = useNavigate()
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
        auth
    );

    if (user) {
        navigate('/')
    }

    let signInError;
    if (error) {
        signInError = <p className='text-red-500'><small>{error?.message}</small></p>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
        reset()
        console.log(data)
    };
    return (
        <div className='mt-8'>
            <h1 className='text-3xl font-bold text-center '>Please Login First!</h1>
            <div class="hero-content mx-auto flex-col lg:flex-row-reverse ">
                <div class="card w-full  max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
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
                                })} type="text" placeholder="email" class="input input-bordered" />
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
                            <div class="form-control ">
                                <button style={{ backgroundColor: 'black' }} class="btn text-white w-2/3 mx-auto">Login</button>
                            </div>
                        </form>

                        <SocialLogin><span className='px-2'>Continue With</span></SocialLogin>
                        <label class="label">
                            <small>New to Pro-Man?<a href="/register" class="label-text-alt link px-2 font-bold link-hover">Please Register</a></small>
                        </label>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;