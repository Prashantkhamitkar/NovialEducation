import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import './css/section.css'
const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`mx-auto text-blue-800 flex w-full items-center justify-between border-gray-500  h-[5rem] p-8 ${
        isSticky
          ? "stick top-0 bg-white z-[50] text-white transition-all duration-300 ease-in-out"
          : ""
      }`}
    >
      <Logo />
      <NavLinks />
    </div>
  );
};

export default Navbar;
