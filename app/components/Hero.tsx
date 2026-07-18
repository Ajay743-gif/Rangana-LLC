import WhatsAppIcon from "./WhatsAppIcon";

const PHONE = "+96899880403";
const PHONE_DISPLAY = "+968 9988 0403";
const WHATSAPP = "https://wa.me/96899880403";

const HERO_BG =
  "radial-gradient(120% 90% at 82% 18%, #1a3060 0%, rgba(18,36,68,0.25) 40%, transparent 70%), radial-gradient(90% 80% at 8% 98%, #17385f 0%, transparent 60%), linear-gradient(150deg,#0a1730 0%,#0e1e3c 55%,#132a4e 100%)";

const DOT_TEXTURE = "radial-gradient(rgba(143,176,224,0.14) 1px, transparent 1px)";

export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: "100vh", background: HERO_BG }}>
      {/* Full-bleed dotted tech texture */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage: DOT_TEXTURE,
          backgroundSize: "24px 24px",
          maskImage: "linear-gradient(180deg, rgba(0,0,0,0.9), rgba(0,0,0,0.5))",
        }}
      />

      <div className="relative z-10 wrap pt-[130px] pb-20 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center w-full">
          <div className="text-paper">
            <p className="eyebrow mb-6" style={{ color: "#D8BC86" }}>
              Business &amp; Finance Advisory · Muscat, Oman
            </p>
            <h1 className="text-4xl md:text-5xl xl:text-6xl leading-[1.1] mb-6" style={{ color: "#FBFAF7", fontWeight: 600 }}>
              The link between your business and its funding.
            </h1>
            <p className="text-lg text-paper/80 leading-relaxed mb-9 max-w-lg">
              Rengana Capital connects Oman&apos;s MSMEs and enterprises to the right lenders — banks
              and NBFCs — arranging equipment, trade, vehicle and project finance, and opening the
              door to growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 bg-gold text-navy-deep px-8 py-4 text-sm font-semibold hover:bg-gold-light transition-colors"
              >
                <PhoneIcon />
                Call now · {PHONE_DISPLAY}
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 border border-paper/40 text-paper px-8 py-4 text-sm font-medium hover:border-gold hover:text-gold transition-colors"
              >
                <WhatsAppIcon size={18} />
                WhatsApp us
              </a>
            </div>
          </div>

          <div className="flex justify-center mt-2 lg:mt-0">
            <ConnectorGraphic />
          </div>
        </div>
      </div>
    </section>
  );
}

const LANES = [
  "M116 92 C 200 116, 236 150, 280 166 C 324 150, 360 116, 444 92",
  "M116 170 C 195 172, 236 170, 280 170 C 324 170, 365 172, 444 170",
  "M116 248 C 200 224, 236 190, 280 174 C 324 190, 360 224, 444 248",
];
const NODE_Y = [92, 170, 248];

function ConnectorGraphic() {
  return (
    <svg
      className="w-full max-w-[560px]"
      viewBox="0 0 560 340"
      role="img"
      aria-label="Rengana Capital as a glowing hub connecting Oman's businesses to banks and NBFCs, unlocking growth"
    >
      <defs>
        <filter id="rcSoft" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="3.2" />
        </filter>
        <radialGradient id="rcOrb" cx="42%" cy="38%" r="70%">
          <stop offset="0%" stopColor="#274778" />
          <stop offset="100%" stopColor="#0c1a34" />
        </radialGradient>
        <radialGradient id="rcHubGlow">
          <stop offset="0%" stopColor="#C6A15B" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#C6A15B" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="rcNodeGlow">
          <stop offset="0%" stopColor="#C6A15B" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#C6A15B" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* base connectors */}
      {LANES.map((d, i) => (
        <path key={`base-${i}`} d={d} fill="none" stroke="#C6A15B" strokeWidth="1.2" opacity="0.22" />
      ))}

      <g className="rc-motion">
      {/* light beams out (securing funding) */}
      {LANES.map((d, i) => (
        <path
          key={`out-${i}`}
          d={d}
          fill="none"
          stroke="#F2DCA8"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeDasharray="22 330"
          strokeDashoffset="352"
          filter="url(#rcSoft)"
        >
          <animate attributeName="stroke-dashoffset" values="352;0" dur="2.8s" begin={`${i * 0.9}s`} repeatCount="indefinite" />
        </path>
      ))}

      {/* growth flowing back */}
      {[0, 2].map((li, k) => (
        <path
          key={`back-${li}`}
          d={LANES[li]}
          fill="none"
          stroke="#7FC9A6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="14 338"
          strokeDashoffset="0"
          opacity="0.9"
        >
          <animate attributeName="stroke-dashoffset" values="0;352" dur="2.8s" begin={`${1.6 + k * 0.7}s`} repeatCount="indefinite" />
        </path>
      ))}
      </g>

      {/* hub */}
      <circle cx="280" cy="170" r="60" fill="url(#rcHubGlow)" filter="url(#rcSoft)" />
      {/* Brand hexagon hub (matches the favicon / app icon) */}
      <polygon points="280,137 307,152 307,188 280,203 253,188 253,152" fill="url(#rcOrb)" stroke="#C6A15B" strokeWidth="1.4" strokeLinejoin="round" />
      {/* Brand monogram: Cormorant Garamond SemiBold — R light, C gold (matches Logo.tsx) */}
      <text x="281" y="181" textAnchor="end" fontFamily="var(--font-cormorant), Georgia, serif" fontSize="30" fontWeight="600" fill="#FBFAF7">R</text>
      <text x="279" y="181" textAnchor="start" fontFamily="var(--font-cormorant), Georgia, serif" fontSize="30" fontWeight="600" fill="#C6A15B">C</text>
      <text x="280" y="232" textAnchor="middle" fontFamily="var(--font-cormorant), Georgia, serif" fontSize="12" fontWeight="500" letterSpacing="1.6" fill="#C6A15B">
        RENGANA CAPITAL
      </text>

      {/* business nodes (glass) */}
      {NODE_Y.map((cy, i) => (
        <g key={`biz-${i}`}>
          <circle cx="86" cy={cy} r="26" fill="url(#rcNodeGlow)" />
          <rect x="62" y={cy - 14} width="48" height="28" rx="9" fill="rgba(255,255,255,0.06)" stroke="rgba(198,161,91,0.6)" strokeWidth="1" />
          <rect x="70" y={cy - 6} width="7" height="7" rx="1.5" fill="#F2DCA8" opacity="0.8" />
          <rect x="82" y={cy - 6} width="7" height="7" rx="1.5" fill="#F2DCA8" opacity="0.55" />
          <rect x="94" y={cy - 6} width="7" height="7" rx="1.5" fill="#F2DCA8" opacity="0.8" />
          <path d={`M80 ${cy - 22} L86 ${cy - 29} L92 ${cy - 22}`} fill="none" stroke="#7FC9A6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <animate attributeName="opacity" values="0.15;1;0.15" dur="2.8s" begin={`${i * 0.9}s`} repeatCount="indefinite" />
          </path>
        </g>
      ))}

      {/* financier (bank) nodes (glass) */}
      {NODE_Y.map((cy, i) => (
        <g key={`fin-${i}`}>
          <circle cx="474" cy={cy} r="26" fill="url(#rcNodeGlow)" />
          <polygon points={`452,${cy - 8} 496,${cy - 8} 474,${cy - 18}`} fill="#F2DCA8" opacity="0.85" />
          <rect x="452" y={cy - 6} width="44" height="22" rx="4" fill="rgba(255,255,255,0.06)" stroke="rgba(198,161,91,0.6)" strokeWidth="1" />
          <line x1="461" y1={cy - 2} x2="461" y2={cy + 12} stroke="#F2DCA8" opacity="0.8" />
          <line x1="474" y1={cy - 2} x2="474" y2={cy + 12} stroke="#F2DCA8" opacity="0.8" />
          <line x1="487" y1={cy - 2} x2="487" y2={cy + 12} stroke="#F2DCA8" opacity="0.8" />
        </g>
      ))}

      <text x="86" y="300" textAnchor="middle" fontFamily="var(--font-work-sans), sans-serif" fontSize="11" letterSpacing="2" fill="#9db6dd">
        BUSINESSES
      </text>
      <text x="474" y="300" textAnchor="middle" fontFamily="var(--font-work-sans), sans-serif" fontSize="11" letterSpacing="2" fill="#9db6dd">
        BANKS &amp; NBFCs
      </text>

      {/* rising particles */}
      <g className="rc-motion" fill="#F2DCA8">
        <circle cx="300" cy="250" r="1.6">
          <animate attributeName="cy" values="250;120" dur="5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.7;0" dur="5s" repeatCount="indefinite" />
        </circle>
        <circle cx="250" cy="260" r="1.4">
          <animate attributeName="cy" values="260;120" dur="6.5s" begin="1s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.6;0" dur="6.5s" begin="1s" repeatCount="indefinite" />
        </circle>
        <circle cx="320" cy="255" r="1.4">
          <animate attributeName="cy" values="255;130" dur="5.8s" begin="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.6;0" dur="5.8s" begin="2s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 512 512" fill="currentColor" aria-hidden="true">
      <path d="M391 351c-14-14-32-14-46 0-11 11-22 22-32 33-7 7-13 8-21 4-16-9-33-16-48-26-36-27-67-59-94-96-13-18-25-37-33-58-2-4-1-8 2-11 11-11 22-22 32-33 15-15 15-32 0-47-9-9-17-17-26-26-9-9-18-18-27-26-14-14-32-14-46 0-11 11-22 22-33 34-10 11-15 24-16 38-2 22 4 43 11 64 15 43 39 82 68 117 39 48 86 86 141 113 25 12 51 22 79 27 20 4 39 3 57-8 11-6 20-15 28-24 13-15 13-33-1-47-9-9-18-18-27-27z" />
    </svg>
  );
}
