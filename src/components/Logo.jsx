import React from "react";
import { motion } from "framer-motion";
const Logo = () => {
  return (
    <div className="flex items-center cursor-pointer">
      <div className="w-[10rem] mx-[-2rem] mt-2">
        <motion.img
          src="../../src/assets/images/logo.png"
          alt="Logo"
          className="w-full h-auto"
          initial={{ rotateX: 0 }}
          transition={{ duration: 1, delay: 1 }}
          whileInView={{ rotateX: 360 }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
};

export default Logo;
