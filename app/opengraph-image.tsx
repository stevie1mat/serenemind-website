import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #fff7fa 0%, #fde4ec 55%, #f8d2df 100%)",
          color: "#3c2430",
          padding: "56px",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            fontSize: 34,
            fontWeight: 700,
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#e06c88",
              color: "#fff",
              fontSize: 24,
            }}
          >
            S
          </div>
          SereneMind CBT
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05, maxWidth: "980px" }}>
            Anxiety Relief with AI Guidance and CBT Tools
          </div>
          <div style={{ fontSize: 32, opacity: 0.85, maxWidth: "980px" }}>
            Track moods, challenge anxious thoughts, and build calm daily routines.
          </div>
        </div>

        <div style={{ fontSize: 24, opacity: 0.75 }}>serenemindcbt.com</div>
      </div>
    ),
    {
      ...size,
    }
  );
}
