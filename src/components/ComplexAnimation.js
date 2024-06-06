import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: -10 },
};

const ComplexAnimation = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-screen bg-gray-100"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="m-2 p-4 bg-white rounded-lg shadow-lg" variants={itemVariants}>
        Item 1
      </motion.div>
      <motion.div className="m-2 p-4 bg-white rounded-lg shadow-lg" variants={itemVariants}>
        Item 2
      </motion.div>
      <motion.div className="m-2 p-4 bg-white rounded-lg shadow-lg" variants={itemVariants}>
        Item 3
      </motion.div>
    </motion.div>
  );
};

export default ComplexAnimation;

