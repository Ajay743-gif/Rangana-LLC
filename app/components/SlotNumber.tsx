"use client";

import { useEffect, useRef, useState } from "react";

const DH = 1.06; // digit box height (em)

function Digit({ target, delay, play }: { target: number; delay: number; play: boolean }) {
  const [rolled, setRolled] = useState(false);
  useEffect(() => {
    if (!play) return;
    const t = setTimeout(() => setRolled(true), delay);
    return () => clearTimeout(t);
  }, [play, delay]);
  const offset = 2 * 10 + target; // two full spins, then land
  return (
    <span style={{ display: "inline-block", height: `${DH}em`, overflow: "hidden", verticalAlign: "bottom" }}>
      <span
        style={{
          display: "flex",
          flexDirection: "column",
          transform: rolled ? `translateY(-${offset * DH}em)` : "translateY(0)",
          transition: "transform 1.5s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {Array.from({ length: offset + 1 }).map((_, k) => (
          <span key={k} style={{ height: `${DH}em`, lineHeight: `${DH}em`, textAlign: "center" }}>
            {k % 10}
          </span>
        ))}
      </span>
    </span>
  );
}

export default function SlotNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setPlay(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const digits = String(value).split("");
  return (
    <span ref={ref} style={{ display: "inline-flex", fontVariantNumeric: "lining-nums tabular-nums" }}>
      {digits.map((d, i) => (
        <Digit key={i} target={Number(d)} delay={120 + i * 170} play={play} />
      ))}
      {suffix}
    </span>
  );
}
