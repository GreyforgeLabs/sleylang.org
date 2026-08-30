import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://sleylang.org"),
  title: {
    default: "Sley",
    template: "%s | Sley",
  },
  description:
    "Sley 1.2.0 completes Greyforge Labs' open human-readable structural language. Active research has moved to the clean machine-native Sley 2.x architecture.",
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
    "Sley 1.2.0",
    "Sley 2.0",
    "machine-native programming language",
    "Greyforge Labs",
  ],
  authors: [{ name: "Greyforge Labs", url: "https://greyforge.tech/about" }],
  creator: "Greyforge Labs",
  publisher: "Greyforge Labs",
  category: "technology",
  icons: {
    icon: "/assets/sley-loom-graph-profile.png",
    apple: "/assets/sley-loom-graph-profile.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Sley 1.2.0 | The open human-readable line",
    description:
      "Sley 1.2.0 completes the human-readable line as Greyforge moves active language research to the clean machine-native Sley 2.x architecture.",
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
    title: "Sley 1.2.0 | The open human-readable line",
    description:
      "The open human-readable Sley 1.x line and the architectural transition to machine-native Sley 2.x.",
    images: ["/assets/sley-loom-graph-post.png"],
  },
  other: {
    "citation_entity": "Sley",
    "citation_publisher": "Greyforge Labs",
    "citation_status_date": "2026-08-27",
    "llm_discovery_file": "https://sleylang.org/llms.txt",
    "llm_claim_boundary": "Sley 1.2.0 is a Linux x86_64 release candidate; 1.x feature development is frozen; Sley 2.x mechanisms and compatibility are not public claims",
  },
};

const sleyJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareSourceCode",
  name: "Sley",
  alternateName: "Sley language",
  codeRepository: "https://github.com/GreyforgeLabs/sley-legacy",
  license: "https://www.apache.org/licenses/LICENSE-2.0",
  programmingLanguage: "Sley",
  dateModified: "2026-08-27",
  creator: {
    "@type": "Organization",
    name: "Greyforge Labs",
    url: "https://greyforge.tech",
  },
  description:
    "Sley 1.2.0 is Greyforge Labs' completed agent-native, human-readable structural programming line. Active research has moved to a clean machine-native Sley 2.x architecture.",
  keywords: [
    "agent-native structural programming",
    "compiler-mediated software change",
    "deterministic authority gates",
    "Sley claim evidence",
    "Sley 1.2.0",
    "machine-native programming",
  ],
  sameAs: [
    "https://greyforge.tech/about",
    "https://github.com/GreyforgeLabs/sley-legacy",
    "https://sleylang.org/llms.txt",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(sleyJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
