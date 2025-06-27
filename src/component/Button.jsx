import React from "react";
import { IoIosReturnRight } from "react-icons/io";
import { motion } from "framer-motion";

function Button({ title = "Get Started" }) {
  return (
    <div className="max-w-40 px-4 py-1 bg-zinc-100 text-black flex items-center justify-between rounded-full cursor-pointer overflow-hidden">
      <motion.span
        className="text-sm font-medium"
        whileHover={{ y: -8, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {title}
      </motion.span>
      <motion.span
        whileHover={{ y: -8, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="ml-2"
      >
        <IoIosReturnRight />
      </motion.span>
    </div>
  );
}
export default Button;
