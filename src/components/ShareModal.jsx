import { X, Twitter, Facebook, Linkedin, Link2, Check } from 'lucide-react';
import { useState, useCallback, useMemo, useEffect, useRef } from 'react';

export default function ShareModal({ isOpen, onClose }) {
  const [showToast, setShowToast] = useState(false);
  const modalRef = useRef(null);

  const shareUrl = window.location.href;
  const shareTitle = 'Opa gente olhem que incrível esse perfil que eu achei!';

  const handleCopyLink = useCallback(() => {
    try {
      navigator.clipboard.writeText(shareUrl);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    } catch (error) {
      console.error('Falha ao copiar: ', error);
    }
  }, [shareUrl]);

  const shareOptions = useMemo(
    () => [
      {
        name: 'Twitter',
        icon: <Twitter size={24} />,
        url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          shareUrl
        )}&text=${encodeURIComponent(shareTitle)}`,
        color: 'bg-[#1DA1F2] hover:bg-[#1a8cd8]',
        iconColor: 'text-white',
        delay: 'delay-0',
        ariaLabel: 'Compartilhar no Twitter',
      },
      {
        name: 'Facebook',
        icon: <Facebook size={24} />,
        url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          shareUrl
        )}&quote=${encodeURIComponent(shareTitle)}`,
        color: 'bg-[#4267B2] hover:bg-[#365899]',
        iconColor: 'text-white',
        delay: 'delay-100',
        ariaLabel: 'Compartilhar no Facebook',
      },
      {
        name: 'LinkedIn',
        icon: <Linkedin size={24} />,
        url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          shareUrl
        )}&summary=${encodeURIComponent(shareTitle)}`,
        color: 'bg-[#0077B5] hover:bg-[#006699]',
        iconColor: 'text-white',
        delay: 'delay-200',
        ariaLabel: 'Compartilhar no LinkedIn',
      },
      {
        name: 'Copiar',
        icon: <Link2 size={24} />,
        onClick: handleCopyLink,
        color: 'bg-emerald-500 hover:bg-emerald-600',
        iconColor: 'text-white',
        delay: 'delay-300',
        ariaLabel: 'Copiar link do perfil',
      },
    ],
    [shareUrl, shareTitle, handleCopyLink]
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isOpen && e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();

      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'auto';
      };
    }
  }, [isOpen]);

  const handleOutsideClick = useCallback(
    (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    },
    [onClose]
  );

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn"
      onClick={handleOutsideClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className="bg-white dark:bg-zinc-800 rounded-lg p-6 md:w-96 relative animate-scaleIn"
        tabIndex={-1}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-[#ff5555] dark:text-gray-400 dark:hover:text-[#ff5555] transition-colors duration-300"
          aria-label="Fechar modal"
        >
          <X size={24} />
        </button>

        <h2
          id="modal-title"
          className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200"
        >
          Compartilhar Perfil
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {shareOptions.map((option) => (
            <button
              key={option.name}
              onClick={() =>
                option.onClick
                  ? option.onClick()
                  : window.open(option.url, '_blank')
              }
              className={`
                flex items-center justify-center gap-2 p-4 rounded-lg transition-all duration-300
                ${option.color} ${option.iconColor}
                transform hover:scale-105 shadow-xl
                animate-slideIn ${option.delay}
                active:scale-95
              `}
              aria-label={option.ariaLabel}
            >
              {option.icon}
              <span className="font-medium">{option.name}</span>
            </button>
          ))}
        </div>

        <div
          className={`
            fixed bottom-4 left-1/2 transform -translate-x-1/2
            bg-emerald-500 text-white px-6 py-3 rounded-lg shadow-lg
            flex items-center gap-2
            transition-all duration-300 ease-in-out
            ${
              showToast
                ? 'translate-y-0 opacity-100'
                : 'translate-y-8 opacity-0 pointer-events-none'
            }
          `}
          role="alert"
          aria-live="polite"
        >
          <Check size={20} />
          <span className="font-medium">Link copiado com sucesso!</span>
        </div>
      </div>
    </div>
  );
}
