import { Helmet } from "react-helmet-async";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "./AuthProvider";
import { useContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Register = () => {
    const {createUser, updateInfo, user, logOutUser} = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const {name, email, password, photoURL} = data;
        const extraInfo = {
            displayName: name,
            photoURL: photoURL
        };
        createUser(email, password)
            .then(result => {
                updateInfo(extraInfo)
            })
            .then(res => {
                toast('Registration successful');
                logOutUser();
                setTimeout(() => {
                    navigate('/login', {state: {from: '/register', to: location.state ? location.state : null}});
                }, 2500);
            })
            .catch(error => console.error(error));
    };
    return (
        <div className="hero min-h-screen bg-base-200 rounded-2xl">
            <Helmet>
                <title>Urbanity | Register</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register to create new account</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)} noValidate>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Enter your name" className="input input-bordered" {...register("name", { 
                                required: 'Name is required',
                                pattern: {
                                    value: /^[a-zA-Z\s]+$/,
                                    message: "Name can't contain digits or special characters"
                                } })} />
                            <p className="text-red-500 mt-2">{errors.name?.message}</p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Enter your email" className="input input-bordered" {...register("email", { 
                                required: 'Email is required',
                                pattern: {
                                    value: /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,}$/,
                                    message: 'Please enter a valid email address'
                                } })} />
                            <p className="text-red-500 mt-2">{errors.email?.message}</p>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" placeholder="Enter your photo url" className="input input-bordered" {...register("photoURL", { required: 'Photo URL is required' })} />
                            <p className="text-red-500 mt-2">{errors.photoURL?.message}</p>
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword ? 'text' : 'password'} placeholder="Enter password" className="input input-bordered" {...register("password", {
                                required: 'Password is required', 
                                pattern: {
                                    value: /(?=.*[a-z])(?=.*[A-Z]).{6,}/,
                                    message: 'Password must include 1 uppercase and 1 lowercase letter and be 6+ characters long',
                                }
                            })} />
                            {
                                showPassword ? 
                                <FaRegEyeSlash onClick={() => setShowPassword(!showPassword)} className="absolute right-4 bottom-6 cursor-pointer text-lg" />
                                :
                                <FaRegEye onClick={() => setShowPassword(!showPassword)} className="absolute right-4 bottom-6 cursor-pointer text-lg" />
                            }
                            <p className="text-red-500 mt-2">{errors.password?.message}</p>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-slate-800 text-white" disabled={user}>Register</button>
                        </div>
                        <p className="text-center">
                            <Link to='/login' className="label-text-alt link link-hover">Already have an account?</Link>
                        </p>
                    </form>
                </div>
            </div>
            <ToastContainer autoClose={2500}/>
        </div>
    );
};

export default Register;