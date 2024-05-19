import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
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
    return (
        <button
            className="inline-block px-6 py-2 duration-200 transition ease-out hover:text-[#000000] hover:bg-[#48937E] rounded-full"
            onClick={logOutHandler}
        >
            Logout
        </button>
    );
};

export default LogoutBtn;
