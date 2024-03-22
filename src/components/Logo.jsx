import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center cursor-pointer">
      <div className="w-[10rem] mx-[-2rem] mt-2">
        <img
          src="../../src/assets/images/logo.png"
          alt="Logo"
          className="w-full h-auto"
        />
      </div>
      
    </div>
  );
};

export default Logo;
