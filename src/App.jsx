import { useEffect, useRef, useState } from "react";
import { invitation } from "./config/invitation";

import Cover from "./components/Cover";
import MusicButton from "./components/MusicButton";
import Hero from "./components/Hero";
import Message from "./components/Message";
import Countdown from "./components/Countdown";
import Calendar from "./components/Calendar";
import Reception from "./components/Reception";
import Gallery from "./components/Gallery";
import Confirm from "./components/Confirm";
import Footer from "./components/Footer";

export default function App() {
  const [opened, setOpened] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);
  const audio = useRef(null);

  // Espera a que cargue la tipografía antes de mostrar la invitación
  useEffect(() => {
    const done = () => setReady(true);
    const timeout = setTimeout(done, 2500); // por si la fuente tarda o falla
    document.fonts
      .load('60px "Great Vibes"')
      .then(() => document.fonts.ready)
      .then(done)
      .catch(done);
    return () => clearTimeout(timeout);
  }, []);

  const open = () => {
    setOpened(true);
    audio.current?.play().then(() => setPlaying(true)).catch(() => {});
  };

  const toggle = () => {
    if (!audio.current) return;
    if (playing) { audio.current.pause(); setPlaying(false); }
    else audio.current.play().then(() => setPlaying(true)).catch(() => {});
  };

  return (
    <div
      className={`transition-opacity duration-500 ${ready ? "opacity-100" : "opacity-0"} ${
        opened ? "" : "h-dvh overflow-hidden"
      }`}
    >
      <audio ref={audio} src={invitation.music} loop preload="auto" />
      <Cover onOpen={open} hidden={opened} />
      {opened && <MusicButton playing={playing} onToggle={toggle} />}
      <main>
        <Hero />
        <Message />
        <Countdown />
        <Calendar />
        <Reception />
        <Gallery />
        <Confirm />
        <Footer />
      </main>
    </div>
  );
}