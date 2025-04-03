import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import useAxoisPublic from '../Hook/useAxoisPublic';

const GoolgeLogs = () => {
    const { googleLog } = useContext(AuthContext);
    const navigate = useNavigate()
    const axiosPublic = useAxoisPublic()

    const handleGoogleLogin = () => {
        googleLog()
            .then(result => {

                const userInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email
                }

                axiosPublic.post('users', userInfo)
                    .then(res => {
                        console.log(res.data)
                    })

                console.log(result.user);
                navigate("/");
            })
            .catch(err => console.log(err));
        console.log("sdf")
    };

    return (
        <div>
            <div className="divider">OR</div>
            <button
                type="button"
                onClick={handleGoogleLogin}
                className="btn btn-outline flex items-center justify-center gap-2">
                <FcGoogle size={20} /> Continue with Google
            </button>
        </div>
    );
};

export default GoolgeLogs;