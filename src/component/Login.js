import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link for navigation
import Frame2 from '../images/Frame2.png';

export default function Login() {
    const [email,setEmail]=useState("");
    
    const [password,setPassword]=useState("")
    useEffect(()=>{
      const auth=localStorage.getItem("auth");
      if(auth)
      {
        navigate("/")
      }
    })
  
  const navigate=useNavigate()
  const collectInfo= async(event)=> {
    event.preventDefault(); // Prevent default form submission behavior

      console.log(email,password)
      let result = await fetch("http://localhost:9100/login",{
      method:'post',
      body: JSON.stringify({email,password}),
    headers:{
      'Content-Type':'application/json'
    },
  }
      )
      result=await result.json()
      console.log(result)
      if(result.name )
      {
          localStorage.setItem("user",JSON.stringify(result));
          navigate('/')
      }
      else
      {
          alert("plz enter correct details")
      }
     
  }
  return (
    <div className="flex justify-center items-center  h-screen">
      <div className="w-1/2 flex justify-center items-center">
        <img src={Frame2} alt="Frame2" className="w-full max-h-full" />
      </div>
      <div className="w-1/2 bg-white p-10">
        <h1 className="text-2xl mb-4">Get Started Right Now</h1>
        <form className="mb-4">
          <div className="mb-4">
            <label className="block mb-2">Email</label>
            <input type="text" className="block w-full border border-gray-300 rounded-md p-2 " value={email} onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Password</label>
            <input type="password" className="block w-full border border-gray-300 rounded-md p-2" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-300" onClick={collectInfo}>Login</button>
        </form>
        
      </div>
    </div>
  );
}
