import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import swal from 'sweetalert';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const location = useLocation();
    const navigate = useNavigate();
    const { signInWithGoogle, signInWithGithub, signInUser, setLoading, user } = useContext(AuthContext);
    const onSubmit = (data) => {
        const { email, password } = data;
        signInUser(email, password)
            .then(result => {
                swal("Logged In successfully!", {
                    icon: "success",
                });
                if (location?.state?.to) {
                    navigate(location.state.to);
                } else {
                    navigate('/');
                }
            })
            .catch(error => {
                setLoading(false);
                console.error(error);
                swal("Log In Failed!", {
                    icon: "warning",
                });
            });
    };
    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            swal("Logged In successfully!", {
                icon: "success",
            });
            if (location?.state?.to) {
                navigate(location.state.to);
            } else {
                navigate('/');
            }
        })
        .catch(error => {
            setLoading(false);
            console.error(error);
            swal("Log In Failed!", {
                icon: "warning",
            });
        })
    };
    const handleGithubSignIn = () => {
        signInWithGithub()
        .then(result => {
            swal("Logged In successfully!", {
                icon: "success",
            });
            if (location?.state?.to) {
                navigate(location.state.to);
            } else {
                navigate('/');
            }
        })
        .catch(error => {
            setLoading(false);
            console.error(error);
            swal("Log In Failed!", {
                icon: "warning",
            });
        })
    };
    return (
        <div className="hero min-h-screen bg-base-200 dark:bg-gray-800 rounded-2xl">
            <Helmet>
                <title>Artifex | Log In</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold dark:text-white">Login here to get all access!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 dark:bg-gray-800">
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)} noValidate>
                        {
                            location.state?.from === '/register' &&
                            <h2 className="text-center text-lg font-semibold text-green-400">You are registered. Now please log in</h2>
                        }
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text dark:text-white">Email</span>
                            </label>
                            <input type="email" placeholder="Enter your email" className="input input-bordered dark:text-white dark:bg-gray-700" {...register("email", { 
                                required: 'Email is required',
                                pattern: {
                                    value: /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,}$/,
                                    message: 'Please enter a valid email address'
                                } })} />
                            <p className="text-red-500 mt-2">{errors.email?.message}</p>
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text dark:text-white">Password</span>
                            </label>
                            <input type={showPassword ? 'text' : 'password'} placeholder="Enter password" className="input input-bordered dark:text-white dark:bg-gray-700" {...register("password", {
                                required: 'Password is required', 
                            })} />
                            {
                                showPassword ? 
                                <FaRegEyeSlash onClick={() => setShowPassword(!showPassword)} className="absolute right-4 bottom-6 cursor-pointer text-lg dark:text-white" />
                                :
                                <FaRegEye onClick={() => setShowPassword(!showPassword)} className="absolute right-4 bottom-6 cursor-pointer text-lg dark:text-white" />
                            }
                            <p className="text-red-500 mt-2">{errors.password?.message}</p>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-slate-800 text-white" disabled={user}>Log in</button>
                        </div>                        
                    </form>
                    <button onClick={handleGoogleSignIn} className="btn mx-8 -mt-6 mb-2" disabled={user}><FaGoogle />Log in with Google</button>
                    <button onClick={handleGithubSignIn} className="btn mx-8 mb-3" disabled={user}><FaGithub />Log in with GitHub</button>
                    <p className="text-center mb-8">
                        <Link to='/register' state={location.state?.to} className="label-text-alt link link-hover dark:text-white">Don&apos;t have an account? Register now</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;