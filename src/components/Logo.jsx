import React from "react";
import { useSelector } from "react-redux";

const Logo = ({ width = "100px" }) => {
  let name = useSelector((store) => store.auth.userData?.name);

  return <div>Welcome, {name}</div>;
};

export default Logo;
