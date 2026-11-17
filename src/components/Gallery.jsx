import { useState } from "react";
import Reveal from "./Reveal";
import { invitation } from "../config/invitation";

function Photo({ src, className = "" }) {
  const [failed, setFailed] = useState(false);
  return failed ? (
    <div className={`flex items-center justify-center rounded-xl bg-sage/20 text-3xl ${className}`}>🦁</div>
  ) : (
    <img
      src={src}
      alt="Foto de Noe Santiago"
      loading="lazy"
      onError={() => setFailed(true)}
      className={`rounded-xl object-cover shadow-md ${className}`}
    />
  );
}

export default function Gallery() {
  return (
    <section className="bg-cream px-6 py-20 text-center">
      <Reveal className="mx-auto max-w-2xl">
        <h3 className="font-script text-5xl text-sage-dark">Galería</h3>
        <p className="mt-2 text-sm text-bark/80">Un mes a la vez, hasta cumplir su primer añito</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {invitation.gallery.map((src) => (
            <Photo key={src} src={src} className="aspect-square w-[calc((100%-1.5rem)/3)]" />
          ))}
        </div>
        <Photo src={invitation.galleryFeatured} className="mt-3 aspect-square w-full" />
      </Reveal>
    </section>
  );
}