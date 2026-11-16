import { useState } from "react";
import Reveal from "./Reveal";
import { invitation } from "../config/invitation";
import useGuest from "../hooks/useGuest";

const KEY = "rsvp-noe-santiago";
const plural = (n, one, many) => `${n} ${n === 1 ? one : many}`;
const detail = (a, k) =>
  [plural(a, "adulto", "adultos"), k > 0 && plural(k, "menor", "menores")].filter(Boolean).join(" y ");

function Stepper({ label, value, min, max, onChange }) {
  const btn = "h-9 w-9 rounded-full border border-gold/50 text-xl leading-none text-gold disabled:opacity-30";
  return (
    <div className="flex items-center justify-between py-2">
      <span className="text-bark">{label}</span>
      <div className="flex items-center gap-4">
        <button type="button" className={btn} disabled={value <= min} onClick={() => onChange(value - 1)}>−</button>
        <span className="w-6 text-lg font-semibold text-sage-dark">{value}</span>
        <button type="button" className={btn} disabled={value >= max} onClick={() => onChange(value + 1)}>+</button>
      </div>
    </div>
  );
}

export default function Confirm() {
  const guest = useGuest();
  const limited = guest.total > 0;

  const [saved, setSaved] = useState(() => {
    try { return JSON.parse(localStorage.getItem(KEY)); } catch { return null; }
  });
  const [editing, setEditing] = useState(false);
  const [adults, setAdults] = useState(limited ? guest.adults : 1);
  const [kids, setKids] = useState(limited ? guest.kids : 0);

  // Máximos: lo asignado en el link (o 10 si el link no trae cantidades)
  const maxA = editing && saved ? saved.adults : limited ? guest.adults : 10;
  const maxK = editing && saved ? saved.kids : limited ? guest.kids : 10;
  const who = guest.name || "Invitado";

  const send = (text) =>
    window.open(`https://wa.me/${invitation.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");

  const confirm = () => {
    const data = { adults, kids };
    try { localStorage.setItem(KEY, JSON.stringify(data)); } catch {}
    setSaved(data);
    setEditing(false);
    send(`${invitation.whatsappText}\nInvitado: ${who}\nAsistirán: ${detail(adults, kids)}`);
  };

  const cancel = () => {
    if (!window.confirm("¿Seguro que quieres cancelar tu asistencia?")) return;
    try { localStorage.removeItem(KEY); } catch {}
    setSaved(null);
    setEditing(false);
    send(`Hola, lamento avisar que ${who} ya no podrá asistir al bautizo y cumpleaños de ${invitation.name}.`);
  };

  const fewer = () => {
    setAdults(saved.adults);
    setKids(saved.kids);
    setEditing(true);
  };

  const link = "underline underline-offset-4 text-bark/80 hover:text-sage-dark";

  return (
    <section className="px-6 py-20 text-center">
      <Reveal className="mx-auto max-w-md">
        {saved && !editing ? (
          <>
            <h3 className="font-script text-5xl text-sage-dark">Asistencia confirmada</h3>
            <p className="mt-3 text-bark">Tu presencia hará de este un evento muy especial.</p>
            <div className="mt-8 rounded-[2.5rem] border-2 border-gold/30 bg-white/60 p-8 shadow-sm">
              <p className="font-script text-4xl text-sage-dark">{who}</p>
              <div className="mt-6 flex items-center justify-between gap-4 text-left">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-sand text-gold">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                      <circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
                      <path d="M16 4.6a3.5 3.5 0 010 6.8M18 14.4c2.2.7 3.5 2.6 3.5 5.6" />
                    </svg>
                  </span>
                  <span className="text-bark">Invitados</span>
                </div>
                <div className="text-right font-semibold text-sage-dark">
                  <p>{plural(saved.adults, "adulto", "adultos")}</p>
                  {saved.kids > 0 && <p>{plural(saved.kids, "menor", "menores")}</p>}
                </div>
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 border-t border-gold/20 pt-5 text-sm">
                <button onClick={cancel} className={link}>Cancelar asistencia</button>
                {(saved.adults > 1 || saved.kids > 0) && (
                  <>
                    <span className="text-gold">·</span>
                    <button onClick={fewer} className={link}>Confirmar para menos invitados</button>
                  </>
                )}
              </div>
            </div>
          </>
        ) : (
          <>
            <h3 className="font-script text-5xl text-sage-dark">
              {editing ? "Ajusta tus invitados" : "¿Nos acompañas?"}
            </h3>
            <div className="mt-8 rounded-[2.5rem] border-2 border-gold/30 bg-white/60 p-8 shadow-sm">
              {guest.name && <p className="font-script text-4xl text-sage-dark">{guest.name}</p>}
              <p className="mt-2 text-sm text-bark/80">¿Cuántos asistirán?</p>
              <div className="mt-3 divide-y divide-gold/15 text-left">
                <Stepper label="Adultos" value={adults} min={1} max={maxA} onChange={setAdults} />
                <Stepper label="Menores" value={kids} min={0} max={maxK} onChange={setKids} />
              </div>
              <button
                onClick={confirm}
                className="mt-6 rounded-full bg-gold px-9 py-3 text-sm uppercase tracking-widest text-white shadow-lg transition hover:bg-gold/90 active:scale-95"
              >
                Confirmar asistencia
              </button>
              {editing && (
                <button onClick={() => setEditing(false)} className={`mt-4 block w-full text-sm ${link}`}>
                  Volver
                </button>
              )}
            </div>
          </>
        )}
      </Reveal>
    </section>
  );
}