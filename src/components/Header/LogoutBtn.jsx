import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/config";
import { logout } from "../../store/authSlice";

const LogoutBtn = () => {
    const dispatch = useDispatch();
    const logOutHandler = () => {
        authService
            .logout()
            .then(() => {
                dispatch(logout());
            })
            .catch((err) => {
                console.log(
                    `Something went wrong while logout in LogOut btn`,
                    err
                );
            });
    };
    return <button onClick={logOutHandler}>Logout</button>;
};

export default LogoutBtn;
