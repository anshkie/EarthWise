import React from 'react';
import { Outlet, Navigate } from "react-router-dom";

export default function PrivateCom() {
    const auth = localStorage.getItem("user");

    if (auth) {
        return <Outlet />;
    } else {
        return <Navigate to="/SignUp" />;
    }
}
