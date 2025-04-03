import React, { useContext, useEffect, useRef } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import GoolgeLogin from '../../Componetns/GoolgeLogs';
import GoolgeLogs from '../../Componetns/GoolgeLogs';

const Login = () => {
    const inputCaptcha = useRef();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const { loginUser, googleLog } = useContext(AuthContext);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const captcha = inputCaptcha.current.value;

        if (validateCaptcha(captcha) === true) {
            console.log({ email, password });
        }

        loginUser(email, password)
            .then(result => {
                console.log(result.user);
                navigate(from);
            })
            .catch(err => console.log(err));
    };


    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem</p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <fieldset className="fieldset">
                            <div>
                                <label className="fieldset-label">Email</label>
                                <input required type="email" name='email' className="input" placeholder="Email" />
                            </div>

                            <div>
                                <label className="fieldset-label">Password</label>
                                <input required name='password' type="password" className="input" placeholder="Password" />
                            </div>

                            <div>
                                <LoadCanvasTemplate />
                                <input ref={inputCaptcha} name='captcha' type="text" className="input mt-2" placeholder="Type Captcha" />
                            </div>

                            <button className="btn btn-neutral mt-4">Login</button>

                            <GoolgeLogs></GoolgeLogs>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
