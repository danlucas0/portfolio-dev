"use client";

import { useEffect, useRef, useState } from "react";

export default function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [tocando, setTocando] = useState(false);

  useEffect(() => {
    const audio = new Audio("/musica.mp3");
    audio.loop = true;
    audio.volume = 0.2;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = "";
      audioRef.current = null;
    };
  }, []);

  const alternar = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (tocando) {
      audio.pause();
      setTocando(false);
    } else {
      try {
        await audio.play();
        setTocando(true);
      } catch (err) {
        console.error("Erro ao tocar áudio:", err);
      }
    }
  };

  return (
    <button
      onClick={alternar}
      aria-label={tocando ? "Desativar música" : "Ativar música"}
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full px-4 py-3 text-sm font-medium text-white backdrop-blur-xl transition-all duration-300
        ${
          tocando
            ? "border border-white/20 bg-white/10 shadow-[0_0_25px_rgba(255,255,255,0.22)]"
            : "border border-white/10 bg-white/5 hover:bg-white/10"
        }`}
    >
      <div className="flex items-end gap-[3px]">
        <span
          className={`w-[3px] rounded-full bg-white transition-all duration-300 ${
            tocando ? "h-3 animate-[wave_1s_ease-in-out_infinite]" : "h-2 opacity-70"
          }`}
        />
        <span
          className={`w-[3px] rounded-full bg-white transition-all duration-300 ${
            tocando ? "h-5 animate-[wave_1s_ease-in-out_0.15s_infinite]" : "h-3 opacity-70"
          }`}
        />
        <span
          className={`w-[3px] rounded-full bg-white transition-all duration-300 ${
            tocando ? "h-4 animate-[wave_1s_ease-in-out_0.3s_infinite]" : "h-2 opacity-70"
          }`}
        />
      </div>

      <span className="hidden sm:block">
        {tocando ? "Som ON" : "Som OFF"}
      </span>
    </button>
  );
}