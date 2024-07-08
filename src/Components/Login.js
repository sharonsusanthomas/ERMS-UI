import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

function Login() {
    const [values, setValues] = useState({ username: "", password: "" });
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setValues({ username: "", password: "" });
    }, []);

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');
        setLoading(true);

        try {
            const response = await axios.post('http://localhost:5000/login', values, { withCredentials: true });
            const data = response.data;

            if (response.status === 200) {
                localStorage.setItem('userName', values.username);
                setValues({ username: "", password: "" });

                switch (data.role) {
                    case 'Admin':
                        navigate('/home');
                        break;
                    case 'HoD':
                        navigate('/hod-home');
                        break;
                    case 'Staff':
                        navigate('/staff-home');
                        break;
                    default:
                        setError('Unauthorized role');
                }
            } else {
                setError(data.message || 'An error occurred. Please try again.');
            }
        } catch (err) {
            console.error("Error:", err);
            setError(err.response?.data?.message || 'An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='login-container'>
            <div className='login-form'>
                <form onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    {error && <p className="error-message">{error}</p>}
                    <div className='form-group'>
                        <label htmlFor='username'><strong>Username</strong></label>
                        <input
                            type='text'
                            placeholder='Enter Username'
                            name='username'
                            value={values.username}
                            onChange={handleInput}
                            className='form-control'
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input
                            type='password'
                            placeholder='Enter Password'
                            name='password'
                            value={values.password}
                            onChange={handleInput}
                            className='form-control'
                            required
                        />
                    </div>
                    <button type='submit' className='btn btn-success' disabled={loading}>
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
