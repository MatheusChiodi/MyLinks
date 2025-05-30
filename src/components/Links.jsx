import { motion } from 'framer-motion';

export default function Links({ links }) {
  return (
    <motion.section
      className="mb-12 w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.6 }}
    >
      <h2 className="text-xl font-bold mb-4">🌐 Meus Links</h2>
      <div className="grid gap-4 w-full mx-auto">
        {links.map(({ title, url, icon: Icon, color }) => (
          <motion.a
            key={title}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-[100%] group flex items-center gap-3 h-[60px] bg-zinc-100 dark:bg-zinc-800 rounded-xl shadow-lg transition hover:scale-105`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="bg-gray-200 dark:bg-zinc-600 h-[60px] w-[60px] rounded-l-xl flex items-center justify-center">
              <Icon
                size={35}
                className={`${color} group-hover:rotate-12 transition-transform`}
              />
            </div>

            <span className="font-semibold text-base group-hover:underline underline-offset-4 ps-5 drop-shadow-2xl ">
              {title}
            </span>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}
