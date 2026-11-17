import Reveal from "./Reveal";
import { invitation } from "../config/invitation";

function Group({ title, names }) {
  return (
    <div>
      <h4 className="font-script text-4xl text-sage-dark">{title}</h4>
      <div className="mt-3 space-y-1 text-lg text-bark">
        {names.map((n) => (
          <p key={n}>{n}</p>
        ))}
      </div>
    </div>
  );
}

export default function Godparents() {
  const g = invitation.godparents;
  return (
    <section className="px-6 py-20 text-center">
      <Reveal className="mx-auto max-w-md">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">
          Con la bendición de Dios y de nuestros padrinos
        </p>
        <div className="mt-10 space-y-10">
          <Group title="Mis padrinos" names={g.parents} />
          <Group names={g.godparents} />
        </div>
      </Reveal>
    </section>
  );
}