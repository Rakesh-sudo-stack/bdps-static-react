import '../css/global.css';
import '../css/style.css';
import '../css/page.css';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from "react-router-dom";
import React, { useState } from 'react';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const [progress, setProgress] = useState(0);
  return (
    <>
    
      <Navbar progress={progress} setProgress={setProgress} />
      <LoadingBar
        color='#fa02d5'
        height={4}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        transitionTime={0}
      />
      <Header progress={progress} setProgress={setProgress} />
      <Outlet context={[progress, setProgress]} />
      <Footer progress={progress} setProgress={setProgress} />
    </>
  )
}

export default App;