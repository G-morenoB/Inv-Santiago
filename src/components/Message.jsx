import Reveal from "./Reveal";
import { invitation } from "../config/invitation";

export default function Message() {
  return (
    <section className="relative bg-sand/50 px-8 py-24 text-center">
      <Reveal className="mx-auto max-w-md">
        <svg className="mx-auto mb-8" width="34" height="52" viewBox="0 0 34 52" stroke="#b08d3c" strokeWidth="2">
          <path d="M13 2h8v14h12v8H21v26h-8V24H1v-8h12z" fill="#e0bf63" />
        </svg>
        <p className="text-xl leading-relaxed text-gold sm:text-2xl">{invitation.message}</p>
      </Reveal>
    </section>
  );
}
