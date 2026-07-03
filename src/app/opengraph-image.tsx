import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const dynamic = "force-static";

export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 64,
          background: "#DFF1F1",
          color: "#0f172a",
        }}
      >
        <div style={{ display: "flex", fontSize: 52, fontWeight: 700, lineHeight: 1.2 }}>
          {siteConfig.title}
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#475569", marginTop: 20 }}>
          {siteConfig.shortDescription}
        </div>
        <div style={{ display: "flex", fontSize: 22, fontWeight: 600, color: "#FF0000", marginTop: 32 }}>
          {`${siteConfig.owner} · ${siteConfig.location.city}`}
        </div>
      </div>
    ),
    { ...size },
  );
}
