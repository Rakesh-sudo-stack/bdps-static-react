import AdminNav from "./AdminNav";
import SideBar from "./SideBar";
import '../../css/admin-css/admin.css';
import { Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import LoadingBar from 'react-top-loading-bar';

const Admin = () => {

    const navigate = useNavigate();

    const [progress, setProgress] = useState(0);
    const [isAuth, setAuth] = useState(false);
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.post('/admin/auth');
            if (response.status === 200 && response.data.status === 200) {
              setAuth(true)
              const response = await axios.post('/admin/jwt/decode');
              if (response.status === 200 && response.data.status === 200) {
                const data = await axios.get(`/admin/email/${response.data.body.email}`);
                setUserData(data.data.body[0]);
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
    return (
        <>
            {isAuth ?
                <>
                    <LoadingBar
                        color='#38a6eb'
                        height={4}
                        progress={progress}
                        onLoaderFinished={() => setProgress(0)}
                        transitionTime={0}
                    />
                    <div className="admin-page">
                        <SideBar userData={userData} progress={progress} setProgress={setProgress} />
                        <div className="admin-container">
                            <AdminNav progress={progress} setProgress={setProgress} />
                            <main>
                                <Outlet context={[progress, setProgress, userData]} />
                            </main>
                        </div>
                    </div>
                </>
                : ''}
        </>

    )
}

export default Admin;