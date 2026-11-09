import Lion from "./Lion";
import { FloralCorners } from "./Floral";
import { invitation } from "../config/invitation";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden px-10 pb-44 pt-20 text-center sm:px-6 sm:pb-32">
      <FloralCorners />
      <Lion className="relative mx-auto w-32" />
      <p className="relative mt-4 font-script text-5xl leading-tight text-sage-dark sm:text-6xl">
        {invitation.closing}
      </p>
      <p className="relative mx-auto mt-3 max-w-[16rem] text-sm text-bark">
        Con amor, la familia de {invitation.name}
      </p>
    </footer>
  );
}