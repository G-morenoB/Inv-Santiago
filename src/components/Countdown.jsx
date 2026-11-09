import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import { invitation } from "../config/invitation";

const calc = () => {
  const diff = Math.max(0, new Date(invitation.eventDate) - new Date());
  return {
    Días: Math.floor(diff / 86400000),
    Horas: Math.floor(diff / 3600000) % 24,
    Min: Math.floor(diff / 60000) % 60,
    Seg: Math.floor(diff / 1000) % 60,
  };
};

export default function Countdown() {
  const [t, setT] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="px-6 py-20 text-center">
      <Reveal>
        <h3 className="font-script text-5xl text-sage-dark">Falta muy poco</h3>
        <div className="mx-auto mt-8 grid max-w-md grid-cols-4 gap-3">
          {Object.entries(t).map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-gold/30 bg-white/60 py-4 shadow-sm">
              <div className="text-3xl font-semibold text-gold">{String(value).padStart(2, "0")}</div>
              <div className="mt-1 text-[11px] uppercase tracking-widest text-bark">{label}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
