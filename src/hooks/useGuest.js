// Lee del enlace: ?para=Nombre&adultos=2&menores=1
export default function useGuest() {
  const p = new URLSearchParams(window.location.search);
  const name = (p.get("para") || "").trim().slice(0, 60);
  const num = (k) => Math.max(0, parseInt(p.get(k), 10) || 0);
  const adults = num("adultos");
  const kids = num("menores");
  return { name, adults, kids, total: adults + kids };
}