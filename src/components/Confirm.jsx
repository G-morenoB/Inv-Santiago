import Reveal from "./Reveal";
import { invitation } from "../config/invitation";

export default function Confirm() {
  const href = `https://wa.me/${invitation.whatsapp}?text=${encodeURIComponent(invitation.whatsappText)}`;
  return (
    <section className="px-6 py-20 text-center">
      <Reveal>
        <h3 className="font-script text-5xl text-sage-dark">¿Nos acompañas?</h3>
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-block rounded-full bg-gold px-9 py-3 text-sm uppercase tracking-widest text-white shadow-lg transition hover:bg-gold/90 active:scale-95"
        >
          Confirmar asistencia
        </a>
      </Reveal>
    </section>
  );
}
