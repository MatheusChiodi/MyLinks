import { ArrowUp } from 'lucide-react';

export default function TopScrollButton() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 p-3 bg-gradient-to-r from-[#ff5555] to-red-600 text-white rounded-full shadow-lg hover:opacity-90 transition"
    >
      <ArrowUp size={20} />
    </button>
  );
}
