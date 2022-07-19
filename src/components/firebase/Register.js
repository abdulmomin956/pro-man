import React from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {
    const { register, formState: { errors }, handleSubmit, reset, getValues } = useForm();

    const onSubmit = data => {
        console.log(data)
        reset()
    };
    return (
        <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="card  w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is required'
                                }
                            })} type="text" placeholder="name" class="input input-bordered" />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500 ">{errors.name.message}</span>}
                            </label>
                        </div>
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
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 characters or longer'
                                }
                            })} type="text" placeholder="password" class="input input-bordered" />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500 ">{errors.password.message}</span>}
                                {errors.password?.type === 'minLenth' && <span className="label-text-alt text-red-500 ">{errors.password.message}</span>}
                            </label>
                            <label class="label">
                                <p><a href="/login" class="label-text-alt link link-hover">Please Login</a></p>
                            </label>
                        </div>
                        {/* {signInError} */}
                        <div class="form-control ">
                            <button style={{ backgroundColor: 'black' }} class="btn text-white w-2/3 mx-auto">Register</button>
                        </div>
                    </form>

                    <button style={{ backgroundColor: 'black' }} className="btn text-white  btn-primary mt-4">Continue with google</button>

                </div>

            </div>
        </div>
    );
};

export default Register;