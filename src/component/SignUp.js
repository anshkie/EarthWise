import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link for navigation
import Frame2 from '../images/Frame2.png';

export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem("auth");
        if (auth) {
            navigate("/");
        }
    }, [navigate]);

    const collectData = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        
        console.warn(name, email, password);
        let result = await fetch('http://localhost:9100/register', {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        result = await result.json();
        console.log(result);
        if (result) {
            navigate('/Login');
        }
        localStorage.setItem("user", JSON.stringify(result));
    };

    return (
        <div className="flex justify-center items-center  h-screen">
            <div className="w-1/2 flex justify-center items-center">
                <img src={Frame2} alt="Frame2" className="w-full max-h-full" />
            </div>
            <div className="w-1/2 bg-white p-10">
                <h1 className="text-2xl mb-4">Get Started Right Now</h1>
                <form className="mb-4" onSubmit={collectData}>
                    <div className="mb-4">
                        <label className="block mb-2">Name</label>
                        <input type="text" className="block w-full border border-gray-300 rounded-md p-2 " value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Email Address</label>
                        <input type="email" className="block w-full border border-gray-300 rounded-md p-2" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Password</label>
                        <input type="password" className="block w-full border border-gray-300 rounded-md p-2" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-300">Sign Up</button>
                </form>
                <p className="mb-4">Or</p>
                <p className="mb-4">Already have an account? <Link to="/login" className="text-green-500 hover:underline">Sign In</Link></p>
            </div>
        </div>
    );
}
