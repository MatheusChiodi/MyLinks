import { Share2 } from 'lucide-react';
import { useState, useCallback } from 'react';
import ShareModal from './ShareModal';

export default function ShareButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);

  return (
    <>
      <button
        onClick={openModal}
        className="shadow-xl p-2 rounded-full border border-zinc-400 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
        aria-label="Share profile"
        aria-haspopup="dialog"
        title="Compartilhe meu perfil"
      >
        <Share2 size={20} />
      </button>
      <ShareModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
