import { ImageResponse } from "next/og";

export const alt = "Rengana Capital — Business & Finance Advisory in Oman";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a1730 0%, #132a4e 100%)",
          color: "#FBFAF7",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 150, fontWeight: 700, lineHeight: 1 }}>
          <span style={{ color: "#FBFAF7" }}>R</span>
          <span style={{ color: "#C6A15B" }}>C</span>
        </div>
        <div style={{ display: "flex", fontSize: 52, letterSpacing: 14, marginTop: 18, color: "#FBFAF7" }}>
          RENGANA CAPITAL
        </div>
        <div style={{ display: "flex", width: 90, height: 3, background: "#C6A15B", margin: "34px 0" }} />
        <div style={{ display: "flex", fontSize: 32, color: "#C6A15B", letterSpacing: 2 }}>
          Business &amp; Finance Advisory · Muscat, Oman
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "rgba(251,250,247,0.7)", marginTop: 24 }}>
          Raise finance. Grow with confidence.
        </div>
      </div>
    ),
    { ...size }
  );
}
