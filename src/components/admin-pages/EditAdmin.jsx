import { useEffect, useState } from 'react';
import '../../css/admin-css/edit-admin.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditAdmin = () => {

    const navigate = useNavigate();

    const { email } = useParams();
    const [isAuth, setAuth] = useState(false);
    const [userData, setUserData] = useState({});
    const [editedAdminInfo, updateEditedAdmin] = useState({
        post: '',
        permission: ''
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('/admin/auth');
                if (response.status === 200 && response.data.status === 200) {
                    setAuth(true)
                    const response = await axios.post('/admin/jwt/decode');
                    if (response.status === 200 && response.data.status === 200) {
                        const data = await axios.get(`/admin/email/${email}`);
                        setUserData(data.data.body[0]);
                        updateEditedAdmin({ post: data.data.body[0].post, permission: data.data.body[0].permission })
                    }
                } else {
                    navigate('/admin/login');
                }
            } catch (err) {
                navigate('/admin/login');
            }
        };

        fetchData();
    }, [])

    const editAdminDataChange = (e) => {
        updateEditedAdmin(preval => {
            return { ...preval, [e.target.name]: e.target.value }
        })
    }

    const updateAdmin = async (e) => {
        e.preventDefault();
        document.querySelector('#edit-admin-text-box').style.color = 'green';
        document.querySelector('#edit-admin-text-box').innerHTML = 'Please wait...';
        try {
            const response = await axios.patch(`/admin/${userData.email}`, {
                post: editedAdminInfo.post,
                permission: editedAdminInfo.permission
            });
            if (response.status === 200 && response.data.status === 200) {
                console.log('done', response.data)
                document.querySelector('#edit-admin-text-box').style.color = 'green';
                document.querySelector('#edit-admin-text-box').innerHTML = 'Updated';
                setTimeout(() => {
                    navigate('/admin')
                }, 2000)
            } else {
                console.log('some error')
                document.querySelector('#edit-admin-text-box').style.color = 'red';
                document.querySelector('#edit-admin-text-box').innerHTML = 'Some error Occured';
                setTimeout(() => {
                    document.querySelector('#edit-admin-text-box').innerHTML = '';
                }, 2000)
            }
        } catch (err) {
            document.querySelector('#edit-admin-text-box').style.color = 'red';
            document.querySelector('#edit-admin-text-box').innerHTML = err.response.data.msg;
            setTimeout(() => {
                document.querySelector('#edit-admin-text-box').innerHTML = '';
            }, 2000)
        }
    }
    return (
        <>
            {isAuth ?
                <div className="edit-admin-page">
                    <form action="" method='POST' onSubmit={updateAdmin}>
                        <h2>Edit Admin</h2>

                        <label htmlFor='name'>Name: </label>
                        <input name='name' disabled type="text" defaultValue={userData.name} />

                        <label htmlFor='email'>Email: </label>
                        <input name='email' defaultValue={userData.email} type="email" disabled={true} />

                        <label htmlFor='permission'>Permission: </label>
                        <select name="permission" onChange={editAdminDataChange}>
                            <option value="read">Read Only</option>
                            <option value="write" selected={userData['permission'] === 'write' ? true : false}
                            >Read & Write</option>
                        </select>

                        <label htmlFor='post'>Post: </label>
                        <select name="post" onChange={editAdminDataChange}>
                            <option value="user">User</option>
                            <option value="admin" selected={userData['post'] === 'admin' ? true : false}>
                                Admin</option>
                        </select>

                        <button name='update-admin'>Update</button>

                        <div id="edit-admin-text-box" style={{ alignSelf: 'center' }}></div>
                    </form>
                </div >
                : ''}
        </>
    )
}

export default EditAdmin;