import Reveal from "./Reveal";
import { invitation } from "../config/invitation";

function Column({ title, names }) {
  return (
    <div className="px-3 sm:px-6">
      <h4 className="pl-[0.25em] font-serif text-lg uppercase tracking-[0.25em] text-sage-dark sm:text-xl">
        {title}
      </h4>
      <div className="mt-5 space-y-3">
        {names.map((n) => (
          <p
            key={n}
            className="text-balance text-xs uppercase leading-snug tracking-wider text-bark sm:text-sm"
          >
            {n}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function Godparents() {
  const { parents, godparents } = invitation.family;

  return (
    <section className="px-6 py-20 text-center">
      <Reveal className="mx-auto max-w-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">
          Con la bendición de Dios y de nuestros padres
        </p>

        {/* Líneas arriba y abajo + divisor vertical en medio, como el diseño de referencia */}
        <div className="mt-8 border-y border-gold/40 py-8">
          <div className="grid grid-cols-2 divide-x divide-gold/40">
            <Column title="Papás" names={parents} />
            <Column title="Padrinos" names={godparents} />
          </div>
        </div>
      </Reveal>
    </section>
  );
}