import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SideBar = (props) => {

    const navigate = useNavigate();

    const hideMenu = () => {
        document.querySelector('aside').classList.remove('active');
    }
    const logOut = () => {
        try{
            const response = axios.post('/admin/logout');
            navigate('/admin/login')
        }catch(err){
            // do nothing
        }
    }
    return (
        <aside>
            <div className="close-btn" onClick={hideMenu}>
                <i className='fa-solid fa-xmark'></i>
            </div>
            <NavLink to='/admin' className="panel-name">Admin Panel</NavLink>
            <div className="user">
                <i className="fa fa-user"></i>
                <div onClick={logOut} className='admin-user-name' title='Logout'>{props.userData.name}</div>
            </div>
            <div className="modifications">

                <NavLink style={{textDecoration: 'none'}} to='/admin' onClick={
                    () => {
                        props.setProgress(15);
                        setTimeout(() => { props.setProgress(75) }, 200)
                        setTimeout(() => { props.setProgress(100) }, 500)
                    }
                }><div className='menu-element solo anchor-active' name='dashboard-element'>Dashboard</div></NavLink>

                <NavLink style={{textDecoration: 'none'}} to='/admin/image-slider' onClick={
                    () => {
                        props.setProgress(15);
                        setTimeout(() => { props.setProgress(75) }, 200)
                        setTimeout(() => { props.setProgress(100) }, 500)
                    }
                }><div className='menu-element solo' name='slider-element'>Image Slider</div></NavLink>

                <NavLink style={{textDecoration: 'none'}} to='/admin/announcements' onClick={
                    () => {
                        props.setProgress(15);
                        setTimeout(() => { props.setProgress(75) }, 200)
                        setTimeout(() => { props.setProgress(100) }, 500)
                    }
                }><div className='menu-element solo' name='announcements-element'>Announcements</div></NavLink>

                <NavLink style={{textDecoration: 'none'}} to='/admin/notice-board' onClick={
                    () => {
                        props.setProgress(15);
                        setTimeout(() => { props.setProgress(75) }, 200)
                        setTimeout(() => { props.setProgress(100) }, 500)
                    }
                }><div className='menu-element solo' name='notice-board-element'>Notice Board</div></NavLink>
            </div>
        </aside>
    )
}

export default SideBar;