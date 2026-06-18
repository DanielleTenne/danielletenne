import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { projects } from "@/lib/projects";
import portraitAsset from "@/assets/portrait.gif.asset.json";
import artCover from "@/assets/art/cover-pagmar.gif.asset.json";
import artEastern from "@/assets/art/eastern-pulse.jpeg.asset.json";
import artHaifa from "@/assets/art/i-love-haifa.gif.asset.json";
import artAnchors from "@/assets/art/anchors.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Danielle Tenne — Visual Designer" },
      { name: "description", content: "Visual Designer crafting meaningful marketing and brand experiences." },
      { property: "og:title", content: "Danielle Tenne — Visual Designer" },
      { property: "og:description", content: "Visual Designer crafting meaningful marketing and brand experiences." },
    ],
  }),
  component: Index,
});


type ArtImage = { src: string; alt: string };

const artImages: ArtImage[] = [
  { src: artCover.url, alt: "Cover artwork" },
  { src: artEastern.url, alt: "Eastern Pulse" },
  { src: artHaifa.url, alt: "I Love Haifa" },
  { src: artAnchors.url, alt: "Anchors" },
];

const artRow1: ArtImage[] = [artImages[0], artImages[1], artImages[2], artImages[3], artImages[1]];
const artRow2: ArtImage[] = [artImages[2], artImages[3], artImages[0], artImages[1], artImages[2]];
const artRow3: ArtImage[] = [artImages[3], artImages[0], artImages[1], artImages[2], artImages[0]];

function ScrollRow({
  images,
  direction,
  progress,
}: {
  images: ArtImage[];
  direction: "left" | "right";
  progress: number;
}) {
  // Subtle shift: ~5% of row width across the section's scroll range.
  const sign = direction === "right" ? 1 : -1;
  // Center the resting position so there's room to move both ways visually.
  const offsetPct = sign * (progress - 0.5) * 5;
  return (
    <div className="overflow-hidden">
      <div
        className="flex w-max gap-6"
        style={{ transform: `translate3d(${offsetPct}%, 0, 0)` }}
      >
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={img.alt}
            className="h-56 w-auto shrink-0 rounded-none object-cover md:h-72 lg:h-80"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#0a1b4d]">
      <Header />

      {/* Hero */}
      <section
        id="home"
        className="bg-[#ececec]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="mb-4 text-base font-medium">Hi, I'm Danielle</p>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
              a Visual Designer<br />
              crafting meaningful<br />
              Marketing and brand<br />
              experiences
            </h1>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="h-72 w-72 overflow-hidden rounded-full md:h-96 md:w-96">
              <img
                src={portraitAsset.url}
                alt="Portrait of Danielle"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="mb-10 text-2xl font-extrabold">Selected Work</h2>
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          {projects.map((p) => (
            <Link
              key={p.slug}
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="group relative mb-6 block break-inside-avoid overflow-hidden rounded-sm"
              aria-label={p.title}
            >
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="block h-auto w-full"
              />
              <span className="pointer-events-none absolute inset-0 bg-[#020E3C]/50 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
            </Link>
          ))}
        </div>
      </section>

      <ArtPlayground />


      {/* Contact */}
      <section id="about" className="bg-[#0a1b4d] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="mb-6 text-4xl font-extrabold md:text-5xl">Contact me</h2>
          <a
            href="mailto:hello@example.com"
            className="text-sm text-sky-300 hover:underline"
          >
            hello@example.com →
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
