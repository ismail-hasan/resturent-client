import React from 'react';

const SignUp = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body">
                        <fieldset className="fieldset">
                            <div>
                                <label className="fieldset-label">Name</label>
                                <input  type="name" name='name' className="input" placeholder="name here" />
                            </div>
                            <div>
                                <label className="fieldset-label">Email</label>
                                <input  type="email" name='email' className="input" placeholder="Email" />
                            </div>

                            <div>
                                <label className="fieldset-label">Password</label>
                                <input  name='password' type="password" className="input" placeholder="Password" />
                            </div>

                            <button className="btn btn-neutral mt-4">Sign Up</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;