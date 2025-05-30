import { Star, StarOff } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Tools({
  filteredTools,
  setModalTool,
  favorites,
  toggleFavorite,
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredTools.map((tool) => (
        <motion.div
          key={tool.name}
          className="group p-5 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:shadow-lg transition-transform hover:scale-[1.02] cursor-pointer relative shadow-xl"
          whileHover={{ scale: 1.02 }}
          onClick={() => setModalTool(tool)}
        >
          <div
            className="absolute top-3 right-3 z-10"
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(tool.name);
            }}
          >
            {favorites.includes(tool.name) ? (
              <Star className="text-yellow-400" size={18} />
            ) : (
              <StarOff className="text-zinc-400" size={18} />
            )}
          </div>
          <h3 className="text-lg font-bold mb-1 group-hover:text-[#ff5555] transition-colors">
            {tool.name}
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-2">
            {tool.description}
          </p>
          <span className="inline-block text-sm text-[#ff5555] hover:underline">
            Ver Detalhes
          </span>
        </motion.div>
      ))}
    </div>
  );
}
