import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

const LogoutBtn = () => {
    console.log(authService);
    const dispatch = useDispatch();
    const logOutHandler = () => {
        console.log("I am working");
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
    return (
        <button
            className="inline-block px-6 py-2 duration-200 hover::bg-blue-100 rounded-full"
            onClick={logOutHandler}
        >
            Logout
        </button>
    );
};

export default LogoutBtn;
