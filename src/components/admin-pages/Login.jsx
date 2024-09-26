import '../../css/admin-css/login.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('/admin/auth');
                if (response.status === 200 && response.data.status === 200) {
                    navigate('/admin');
                }
            } catch (err) {
                //do nothing
            }
        };

        fetchData();
    }, []);
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: '',
        password: ''
    })
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setData(preval => {
            return {
                ...preval,
                [name]: value
            }
        })
    }
    const login = async (e) => {
        e.preventDefault();
        document.querySelector('#login-btn').setAttribute('disabled', true);
        document.querySelector('.msg-box').innerHTML = 'Please wait';
        try {
            const response = await axios.post('/admin/login', {
                email: data.email,
                password: data.password
            });
            if (response.status === 200 && response.data.status === 200) {
                document.querySelector('.msg-box').style.color = 'green';
                document.querySelector('.msg-box').innerHTML = 'Logged in';
                setTimeout(() => {
                    document.querySelector('.msg-box').innerHTML = '';
                    navigate('/admin');
                }, 1000)
            } else {
                document.querySelector('.msg-box').style.color = 'red';
                document.querySelector('.msg-box').innerHTML = 'Invalid credentials';
                document.querySelector('#login-btn').removeAttribute('disabled');
                setTimeout(() => {
                    document.querySelector('.msg-box').innerHTML = '';
                }, 2000)
            }
        } catch (err) {
            document.querySelector('.msg-box').style.color = 'red';
            document.querySelector('.msg-box').innerHTML = 'Invalid credentials';
            document.querySelector('#login-btn').removeAttribute('disabled');
            setTimeout(() => {
                document.querySelector('.msg-box').innerHTML = '';
            }, 2000)
        }
    }
    function forgotPass(){
        navigate('/admin/forgotpass/')
    }
    return (
        <div className='admin-login-page'>
            <form method='POST' onSubmit={login}>
                <h2>Login</h2>
                <label htmlFor='email'>Email: </label>
                <input name='email' type="email" onChange={handleChange} required />
                <label htmlFor='password'>Password: </label>
                <input type="password" name="password" onChange={handleChange} required />
                <button id='login-btn' name='login-admin'>Login</button>
                <div className="msg-box" style={{ color: 'red' }}></div>

                <div style={{ color: 'blue', cursor: 'pointer' }} onClick={forgotPass}>Forgot Password?</div>
            </form>
        </div>
    )
}

export default Login;