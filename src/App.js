import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbr from './component/Navbr';
import SignUp from './component/SignUp';
import Home from './component/Home';
import Login from './component/Login';
import CommunityPage from './component/CommunityPage';
import AddBlock from './component/AddBlock';
import Feed from './component/Feed';
import FeedbackPage from './component/FeedbackPage';
import PrivateCom from './component/PrivateCom';
import Profile from './component/Profile';
import Sms from './component/Sms';

function App() {
  return (
    <div>
    <BrowserRouter>
      
        <Navbr />
        <Routes>
         
        <Route element={<PrivateCom/>}>
       
         
          <Route path="/FeedbackPage" element={<FeedbackPage/>}/>
          <Route path="/Profile" element={<Profile />} />
          
          </Route>
          <Route path="/CommunityPage" element={<CommunityPage/>}/>
          <Route path="/AddBlock" element={<AddBlock/>}/>
          <Route path="/" element={<Home />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Sms" element={<Sms />} />
        </Routes>
      
    </BrowserRouter>
    </div>
  );
}

export default App;
