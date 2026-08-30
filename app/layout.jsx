import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://sleylang.org"),
  title: {
    default: "Sley 2 — Machine-native programming",
    template: "%s | Sley",
  },
  description:
    "Sley 2 is Greyforge Labs' active machine-native programming system. Programs are typed semantic state (SSMC1/SCB1), mutated through proposal → validation → transaction. Source-visible pre-release 2.0.0-alpha.0. Sley 1.x is the separate Apache-2.0 legacy lineage.",
  keywords: [
    "Sley",
    "Sley 2",
    "machine-native programming",
    "machine-native programming language",
    "machine-native programming system",
    "typed semantic program state",
    "deterministic program representation",
    "verified software mutation",
    "agent programming language",
    "AI-native programming language",
    "structural programming",
    "SSMC1",
    "SCB1",
    "SMP1",
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
    title: "Sley 2 — Machine-native programming",
    description:
      "Machines do not write source. They mutate verified program state. Sley 2 is the active machine-native programming system from Greyforge Labs (2.0.0-alpha.0 source-visible pre-release).",
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
    title: "Sley 2 — Machine-native programming",
    description:
      "Programming state for machines. Governance for people. Sley 2 (2.0.0-alpha.0, LicenseRef-Proprietary, intentionally incompatible with 1.x) — typed semantic state, deterministic identity, proposal-validated transactions.",
    images: ["/assets/sley-loom-graph-post.png"],
  },
  other: {
    citation_entity: "Sley",
    citation_publisher: "Greyforge Labs",
    citation_status_date: "2026-08-30",
    llm_discovery_file: "https://sleylang.org/llms.txt",
    llm_claim_boundary:
      "Active Sley 2 is 2.0.0-alpha.0 source-visible pre-release under LicenseRef-Proprietary; not a GA release/tag/package. Sley 1.x Legacy is Apache-2.0 v1.2.0 frozen.",
  },
};

const sleyJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Sley",
  alternateName: "Sley 2",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Linux",
  url: "https://sleylang.org/",
  codeRepository: "https://github.com/GreyforgeLabs/sley",
  programmingLanguage: "Sley",
  version: "2.0.0-alpha.0",
  softwareVersion: "2.0.0-alpha.0",
  dateModified: "2026-08-30",
  license: "https://github.com/GreyforgeLabs/sley#license",
  author: {
    "@type": "Organization",
    name: "Greyforge Labs",
    url: "https://greyforge.tech",
  },
  creator: {
    "@type": "Organization",
    name: "Greyforge Labs",
    url: "https://greyforge.tech",
  },
  description:
    "Sley 2 is Greyforge Labs' active machine-native programming system. Programs are typed semantic state (SSMC1 canonical form, SCB1 canonical encoding, SMP1 designated machine interface). Machines mutate verified state through proposal → validation → transaction. Source-visible pre-release 2.0.0-alpha.0 under LicenseRef-Proprietary; intentionally incompatible with the Apache-2.0 Sley 1.x Legacy lineage.",
  keywords: [
    "machine-native programming",
    "typed semantic state",
    "SSMC1",
    "SCB1",
    "deterministic program identity",
    "proposal validation transaction",
    "verified mutation",
    "Sley 2",
    "Greyforge Labs",
  ],
  isAccessibleForFree: true,
  sameAs: [
    "https://greyforge.tech/about",
    "https://github.com/GreyforgeLabs/sley",
    "https://github.com/GreyforgeLabs/sley-legacy",
    "https://sleylang.org/llms.txt",
    "https://sleylang.org/legacy",
    "https://greyforge.tech/chronicles/sley-120-machine-native-break",
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
