import { useState } from "react";
import Reveal from "./Reveal";
import { invitation } from "../config/invitation";

function Photo({ src }) {
  const [failed, setFailed] = useState(false);
  return failed ? (
    <div className="flex aspect-square items-center justify-center rounded-xl bg-sage/20 text-3xl">🦁</div>
  ) : (
    <img
      src={src}
      alt="Foto de Noe Santiago"
      loading="lazy"
      onError={() => setFailed(true)}
      className="aspect-square w-full rounded-xl object-cover shadow-md"
    />
  );
}

export default function Gallery() {
  return (
    <section className="bg-sand/50 px-6 py-20 text-center">
      <Reveal className="mx-auto max-w-2xl">
        <h3 className="font-script text-5xl text-sage-dark">Galería</h3>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {invitation.gallery.map((src) => (
            <Photo key={src} src={src} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
