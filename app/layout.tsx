import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Navneeth Premanand | Business Analyst & Full Stack Developer",
  description:
    "Business analyst & data engineer. I translate stakeholder needs into dashboards, data pipelines, and systems. Published in IEEE. Based in Bengaluru & Dubai.",
  keywords: [
    "Business Analyst",
    "Data Engineer",
    "Full Stack Developer",
    "Data Science",
    "React",
    "Python",
    "AWS",
    "Analytics",
  ],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  metadataBase: new URL("https://navneeth-premanand.com"),
  openGraph: {
    title: "Navneeth Premanand | Business Analyst & Full Stack Developer",
    description:
      "Business analyst & data engineer specializing in data pipelines, dashboards, and systems. Published in IEEE.",
    url: "https://navneeth-premanand.com",
    siteName: "Navneeth Premanand Portfolio",
    images: [
      {
        url: "/Navneeth_p.jpg",
        width: 1200,
        height: 630,
        alt: "Navneeth Premanand",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Navneeth Premanand | Business Analyst & Full Stack Developer",
    description:
      "Business analyst & data engineer. Data pipelines, dashboards, systems. Published in IEEE.",
    images: ["/Navneeth_p.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
