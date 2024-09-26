import '../../css/admin-css/change-admin-pass.css';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

const ChangeAdminPass = () => {

    const [isAuth, setAuth] = useState(false);
    const [passData, setPassData] = useState({
        email: '',
        oldpass:'',
        newpass: ''
    })

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('/admin/auth');
                if (response.status === 200 && response.data.status === 200) {
                    setAuth(true)
                    const response = await axios.post('/admin/jwt/decode');
                    if (response.status === 200 && response.data.status === 200) {
                        setPassData(preval=>{
                            return{
                                ...preval,
                                email:response.data.body.email
                            }
                        });
                    }
                } else {
                    navigate('/admin/login');
                }
            } catch (err) {
                navigate('/admin/login');
            }
        };

        fetchData();
    }, []);

    const validatePass = () => {
        const newPassVal = document.getElementsByName('newpass')[0].value;
        if(newPassVal.length < 10 || newPassVal.length > 25){
            return {status:false, msg:'Password must be of 10-25 characters'}
        }else{
            return {status:true}
        }
    }

    const changePass = async (e) => {
        e.preventDefault();
        let isValid = validatePass();
        console.log(isValid)
        if(!isValid.status){
            document.querySelector('#alert-msg').style.color = 'red';
            document.querySelector('#alert-msg').innerHTML = isValid.msg;
            return;
        }
        document.querySelector('#alert-msg').style.color = 'green';
        document.querySelector('#alert-msg').innerHTML = 'Please Wait';
        try {
            const response = await axios.post('/admin/change-pass',passData);
            if (response.status === 200 && response.data.status === 200) {
                document.querySelector('#alert-msg').style.color = 'green';
                document.querySelector('#alert-msg').innerHTML = 'Password Changed';
                setTimeout(()=>{
                    navigate('/admin');
                },1500)
            } else {
                document.querySelector('#alert-msg').style.color = 'red';
                document.querySelector('#alert-msg').innerHTML = 'Invalid Credentials';
                setTimeout(()=>{
                    document.querySelector('#alert-msg').innerHTML = '';
                },1500)
            }
        } catch (err) {
            document.querySelector('#alert-msg').style.color = 'red';
            document.querySelector('#alert-msg').innerHTML = 'Invalid Credentials';
            setTimeout(()=>{
                document.querySelector('#alert-msg').innerHTML = '';
            },1500)
        }
    }

    const handleInpChange = (e) => {
        if(e.target.value[e.target.value.length-1] == ' '){
            e.target.value = e.target.value.slice(0,e.target.value.length-1)
            return;
        }
        setPassData(preval=>{
            return{
                ...preval,
                [e.target.name]:e.target.value
            }
        })
    }

    function forgotPass(){
        navigate('/admin/forgotpass')
    }

    return (
        <>
            {isAuth ?
                <div className="change-pass-div">
                    <form method='POST' onSubmit={changePass}>
                        <h2>Change Password</h2>
                        <label htmlFor='oldpass'>Old password: </label>
                        <input name='oldpass' type="password" onChange={handleInpChange} required />
                        <label htmlFor='newpass'>New password: </label>
                        <input type="password" name="newpass" onChange={handleInpChange} required />
                        <button name='change-pass'>Submit</button>
                        
                        <div style={{color:'blue',cursor:'pointer'}} onClick={forgotPass}>Forgot Password?</div>

                        <div id="alert-msg" style={{alignSelf:'center'}}></div>
                    </form>
                </div>
                : ''}
        </>
    )
}

export default ChangeAdminPass;