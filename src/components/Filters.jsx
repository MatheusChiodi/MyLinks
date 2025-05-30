import { motion } from 'framer-motion';

export default function Filters({ allTags, setSelectedTag, selectedTag }) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <button
        onClick={() => setSelectedTag('')}
        className={`px-4 py-1 rounded-full border shadow-lg hover:bg-[#ff5555] ${
          selectedTag === ''
            ? 'bg-[#ff5555] text-white'
            : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-white'
        }`}
      >
        Todas
      </button>
      {allTags.map((tag) => (
        <button
          key={tag}
          onClick={() => setSelectedTag(tag)}
          className={`px-4 py-1 rounded-full border shadow-lg hover:bg-[#ff5555] ${
            selectedTag === tag
              ? 'bg-[#ff5555] text-white'
              : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-white'
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
