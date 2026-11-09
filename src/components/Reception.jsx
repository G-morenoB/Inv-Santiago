import Reveal from "./Reveal";
import { invitation } from "../config/invitation";

export default function Reception() {
  const r = invitation.reception;
  return (
    <section className="px-6 py-20 text-center">
      <Reveal className="mx-auto max-w-md">
        <h3 className="font-script text-5xl text-sage-dark">Recepción</h3>
        <p className="mt-4 text-3xl font-semibold text-gold">{r.time}</p>
        <p className="mt-4 text-lg text-bark">{r.place}</p>
        <p className="mt-1 text-sm text-bark/80">{r.address}</p>
        <a
          href={r.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-block rounded-full border border-sage-dark px-7 py-3 text-xs uppercase tracking-widest text-sage-dark transition hover:bg-sage-dark hover:text-white"
        >
          📍 Ver ubicación
        </a>
      </Reveal>
    </section>
  );
}
