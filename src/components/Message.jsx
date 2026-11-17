import Reveal from "./Reveal";
import { FloralCorners } from "./Floral";
import { invitation } from "../config/invitation";

export default function Message() {
  return (
    <section className="relative overflow-hidden bg-sand/50 px-10 py-32 text-center sm:px-6">
      <FloralCorners />

      <Reveal className="relative mx-auto max-w-lg">
        <svg
          className="mx-auto mb-8 mt-20"
          width="34"
          height="52"
          viewBox="0 0 34 52"
          stroke="#b08d3c"
          strokeWidth="2"
        >
          <path d="M13 2h8v14h12v8H21v26h-8V24H1v-8h12z" fill="#e0bf63" />
        </svg>
        {/* Texto del nacimiento */}
        <p className="text-balance text-2xl leading-snug text-bark sm:text-3xl"> {invitation.message}</p>

        <p className="my-5 font-script text-6xl leading-tight text-sage-dark sm:text-7xl">
          {invitation.name}
        </p>

        <p className="text-balance text-2xl leading-snug text-bark sm:text-3xl">
           {invitation.message2}
        </p>

        {/* Mensaje del bautizo */}

      </Reveal>
    </section>
  );
}