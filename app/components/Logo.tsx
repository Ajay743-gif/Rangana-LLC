type LogoProps = {
  variant?: "light" | "dark";
  mono?: boolean;
  showWordmark?: boolean;
  className?: string;
};

/**
 * Rengana Capital primary lockup — interlocked serif "RC" + wordmark.
 * variant "light" = for dark backgrounds (white R, gold C, white wordmark).
 * variant "dark"  = for light backgrounds (navy R, gold C, navy wordmark).
 * mono = render the whole lockup in a single colour (e.g. all-navy on white,
 * where gold reads as low-contrast).
 */
export default function Logo({
  variant = "light",
  mono = false,
  showWordmark = true,
  className,
}: LogoProps) {
  const rColor = variant === "light" ? "#FBFAF7" : "#182B4D";
  const wordColor = rColor;
  const gold = mono ? rColor : "#C6A15B";

  return (
    <span className={className} aria-label="Rengana Capital" style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
      <svg width="46" height="34" viewBox="0 0 66 46" role="img" aria-hidden="true" style={{ flexShrink: 0 }}>
        <text x="2" y="37" fontFamily="var(--font-cormorant), Georgia, serif" fontSize="46" fontWeight="600" fill={rColor}>R</text>
        <text x="30" y="37" fontFamily="var(--font-cormorant), Georgia, serif" fontSize="46" fontWeight="600" fill={gold}>C</text>
      </svg>
      {showWordmark && (
        <span
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontWeight: 500,
            fontSize: "1.15rem",
            letterSpacing: "0.14em",
            color: wordColor,
            whiteSpace: "nowrap",
          }}
        >
          RENGANA CAPITAL
        </span>
      )}
    </span>
  );
}
