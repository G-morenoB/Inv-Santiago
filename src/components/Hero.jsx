import { invitation } from "../config/invitation";

export default function Hero() {
  // "Santiago Noel" → "Santiago" arriba y "Noel" abajo
  const [first, ...rest] = invitation.name.split(" ");
  const last = rest.join(" ");

  return (
    <section className="bg-cream">
      {/* El ancho nunca supera 2/3 de la altura: así la foto solo se recorta de los lados */}
      <div className="relative mx-auto h-dvh w-full max-w-[min(32rem,66dvh)] overflow-hidden">
        <img
          src="/hero.jpg"
          alt={`${invitation.name} con su pastel de un año`}
          className="absolute inset-x-0 top-0 h-[calc(100%-1.5rem)] w-full object-cover object-bottom"
        />

        {/* Texto: entre los banderines y la cabeza del bebé */}
        <div className="absolute inset-x-0 top-[31%] text-center">
          <svg
            viewBox="0 0 400 140"
            className="mx-auto block"
            style={{ width: "min(78%, 32dvh)" }}
            aria-hidden="true"
          >
            <defs>
              <path id="hero-arc" d="M 30 125 A 185 185 0 0 1 370 125" />
            </defs>
            <text
              fill="#5f7050"
              fontSize="17"
              letterSpacing="4"
              textAnchor="middle"
              style={{ fontFamily: "Lora, serif", textTransform: "uppercase" }}
            >
              <textPath href="#hero-arc" startOffset="50%">
                Mi bautizo y primer año
              </textPath>
            </text>
          </svg>

          <h2
            className="-mt-1 font-serif uppercase leading-tight tracking-[0.22em] text-sage-dark"
            style={{ fontSize: "3.3dvh" }}
          >
            <span className="block pl-[0.22em]">{first}</span>
            <span className="mx-auto my-[1dvh] block h-px w-[10dvh] bg-gold/70" />
            <span className="block pl-[0.22em]">{last}</span>
          </h2>
        </div>

        {/* Borde ondulado hacia la siguiente sección */}
        <svg
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
          className="absolute inset-x-0 bottom-0 h-12 w-full"
          aria-hidden="true"
        >
          <path
            d="M0 55 C 150 15, 300 95, 450 55 S 750 15, 900 55 S 1100 85, 1200 45 V100 H0Z"
            fill="#fbf6ee"
          />
        </svg>
      </div>
    </section>
  );
}