import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbr() {
  return (
    <div className="fixed top-0 right-0 z-50">
      <nav className="border-gray-400 px-2 mb-10">
        <div className="flex items-center justify-between">
          <ul className="flex">
            <li className="px-4 py-2 rounded-lg transition-all duration-300">
              <Link to="/contact" className="text-white font-bold">Contact</Link>
            </li>
            <li className="px-4 py-2 rounded-lg transition-all duration-300">
              <Link to="/CommunityPage" className="text-white font-bold">Community</Link>
            </li>
            <li className="px-4 py-2 rounded-lg transition-all duration-300">
              <Link to="/" className="text-white font-bold">Home</Link>
            </li>
            <li className="px-4 py-2 rounded-lg transition-all duration-300">
              <Link to="/profile" className="text-white font-bold">Profile</Link>
            </li>
            <li className="px-4 py-2 rounded-lg transition-all duration-300">
              <Link to="/Login" className="text-white font-bold">Login</Link>
            </li>
            <li className="px-4 py-2 rounded-lg transition-all duration-300">
              <Link to="/SignUp" className="text-white font-bold">Register</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
