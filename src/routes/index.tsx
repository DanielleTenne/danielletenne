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
import artNight from "@/assets/art/halayla-haze.gif.asset.json";
import artShay1 from "@/assets/art/shayachli-1.gif.asset.json";
import artShay4 from "@/assets/art/shayachli-4.gif.asset.json";
import artHaze3 from "@/assets/art/halayla-haze-3.gif.asset.json";
import artPagmar5 from "@/assets/art/pagmar-5.gif.asset.json";
import artMarvin1 from "@/assets/art/marvin-1.gif.asset.json";
import artAyalev3 from "@/assets/art/ayalev-3.gif.asset.json";
import artHazeh12 from "@/assets/art/halayla-hazeh-1-2.gif.asset.json";
import artEscapiz1 from "@/assets/art/escapiz-1.gif.asset.json";

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
  { src: artNight.url, alt: "Night animation" },
];

const shay1: ArtImage = { src: artShay1.url, alt: "Shayach Li 1" };
const shay4: ArtImage = { src: artShay4.url, alt: "Shayach Li 4" };
const haze3: ArtImage = { src: artHaze3.url, alt: "Halayla Haze 3" };
const pagmar5: ArtImage = { src: artPagmar5.url, alt: "Pagmar 5" };
const marvin1: ArtImage = { src: artMarvin1.url, alt: "Marvin 1" };
const ayalev3: ArtImage = { src: artAyalev3.url, alt: "Ayalev 3" };
const hazeh12: ArtImage = { src: artHazeh12.url, alt: "Halayla Hazeh" };
const escapiz1: ArtImage = { src: artEscapiz1.url, alt: "Escapiz 1" };

const artRow1: ArtImage[] = [shay4, artImages[1], pagmar5, escapiz1, haze3];
const artRow2: ArtImage[] = [haze3, shay1, artImages[3], marvin1, shay4];
const artRow3: ArtImage[] = [hazeh12, artImages[0], ayalev3, artImages[2], artImages[4]];

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
        <div className="grid grid-cols-1 items-center gap-10 px-10 py-20 md:grid-cols-2 md:px-[120px] md:py-28">
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
            <div className="h-72 w-72 overflow-hidden rounded-full aspect-square md:h-96 md:w-96">
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
      <section className="px-10 py-20 md:px-[120px]">
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
        <div className="px-10 text-center md:px-[120px]">
          <h2 className="mb-6 text-4xl font-extrabold md:text-5xl">Contact me</h2>
          <a
            href="mailto:tenne.dani@gmail.com"
            className="text-sm hover:underline"
            style={{ color: "#4D72FA" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#4D72FA")}
          >
            tenne.dani@gmail.com →
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ArtPlayground() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0.5);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // 0 when section bottom hits viewport top, 1 when section top hits viewport bottom.
      const total = rect.height + vh;
      const p = 1 - (rect.bottom) / total;
      setProgress(Math.max(0, Math.min(1, p)));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="art"
      ref={sectionRef}
      className="w-full overflow-x-hidden bg-[#f3f3f1] py-24"
    >
      <h2 className="mb-16 text-center text-5xl font-extrabold leading-tight text-stone-800 md:text-7xl">
        Art<br />Playground
      </h2>

      <div className="space-y-6">
        <ScrollRow images={artRow1} direction="right" progress={progress} />
        <ScrollRow images={artRow2} direction="left" progress={progress} />
        <ScrollRow images={artRow3} direction="right" progress={progress} />
      </div>

      <div className="mt-16 flex justify-center">
        <Link
          to="/art"
          className="border border-[#0a1b4d] px-6 py-2 text-xs text-[#0a1b4d] hover:bg-[#0a1b4d] hover:text-white"
        >
          View Projects →
        </Link>
      </div>
    </section>
  );
}
