import React from "react";
import { useSelector } from "react-redux";

const Logo = ({ width = "100px" }) => {
  let name = useSelector((store) => store.auth.userData?.name);

  return <div>
    <img className="w-44" src="../../public/logo/newLogo2.png" alt="" />
  </div>;
};

export default Logo;
