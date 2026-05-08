import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://sleylang.org"),
  title: {
    default: "Sley",
    template: "%s | Sley",
  },
  description:
    "Sley is the world's first AI-native programming language, designed by AI for AI, and optimized for token savings through compiler-guided context control.",
  keywords: [
    "Sley",
    "AI-native language",
    "language AI agents want to speak",
    "compiler-mediated workflow",
    "agent-native language",
    "token efficiency",
    "structured programming",
    "Greyforge Labs",
  ],
  alternates: {
    canonical: "https://sleylang.org/",
  },
  openGraph: {
    title: "Sley | the language AI agents want to speak",
    description:
      "Sley is the world's first AI-native language designed by AI for AI, optimized for token efficiency.",
    url: "https://sleylang.org/",
    siteName: "Sley",
    images: [
      {
        url: "/assets/sley-loom-graph-post.png",
        width: 1200,
        height: 630,
        alt: "Sley Loom Graph",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sley | AI-native language",
    description:
      "AI-native language designed by AI for AI with token-efficient compiler-guided workflows.",
    images: ["/assets/sley-loom-graph-post.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
