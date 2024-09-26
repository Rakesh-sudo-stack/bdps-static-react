import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from './components/App';
import ErrorPage from './components/pages/ErrorPage';
import Homepage from './components/pages/Homepage';
import Aims from './components/pages/Aims';
import Constitution from './components/pages/Constitution';
import DirectorMsgPage from './components/pages/DirectorMsg';
import AdviceToParentsPage from './components/pages/AdviceToParents';
import Admin from './components/admin-pages/Admin';
import Dashboard from './components/admin-pages/Dashboard';
import ImageSliderPage from './components/admin-pages/ImageSliderPage';
import AnnouncementsEdit from './components/admin-pages/AnnouncementsEdit';
import NoticeBoardEdit from './components/admin-pages/NoticeBoardEdit';
import * as Images from './components/image-bundles/Images'
import Downloads, {DownloadsPage, PdfPage, ImagesPage, HeroesSectionPage, ImagePages} from './components/download-bundles/Downloads';
import AdminLogin from './components/admin-pages/Login';
import ChangeAdminPass from './components/admin-pages/ChangeAdminPass';
import ForgotAdminPass from './components/admin-pages/ForgotAdminPass';
import EditAdminPage from './components/admin-pages/EditAdmin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/aims" element={<Aims />} />
          <Route path="/constitution" element={<Constitution />} />
          <Route path="/director-msg" element={<DirectorMsgPage />} />
          <Route path="/advice-to-parents" element={<AdviceToParentsPage />} />
          <Route path="/downloads" element={<Downloads />}>
            <Route path="/downloads" element={<DownloadsPage />} />
            <Route path="/downloads/pdf" element={<PdfPage />} />
            <Route path="/downloads/images" element={<ImagesPage />} />
            <Route path="/downloads/images/heroes-section" element={<HeroesSectionPage />} />
            <Route path="/downloads/images/pages" element={<ImagePages />} />
          </Route>
        </Route>
        <Route path="/admin" element={<Admin />}>
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/image-slider" element={<ImageSliderPage />} />
          <Route path="/admin/announcements" element={<AnnouncementsEdit />} />
          <Route path="/admin/notice-board" element={<NoticeBoardEdit />} />
        </Route>

        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/change-pass" element={<ChangeAdminPass />} />
        <Route path="/admin/forgotpass" element={<ForgotAdminPass />} />
        <Route path="/admin/edit-admin/:email" element={<EditAdminPage />} />
        
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  </>
);