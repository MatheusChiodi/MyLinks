import { X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Modal({ modalTool, setModalTool }) {
  return (
    <motion.div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white rounded-xl max-w-lg w-full p-6 relative shadow-xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      >
        <button
          onClick={() => setModalTool(null)}
          className="absolute top-0 right-0 hover:text-red-500 bg-[#ff5555] hover:bg-[#ed4848] rounded-lg p-2 transition duration-500 shadow-lg "
        >
          <X size={20} color="#fff" />
        </button>
        <img
          src={modalTool.preview}
          alt={modalTool.name}
          className="rounded-md mb-4 w-full h-48 object-cover shadow-xl"
        />
        <h2 className="text-2xl font-bold mb-2">{modalTool.name}</h2>
        <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-300">
          {modalTool.description}
        </p>
        <a
          href={modalTool.link}
          target="_blank"
          className="inline-block px-4 py-2 bg-[#ff5555] text-white rounded hover:bg-[#ed4848] transition duration-500 shadow-lg"
        >
          Acessar Projeto
        </a>
      </motion.div>
    </motion.div>
  );
}
