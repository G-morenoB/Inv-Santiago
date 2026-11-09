import Lion from "./Lion";
import { FloralCorners } from "./Floral";
import { invitation } from "../config/invitation";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <FloralCorners />
      <p className="relative mt-6 text-xs uppercase tracking-[0.3em] text-gold">Nuestro pequeño rey</p>
      <h2 className="relative font-script text-7xl sm:text-8xl text-sage-dark leading-tight">{invitation.name}</h2>
        <Lion className="relative w-36 sm:w-44" />
      <p className="relative mt-2 text-bark">{invitation.subtitle}</p>
      <p className="relative mt-6 text-sm tracking-widest text-gold">27 · DICIEMBRE · 2026</p>
    </section>
  );
}
