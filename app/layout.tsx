import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import App from "../components/App";
import "./app.css";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Formaat - Design system studio",
    description:
      "With more than a decade of experience each, we explore how design systems will work tomorrow",
    metadataBase: new URL("https://formaat.design"),
    openGraph: {
      images: "/img/share.png",
    },
    other: {
      "twitter:card": "summary_large_image",
      "theme-color": "#0d1117",
      "og:site_name": "Formaat",
      "og:url": "https://formaat.design",
      "og:type": "website",
      "twitter:url": "https://formaat.design",
    },
  };
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-rs-theme="formaat" data-rs-color-mode="dark">
      <body>
        <App>{children}</App>
        <Analytics />
      </body>
    </html>
  );
}
