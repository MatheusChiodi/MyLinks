import ThemeToggle from './components/ThemeToggle';
import {
  Youtube,
  Github,
  Instagram,
  Globe,
  ArrowUp,
  Mail,
  Filter,
  X,
  Star,
  StarOff,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Loading from './pages/Loading';
import About from './components/About';
import Links from './components/Links';
import Filters from './components/Filters';
import Tools from './components/Tools';
import Modal from './components/Modal';
import TopScrollButton from './components/TopScrollButton';

import { links } from './data/links';
import { tools } from './data/tools';

export default function App() {
  const allTags = [...new Set(tools.flatMap((tool) => tool.tags))];
  const [selectedTag, setSelectedTag] = useState('');
  const [favorites, setFavorites] = useState(
    () => JSON.parse(localStorage.getItem('favorites')) || []
  );
  const [modalTool, setModalTool] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showTop, setShowTop] = useState(false);

  const filteredTools = selectedTag
    ? tools.filter((tool) => tool.tags.includes(selectedTag))
    : tools;

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 1000);
    window.addEventListener('scroll', () => setShowTop(window.scrollY > 300));
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (toolName) => {
    setFavorites((prev) =>
      prev.includes(toolName)
        ? prev.filter((t) => t !== toolName)
        : [...prev, toolName]
    );
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white transition-colors px-4 py-8">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-10 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle,_rgba(255,255,255,0.08)_1px,_transparent_1px)] bg-[length:18px_18px] animate-pulse"></div>
      </div>

      <div className="mb-8 text-center w-[80%] mx-auto">
        <About />

        <div className="absolute top-6 right-6">
          <ThemeToggle />
        </div>

        <Links links={links} />

        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-bold">🛠️ Ferramentas gratuitas criadas por mim</h2>
          </div>

          <Filters
            allTags={allTags}
            setSelectedTag={setSelectedTag}
            selectedTag={selectedTag}
          />

          <Tools
            filteredTools={filteredTools}
            setModalTool={setModalTool}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        </motion.section>
      </div>

      <AnimatePresence>
        {modalTool && (
          <Modal modalTool={modalTool} setModalTool={setModalTool} />
        )}
      </AnimatePresence>

      {showTop && <TopScrollButton />}
    </div>
  );
}
