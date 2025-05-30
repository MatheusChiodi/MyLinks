import React from 'react';
import { motion } from 'framer-motion';
import links from './data/links';

function App() {
  return (
    <div
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen overflow-hidden flex flex-col justify-center items-center"
      style={{ perspective: '1000px' }}
    >
      <section className="relative px-6 text-center transition-all duration-500">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-soft-light" />
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: 10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-2">
            <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
              Matheus Chiodi
            </span>
          </h1>
          <p className="text-center mb-6 text-sm opacity-80 text-gray-200 transition-all duration-500">
            Desenvolvedor Fullstack - Transformando ideias em realidade digital
          </p>
        </motion.div>
      </section>

      <motion.div
        className="md:w-[350px] w-[300px] mx-auto p-8 bg-gray-100 rounded-3xl text-gray-900 shadow-2xl max-w-md"
        initial={{ opacity: 0, y: 20, rotateX: 10 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col gap-4">
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center h-[45px] rounded-md font-semibold duration-150 hover:brightness-90 transition-all flex items-center overflow-hidden"
              style={{
                backgroundColor: link.color,
                boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.3 }}
            >
              <div
                className="w-[50px] h-[45px] bg-gray-200 flex items-center justify-center"
                style={{
                  boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
                }}
              >
                <i
                  className={`${link.icon} text-2xl`}
                  style={{ color: link.color }}
                />
              </div>
              <span className="flex-1 text-white">{link.label}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default App;
