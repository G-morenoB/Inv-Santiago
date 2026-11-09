// Rama de hojas en acuarela (SVG original). Úsala en las esquinas.
const Leaf = ({ x, y, r, s = 1, fill }) => (
  <path
    d="M0 0 C 18 -26, 56 -26, 76 0 C 56 26, 18 26, 0 0Z"
    transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}
    fill={fill}
    opacity="0.85"
  />
);

export default function Floral({ className = "" }) {
  return (
    <svg viewBox="0 0 240 240" className={`pointer-events-none select-none ${className}`} aria-hidden="true">
      <path d="M0 0 C 60 40, 110 90, 150 170" stroke="#b08d3c" strokeWidth="1.5" fill="none" opacity="0.6" />
      <Leaf x={20} y={14} r={35} fill="#9aab87" />
      <Leaf x={50} y={30} r={70} s={0.9} fill="#7f9170" />
      <Leaf x={80} y={52} r={20} s={1.1} fill="#b3c1a2" />
      <Leaf x={100} y={82} r={75} s={0.85} fill="#8d9c7a" />
      <Leaf x={125} y={120} r={30} s={0.9} fill="#a7b794" />
      <Leaf x={140} y={150} r={80} s={0.7} fill="#7f9170" />
      <circle cx="60" cy="90" r="2.5" fill="#b08d3c" opacity="0.7" />
      <circle cx="110" cy="40" r="2" fill="#b08d3c" opacity="0.7" />
      <circle cx="150" cy="100" r="3" fill="#b08d3c" opacity="0.6" />
    </svg>
  );
}

// Las 4 esquinas, para usar dentro de una sección con "relative"
export function FloralCorners() {
  return (
    <>
      <Floral className="absolute top-0 left-0 w-32 sm:w-48" />
      <Floral className="absolute top-0 right-0 w-32 sm:w-48 -scale-x-100" />
      <Floral className="absolute bottom-0 left-0 w-32 sm:w-48 -scale-y-100" />
      <Floral className="absolute bottom-0 right-0 w-32 sm:w-48 -scale-100" />
    </>
  );
}
