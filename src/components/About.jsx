import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div
      className="mb-14 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h1 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#ff5555] to-red-600">
        Fala devs 👋
      </h1>
      <p className="mt-4 text-lg max-w-xl mx-auto text-zinc-700 dark:text-zinc-300">
        Desenvolvedor Fullstack apaixonado por criar ferramentas úteis,
        conteúdo educativo e projetos open-source. Veja meus links e
        ferramentas abaixo:
      </p>
    </motion.div>
  );
}
