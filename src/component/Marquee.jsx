/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import React from "react";

function Marquee({ imagesurls, direction }) {
  return (
    <div className="relative flex w-full overflow-hidden">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
        className="flex flex-shrink-0 gap-15 py-10 pr-40"
      >
        {imagesurls.map((url, index) => (
          <img key={index} src={url} className="" />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
        className="flex flex-shrink-0 gap-15 py-10 pr-40"
      >
        {imagesurls.map((url, index) => (
          <img key={index} src={url} className="" />
        ))}
      </motion.div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to right, rgba(39,39,42,0.9), transparent 50%, transparent 50%, rgba(39,39,42,0.9)), linear-gradient(to bottom, rgba(39,39,42,0.9), transparent 20%, transparent 80%, rgba(39,39,42,0.9))",
        }}
      />
    </div>
  );
}

export default Marquee;
