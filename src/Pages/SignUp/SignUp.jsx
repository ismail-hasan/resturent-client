import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import useAxoisPublic from '../../Hook/useAxoisPublic';
import GoolgeLogs from '../../Componetns/GoolgeLogs';

const SignUp = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const axiosPublic = useAxoisPublic();

    const onSubmit = (data) => {
        console.log(data);

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;

                if (data?.name) {
                    updateUser(data.name)
                        .then(() => {
                            const userInfo = {
                                name: data.name,
                                email: data.email
                            };
                            axiosPublic.post("users", userInfo)
                                .then(res => {
                                    if (res.data.insertedId) {
                                        console.log("Profile updated successfully!");
                                        navigate("/");
                                    }
                                });
                        })
                        .catch((error) => {
                            console.log("Error occurred while updating user profile:", error);
                        });
                }
            })
            .catch(err => {
                console.log("Error during sign up:", err);
            });
    };



    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem</p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <fieldset className="fieldset">
                            <div>
                                <label className="fieldset-label">Name</label>
                                <input {...register("name", { required: true })} type="text" name='name' className="input" placeholder="Name here" />
                            </div>
                            {errors.name && <span>This field is required</span>}

                            <div>
                                <label className="fieldset-label">Email</label>
                                <input {...register("email", { required: true })} type="email" name='email' className="input" placeholder="Email" />
                            </div>
                            {errors.email && <span>This field is required</span>}

                            <div>
                                <label className="fieldset-label">Password</label>
                                <input
                                    {...register("password", {
                                        minLength: { value: 6, message: "Minimum six characters required" },
                                        maxLength: { value: 10, message: "Maximum ten characters allowed" },
                                        required: { value: true, message: "Password is required" }
                                    })}
                                    name='password'
                                    type="password"
                                    className="input"
                                    placeholder="Password"
                                />
                            </div>
                            {errors.password && <span className='text-red-600'>{errors.password.message}</span>}

                            <button className="btn btn-neutral mt-4">Sign Up</button>

                            <GoolgeLogs></GoolgeLogs>

                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
