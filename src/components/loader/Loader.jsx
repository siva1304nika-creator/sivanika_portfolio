import { useEffect, useState } from "react";
import { loaderTexts } from "./loaderTexts";

export default function Loader({ onFinish }) {
  const [text, setText] = useState("");
  const [exit, setExit] = useState(false);

  useEffect(() => {
    // pick random text (no flicker)
    const random =
      loaderTexts[Math.floor(Math.random() * loaderTexts.length)];
    setText(random);

    // exit animation
    const exitTimer = setTimeout(() => setExit(true), 2500);
    const finishTimer = setTimeout(onFinish, 3000);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center
      bg-black transition-opacity duration-700
      ${exit ? "opacity-0" : "opacity-100"}`}
    >
      {/* TEMP visual (replace with GIF/Lottie later) */}
      <div className="w-32 h-32 rounded-full border border-white/20 animate-pulse" />

      <p className="mt-6 text-sm tracking-[0.3em] text-white/70">
        {text}
      </p>
    </div>
  );
}
