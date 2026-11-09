import Reveal from "./Reveal";
import { invitation } from "../config/invitation";

const DAYS = ["D", "L", "M", "M", "J", "V", "S"];

export default function Calendar() {
  const d = new Date(invitation.eventDate);
  const year = d.getFullYear();
  const month = d.getMonth();
  const day = d.getDate();
  const first = new Date(year, month, 1).getDay();
  const total = new Date(year, month + 1, 0).getDate();
  const monthName = d.toLocaleDateString("es-MX", { month: "long" });
  const cells = [...Array(first).fill(null), ...Array.from({ length: total }, (_, i) => i + 1)];

  return (
    <section className="bg-sand/50 px-6 py-20 text-center">
      <Reveal className="mx-auto max-w-sm">
        <h3 className="font-script text-5xl text-sage-dark">Guarda al fecha</h3>
        <p className="mt-2 capitalize tracking-widest text-gold">{monthName} {year}</p>
        <div className="mt-6 grid grid-cols-7 gap-y-2 rounded-2xl bg-white/70 p-4 shadow-sm">
          {DAYS.map((x, i) => (
            <div key={i} className="text-xs font-semibold text-sage-dark">{x}</div>
          ))}
          {cells.map((n, i) => (
            <div key={i} className="flex h-9 items-center justify-center">
              {n && (
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-full text-sm ${
                    n === day ? "bg-gold font-semibold text-white shadow-md ring-4 ring-gold/20" : "text-bark"
                  }`}
                >
                  {n}
                </span>
              )}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
