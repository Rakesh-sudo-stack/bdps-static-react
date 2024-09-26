import { useState, useEffect } from 'react';
import '../../css/admin-css/dashboard.css';
import axios from 'axios';
import { Link, useNavigate,useOutletContext } from 'react-router-dom';
const Dashboard = () => {

    const navigate = useNavigate();

    const userData = useOutletContext()[2];

    const [admins, setAdmins] = useState([]);
    const [changeName, setNewName] = useState('');
    const [newAdmin, setNewAdmin] = useState({
        name: '',
        email: '',
        permission: 'read',
        post: 'user',
    });

    useEffect(() => {
        document.querySelector('.menu-element.anchor-active').classList.remove('anchor-active');
        document.querySelector('div[name="dashboard-element"]').classList.add('anchor-active');
        document.querySelector('aside').classList.remove('active');

        fetchAllAdmins();
    }, [])

    const fetchAllAdmins = async () => {
        try {
            const response = await axios.get('/admin');
            if (response.status === 200 && response.data.status === 200) {
                setAdmins(response.data.body)
            } else {
                console.log('error')
            }
        } catch (err) {
            console.log('error')
        }
    }

    const displayAddAdminPortal = () => {
        document.querySelector('.add-admin-portal').style.display = 'flex';
    }

    const handleNewAdminInpChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setNewAdmin(preval => {
            return {
                ...preval,
                [name]: value
            }
        })
    }

    const addAdmin = async (e) => {
        e.preventDefault();

        document.querySelector('#add-new-admin-btn').style.background = 'grey';
        document.querySelector('#add-new-admin-btn').setAttribute('disabled', true);

        document.querySelector('#add-admin-text-msg').style.color = 'red';
        document.querySelector('#add-admin-text-msg').innerHTML = 'Please wait. Don\'t Leave!';

        try {
            const response = await axios.post('/admin', newAdmin)

            if (response.status === 200 && response.data.status === 200) {
                document.querySelector('#add-admin-text-msg').style.color = 'green';
                document.querySelector('#add-admin-text-msg').innerHTML = response.data.msg;

                setTimeout(() => {
                    document.querySelector('#add-admin-text-msg').innerHTML = '';
                    navigate(0)
                }, 2000)

                document.querySelector('#add-new-admin-btn').style.background = 'yellow';
                document.querySelector('#add-new-admin-btn').removeAttribute('disabled');
            }
        } catch (err) {
            console.log(err)
            document.querySelector('#add-admin-text-msg').style.color = 'red';
            document.querySelector('#add-admin-text-msg').innerHTML = err.response.data.msg;

            setTimeout(() => {
                document.querySelector('#add-admin-text-msg').innerHTML = '';
            }, 2000)

            document.querySelector('#add-new-admin-btn').style.background = 'yellow';
            document.querySelector('#add-new-admin-btn').removeAttribute('disabled');
        }
    }

    const displayChangeNamePortal = () => {
        document.querySelector('.change-name-portal').style.display = 'flex';
    }

    const changeAdminName = async (e) => {
        e.preventDefault()
        try{
            const response = await axios.post('/admin/change-name',{name:changeName});
            if (response.status === 200 && response.data.status === 200) {
                document.querySelector('#change-name-text-msg').style.color = 'green';
                document.querySelector('#change-name-text-msg').innerHTML = response.data.msg;
                fetchAllAdmins();
    
                setTimeout(() => {
                    document.querySelector('#change-name-text-msg').innerHTML = '';
                }, 2000)
            }
        }catch(err){
            document.querySelector('#change-name-text-msg').style.color = 'red';
            document.querySelector('#change-name-text-msg').innerHTML = err.response.data.msg;

            setTimeout(() => {
                document.querySelector('#change-name-text-msg').innerHTML = '';
            }, 2000)
        }
    }

    const deleteAdmin = async(email) => {
        document.querySelector('#admin-table-msg-box').style.color = 'green';
        document.querySelector('#admin-table-msg-box').innerHTML = 'Please wait';
        try{
            let response = await axios.delete(`/admin/${email}`);
            if (response.status === 200 && response.data.status === 200) {
                document.querySelector('#admin-table-msg-box').style.color = 'green';
                document.querySelector('#admin-table-msg-box').innerHTML = response.data.msg;
                fetchAllAdmins()
                setTimeout(()=>{
                    document.querySelector('#admin-table-msg-box').innerHTML = '';
                },2000)
            }
        }catch(err){
            document.querySelector('#admin-table-msg-box').style.color = 'red';
            document.querySelector('#admin-table-msg-box').innerHTML = err.response.data.msg;
            setTimeout(()=>{
                document.querySelector('#admin-table-msg-box').innerHTML = '';
            },2000)
        }
    }

    return (
        <div className="dashboard">
            <div className="admins">
                <h2>Manage Admins</h2>
                <div className="table-container">
                    <table className='admins-table'>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Permissions</td>
                                <td>Post</td>
                                {
                                    userData.post === 'admin' ? (
                                        <td colSpan={2}>
                                          Options
                                        </td>
                                      ) : ''
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {admins.map(element => {
                                return (
                                    <tr key={Math.floor(Math.random() * 613131231313321)}>
                                        <td>{element.name}</td>
                                        <td>{element.email}</td>
                                        <td>{element.permission}</td>
                                        <td>{element.post}</td>
                                        {
                                            userData.post === 'admin' ? (
                                                <>
                                                    <td><Link to={`/admin/edit-admin/${element.email}`} title='edit'><i className="fa-solid fa-pen-to-square"></i></Link></td>
                                                    <td><span style={{cursor:'pointer'}} title='remove' onClick={()=>deleteAdmin(element.email)}><i className="fa-solid fa-trash"></i></span></td>
                                                </>
                                            ) : ''
                                        }
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
                    <div id="admin-table-msg-box" style={{marginTop:'1rem'}}></div>
            </div>
            <button id="change-yr-name" onClick={displayChangeNamePortal}>Change your name</button>
            <br />
            <div className="change-name-portal">
                <form method="POST" onSubmit={changeAdminName}>
                    <h3>Change Name</h3>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name='name' required onChange={(e)=>{setNewName(e.target.value)}} />
                    <button id='add-new-admin-btn' name="change-name">Update</button>
                    <div id="change-name-text-msg" style={{ marginTop: '1rem', alignSelf: 'center' }}></div>
                </form>
            </div>
            <Link to="/admin/change-pass"><button id="change-admin-pass">Change your password</button>
            <br /></Link>
            <button id="add-admin-btn" onClick={displayAddAdminPortal}>Add Admin</button>
            <div className="add-admin-portal">
                <form method="POST" onSubmit={addAdmin}>
                    <h3>Add Admin</h3>
                    <input type="hidden" name="permission" value='read' onChange={handleNewAdminInpChange} />
                    <label htmlFor="name">Name: </label>
                    <input type="text" name='name' required onChange={handleNewAdminInpChange} />
                    <label htmlFor="email">Email: </label>
                    <input type="email" name='email' required onChange={handleNewAdminInpChange} />
                    <label htmlFor="permission">Permission: </label>
                    <select name="permission" onChange={handleNewAdminInpChange} required>
                        <option value="read">Read Only</option>
                        <option value="write">Read & Write</option>
                    </select>
                    <button id='add-new-admin-btn' name="add-admin">Add</button>
                    <div id="add-admin-text-msg" style={{ marginTop: '1rem', alignSelf: 'center' }}></div>
                </form>
            </div>
        </div>
    )
}

export default Dashboard;