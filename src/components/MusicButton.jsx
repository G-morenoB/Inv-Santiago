export default function MusicButton({ playing, onToggle }) {
  return (
    <button
      onClick={onToggle}
      aria-label={playing ? "Pausar canción" : "Reproducir canción"}
      className="fixed top-4 left-4 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-gold/50 bg-cream/90 text-gold shadow-md backdrop-blur"
    >
      {playing ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="4" width="5" height="16" rx="1" /><rect x="14" y="4" width="5" height="16" rx="1" /></svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4l13 8-13 8z" /></svg>
      )}
    </button>
  );
}
