import Lion from "./Lion";
import { FloralCorners } from "./Floral";
import { invitation } from "../config/invitation";

export default function Cover({ onOpen, hidden }) {
  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-cream px-6 text-center transition-opacity duration-1000 ${
        hidden ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <FloralCorners />
      <Lion className="relative w-44 sm:w-56 animate-floaty" />
      <p className="relative mt-4 tracking-[0.3em] text-xs uppercase text-gold">Estás invitado</p>
      <h1 className="relative font-script text-6xl sm:text-7xl text-sage-dark mt-2">{invitation.name}</h1>
      <p className="relative mt-2 text-sm text-bark">{invitation.subtitle}</p>
      <button
        onClick={onOpen}
        className="relative mt-10 rounded-full border border-gold bg-gold px-8 py-3 text-sm tracking-widest uppercase text-white shadow-lg transition hover:bg-gold/90 active:scale-95"
      >
        Abrir invitación
      </button>
    </div>
  );
}
