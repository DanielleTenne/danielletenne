import penlinkAsset from "@/assets/work/penlink.jpg.asset.json";
import kaiAsset from "@/assets/work/kai-lighters.jpg.asset.json";
import nBrandAsset from "@/assets/work/n-brand.jpg.asset.json";
import tacoAsset from "@/assets/work/taco-revolution.jpg.asset.json";
import cobwebsAsset from "@/assets/work/cobwebs.jpg.asset.json";
import insightsAsset from "@/assets/work/insights.jpg.asset.json";
import stickerAsset from "@/assets/work/sticker-pack.jpg.asset.json";
import wineAsset from "@/assets/work/little-wine-bar.jpg.asset.json";

export type ProjectSection = {
  title: string;
  ratio?: string;
  body?: string;
  gallery?: { label: string; ratio?: string }[];
};

export type Project = {
  slug: string;
  route: string;
  title: string;
  image: string;
  description: string;
  tags: string[];
  sections: ProjectSection[];
};

export const projects: Project[] = [
  {
    slug: "penlink-ui-system",
    route: "/penlink",
    title: "Penlink",
    image: penlinkAsset.url,
    description:
      "Designed a wide range of brand and marketing assets, including presentations, web pages, social media visuals, wall graphics, and printed materials.",
    tags: ["Brand identity", "Design systems", "Web design", "Print", "Presentations"],
    sections: [
      { title: "Brand book", ratio: "aspect-[16/10]", body: "Established a comprehensive visual identity covering color systems, typography hierarchy, logo applications, and brand voice." },
      { title: "Presentations", ratio: "aspect-[16/10]", body: "Built a modular slide library used across sales, conferences, and internal communications." },
      { title: "Printable", ratio: "aspect-[16/9]" },
      { title: "Exhibition Booth Design", ratio: "aspect-[16/10]", body: "Designed a full exhibition booth experience translating the digital brand into a physical environment." },
    ],
  },
  {
    slug: "taco-revolution",
    title: "Taco Revolution",
    image: tacoAsset.url,
    description:
      "Bold, rebellious brand design for Taco Revolution — high-contrast halftones, fierce typography, and a hand-illustrated jaguar mark.",
    tags: ["Brand identity", "Editorial", "Illustration", "Poster design", "Food branding"],
    sections: [
      { title: "Brand campaign", ratio: "aspect-[16/9]", body: "Halftone treatments and stacked condensed type drive a punk-inspired visual language." },
      { title: "Jaguar mark", ratio: "aspect-square" },
      { title: "Menu & collateral", ratio: "aspect-[16/10]" },
    ],
  },
  {
    slug: "insights-building",
    title: "Insights",
    image: insightsAsset.url,
    description:
      "Brand and digital identity for Insights — a forward-looking consultancy built around clarity, scale, and human connection.",
    tags: ["Brand identity", "Logo design", "Web design", "Photography direction"],
    sections: [
      { title: "Logo treatment", ratio: "aspect-[16/9]", body: "A custom A-mark formed from two figures meeting at the apex, signaling collaboration." },
      { title: "Brand environment", ratio: "aspect-[16/10]" },
    ],
  },
  {
    slug: "kai-lighters",
    title: "Kai Lighters",
    image: kaiAsset.url,
    description:
      "Brand identity and product design for Kai Lighters — a playful, glowing visual world combining whimsical illustration with bold typography.",
    tags: ["Brand identity", "Logo design", "Illustration", "App icon", "Packaging"],
    sections: [
      { title: "Logo & mark", ratio: "aspect-[16/10]", body: "A glowing firefly mark paired with a friendly custom wordmark." },
      { title: "App icon", ratio: "aspect-square" },
      { title: "Color & typography", ratio: "aspect-[16/9]", body: "Deep midnight blues paired with warm yellow glows and electric mint accents." },
    ],
  },
  {
    slug: "sticker-pack",
    title: "Sticker Pack",
    image: stickerAsset.url,
    description:
      "Playful sticker pack for Kai.ai — a collection of cheerful illustrations and hand-lettered phrases for everyday messaging.",
    tags: ["Illustration", "Lettering", "Product design", "Sticker design"],
    sections: [
      { title: "Sticker collection", ratio: "aspect-square", body: "A vibrant cast of characters and warm phrases designed for quick emotional delivery." },
      { title: "Lettering studies", ratio: "aspect-[16/9]" },
    ],
  },
  {
    slug: "n-brand-mark",
    title: "N Brand Mark",
    image: nBrandAsset.url,
    description:
      "Identity design for Naaman's bakery — a warm, handcrafted logo system rooted in traditional typography and organic shapes.",
    tags: ["Brand identity", "Logo design", "Typography", "Packaging"],
    sections: [
      { title: "Primary mark", ratio: "aspect-[16/10]", body: "A custom serif N framed in an organic, hand-drawn shape." },
      { title: "Applications", ratio: "aspect-[16/9]" },
    ],
  },
  {
    slug: "cobwebs-technologies",
    title: "Cobwebs Technologies",
    image: cobwebsAsset.url,
    description:
      "Corporate identity and marketing collateral for Cobwebs Technologies — an intelligence platform built on trust, precision, and clarity.",
    tags: ["Brand identity", "Corporate design", "Web design", "Print"],
    sections: [
      { title: "Logo system", ratio: "aspect-[16/10]" },
      { title: "Marketing materials", ratio: "aspect-[16/9]", body: "Editorial layouts and dense data-driven visuals built on a confident dark palette." },
    ],
  },
  {
    slug: "little-wine-bar",
    title: "Little Wine Bar",
    image: wineAsset.url,
    description:
      "Identity and illustration for Little Wine Bar — a cozy neighborhood spot where bold characters meet warm, vintage type.",
    tags: ["Brand identity", "Illustration", "Menu design", "Logo design"],
    sections: [
      { title: "Logo & character", ratio: "aspect-[16/10]", body: "A friendly silhouette pouring an oversized bottle anchors a soft, mellow palette." },
      { title: "Menu system", ratio: "aspect-[16/9]" },
    ],
  },
];

export const projectsBySlug: Record<string, Project> = Object.fromEntries(
  projects.map((p) => [p.slug, p]),
);
