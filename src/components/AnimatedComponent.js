import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.3,
    },
  },
};

const slideVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

const AnimatedComponent = () => {
  return (
    <motion.div
      className="flex overflow-hidden w-[20rem] h-[30rem]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="flex-shrink-0 w-full flex items-center justify-center p-4 bg-blue-100 rounded-lg shadow-lg"
        variants={slideVariants}
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold">Card 1</h2>
          <p>Content for card 1.</p>
        </div>
      </motion.div>

      <motion.div
      className="flex overflow-hidden w-[20rem] h-screen"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="flex-shrink-0 w-full flex items-center justify-center p-4 bg-blue-100 rounded-lg shadow-lg"
        variants={slideVariants}
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold">Card 2</h2>
          <p>Content for card 1.</p>
        </div>
      </motion.div>

      <motion.div
        className="flex-shrink-0 w-full flex items-center justify-center p-4 bg-gray-100"
        variants={slideVariants}
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold">Google</h1>
          <p className="text-lg">Welcome to Google!</p>
          <input
            type="text"
            placeholder="Search Google"
            className="mt-4 p-2 border border-gray-400 rounded-lg"
          />
        </div>
      </motion.div>

      <motion.div
        className="flex-shrink-0 w-full flex items-center justify-center p-4 bg-blue-100 rounded-lg shadow-lg"
        variants={slideVariants}
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold">Card 3</h2>
          <input
            type="text"
            placeholder="Search Google"
            className="mt-4 p-2 border border-gray-400 rounded-lg"
          />
          <div className="mt-4">
            <a href="#" className="block text-blue-500">Gmail</a>
            <a href="#" className="block text-blue-500">Images</a>
            <a href="#" className="block text-blue-500">Maps</a>
            <a href="#" className="block text-blue-500">YouTube</a>
          </div>
        </div>
      </motion.div>
    </motion.div>
    </motion.div>
  );
};

export default AnimatedComponent;





