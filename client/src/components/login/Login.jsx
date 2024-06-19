import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', data);
            console.log(response.data);

            // Store the token in local storage or a state management library
            localStorage.setItem('token', response.data.token);

            // Navigate to the dashboard
            navigate('/dashboard');
        } catch (error) {
            console.error('Error during login:', error.response.data);
            // Handle error (e.g., show an error message to the user)
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div className="card shadow p-4" style={{ width: '400px' }}>
                <h3 className="card-title text-center">Login</h3>
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
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            {...register("password", { required: "Password is required" })}
                        />
                        {errors.password && <span className="text-danger">{errors.password.message}</span>}
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Login</button>
                </form>
                <div className="text-center mt-3">
                    <p>Don't have an account? <Link to="/register">Register</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Login;
