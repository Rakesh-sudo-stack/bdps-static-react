import '../../css/admin-css/change-admin-pass.css';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

const ForgotAdminPass = () => {

    const [emailData, setEmailData] = useState({ email: '' })

    const navigate = useNavigate();

    const forgotPass = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/admin/forgot-pass', emailData);
            if (response.status === 200 && response.data.status === 200) {
                document.querySelector('#alert-msg').style.color = 'green';
                document.querySelector('#alert-msg').innerHTML = 'Check your email';
                setTimeout(() => {
                    navigate('/admin/login');
                }, 1500)
            } else {
                document.querySelector('#alert-msg').style.color = 'red';
                document.querySelector('#alert-msg').innerHTML = 'Invalid Credentials';
                setTimeout(() => {
                    document.querySelector('#alert-msg').innerHTML = '';
                }, 1500)
            }
        } catch (err) {
            document.querySelector('#alert-msg').style.color = 'red';
            document.querySelector('#alert-msg').innerHTML = 'Invalid Credentials';
            setTimeout(() => {
                document.querySelector('#alert-msg').innerHTML = '';
            }, 1500)
        }
    }

    const handleInpChange = (e) => {
        setEmailData(() => {
            return { email: e.target.value }
        }
        )
    }

    return (
        <>
                <div className="change-pass-div">
                    <form method='POST' onSubmit={forgotPass}>
                        <h2>Recover Password</h2>
                        <label htmlFor='email'>Email: </label>
                        <input name='email' type="email" onChange={handleInpChange} required />
                        <button name='forgot-pass'>Submit</button>
                        <div id="alert-msg" style={{ alignSelf: 'center' }}></div>
                    </form>
                </div>
        </>
    )
}

export default ForgotAdminPass;