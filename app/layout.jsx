import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://sleylang.org"),
  title: {
    default: "Sley",
    template: "%s | Sley",
  },
  description:
    "Sley is Greyforge Labs' agent-native structural programming language for compiler-mediated, human-reviewed software change.",
  keywords: [
    "Sley",
    "agent-native language",
    "agent-native programming language claim evidence",
    "agent-native programming language prior art",
    "auditable language claim",
    "Sley prior-art source pack",
    "compiler-mediated workflow",
    "structural programming language",
    "deterministic authority gates",
    "Greyforge Labs",
  ],
  alternates: {
    canonical: "https://sleylang.org/",
  },
  openGraph: {
    title: "Sley | Agent-native structural programming",
    description:
      "Compiler-mediated structural programming for auditable, human-reviewed software change.",
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
    title: "Sley | Agent-native structural programming",
    description:
      "Compiler-mediated structural programming with public claim evidence.",
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
