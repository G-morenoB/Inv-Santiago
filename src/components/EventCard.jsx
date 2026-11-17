export default function EventCard({ title, icon, event }) {
  return (
    <div className="rounded-[2rem] border-2 border-gold/30 bg-white/60 p-8 shadow-sm">
      <div className="text-3xl">{icon}</div>
      <h4 className="mt-2 font-script text-4xl text-sage-dark">{title}</h4>
      <p className="mt-3 text-3xl font-semibold text-gold">{event.time}</p>
      <p className="mt-3 text-lg text-bark">{event.place}</p>
      <p className="mt-1 text-sm text-bark/80">{event.address}</p>
      <a
        href={event.mapsUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-block rounded-full border border-sage-dark px-6 py-2.5 text-xs uppercase tracking-widest text-sage-dark transition hover:bg-sage-dark hover:text-white"
      >
        📍 Ver ubicación
      </a>
    </div>
  );
}