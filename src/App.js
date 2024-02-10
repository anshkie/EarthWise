import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbr from './component/Navbr';
import SignUp from './component/SignUp';
import Home from './component/Home';
import Login from './component/Login';
import CommunityPage from './component/CommunityPage';
import AddBlock from './component/AddBlock';
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/CommunityPage" element={<CommunityPage/>}/>
          <Route path="/AddBlock" element={<AddBlock/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
