import { useRef, useState } from "react";
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
  const audio = useRef(null);

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
    <div className={opened ? "" : "h-screen overflow-hidden"}>
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
