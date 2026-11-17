import Reveal from "./Reveal";
import EventCard from "./EventCard";
import { invitation } from "../config/invitation";

export default function Reception() {
  return (
    <section className="bg-sand/50 px-6 py-20 text-center">
      <Reveal className="mx-auto max-w-3xl">
        <h3 className="font-script text-5xl text-sage-dark">Dónde y cuándo</h3>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <EventCard title="Ceremonia Religiosa" event={invitation.ceremony} />
          <EventCard title="Recepción" event={invitation.reception} />
        </div>
      </Reveal>
    </section>
  );
}