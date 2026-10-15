import Script from "next/script";

// Central analytics (Umami). Renders nothing unless both vars are set at build time, so local
// and preview builds never report visits.
const src = process.env.NEXT_PUBLIC_UMAMI_SRC;
const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;

export function Umami() {
  if (!src || !websiteId) return null;
  return <Script src={src} data-website-id={websiteId} strategy="afterInteractive" />;
}
