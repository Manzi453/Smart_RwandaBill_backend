// Admin.tsx
import React from "react";
import { motion } from "framer-motion";

const Admin = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className="text-3xl font-bold mb-4">Admin Panel</h1>
      <p className="text-gray-700">This is the admin panel page.</p>
    </motion.div>
  );
};

export { Admin };
