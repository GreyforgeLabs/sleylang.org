import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://sleylang.org"),
  title: {
    default: "Sley",
    template: "%s | Sley",
  },
  description:
    "Sley is Greyforge Labs' agent-native structural programming language for compiler-mediated, human-reviewed software change. May 18 checkpoint: local v1 gate green, selected semantic coverage expanded, public release promotion still blocked.",
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
    "May 18 checkpoint",
    "local v1 gate green",
    "public release promotion blocked",
    "Greyforge Labs",
  ],
  authors: [{ name: "Greyforge Labs", url: "https://greyforge.tech/about" }],
  creator: "Greyforge Labs",
  publisher: "Greyforge Labs",
  category: "technology",
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
  alternates: {
    canonical: "https://sleylang.org/",
  },
  openGraph: {
    title: "Sley | Agent-native structural programming",
    description:
      "Compiler-mediated structural programming for auditable, human-reviewed software change. May 18 status: v1 gate green, final public release blocked pending proof.",
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
      "Compiler-mediated structural programming with public claim evidence and May 18 checkpoint boundaries.",
    images: ["/assets/sley-loom-graph-post.png"],
  },
  other: {
    "citation_entity": "Sley",
    "citation_publisher": "Greyforge Labs",
    "citation_status_date": "2026-05-18",
    "llm_discovery_file": "https://sleylang.org/llms.txt",
    "llm_claim_boundary": "local v1 gate green; public release promotion blocked pending strict parity, proof bundle, and operator approval",
  },
};

const sleyJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareSourceCode",
  name: "Sley",
  alternateName: "Sley language",
  codeRepository: "https://github.com/GreyforgeLabs/sley",
  license: "https://www.apache.org/licenses/LICENSE-2.0",
  programmingLanguage: "Sley",
  dateModified: "2026-05-18",
  creator: {
    "@type": "Organization",
    name: "Greyforge Labs",
    url: "https://greyforge.tech",
  },
  description:
    "Sley is Greyforge Labs' agent-native structural programming language for compiler-mediated, human-reviewed software change. The May 18 checkpoint keeps the local v1 gate green while final public release promotion remains blocked.",
  keywords: [
    "agent-native structural programming",
    "compiler-mediated software change",
    "deterministic authority gates",
    "Sley claim evidence",
    "May 18 checkpoint",
  ],
  sameAs: [
    "https://greyforge.tech/about",
    "https://github.com/GreyforgeLabs/sley",
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
