import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Registration() {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const password = watch("password", "");


        const onSubmit = async (data) => {
            try {
                const response = await axios.post('http://localhost:5000/api/auth/register', data);
                console.log(response.data);
                navigate('/login');
            } catch (error) {
                console.error('Error during registration:', error.response.data);
            }
        };
        
  
    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div className="card shadow p-4" style={{ width: '400px' }}>
                <h3 className="card-title text-center">Register</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            {...register("username", { required: "Username is required" , minLength: {
                                value: 8,
                                message: "Username must be at least 8 characters"
                            }})}
                        />
                        {errors.username && <span className="text-danger">{errors.username.message}</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            {...register("email", { 
                                required: "Email is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                    message: "Enter a valid email address"
                                }
                            })}
                        />
                        {errors.email && <span className="text-danger">{errors.email.message}</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            {...register("password", { 
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters"
                                }
                            })}
                        />
                        {errors.password && <span className="text-danger">{errors.password.message}</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="confirmPassword"
                            {...register("confirmPassword", { 
                                required: "Confirm password is required",
                                validate: value => value === password || "Passwords do not match"
                            })}
                        />
                        {errors.confirmPassword && <span className="text-danger">{errors.confirmPassword.message}</span>}
                    </div>
                <button type="submit" className="btn btn-primary w-100">Register</button>
                </form>
                <div className="text-center mt-3">
                    <p>Already registered? <Link to="/login">Log in</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Registration;
