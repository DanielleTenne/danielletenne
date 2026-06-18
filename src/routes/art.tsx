import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import coverPagmar from "../assets/art/cover-pagmar-2.gif.asset.json";
import easternPulse from "../assets/art/eastern-pulse-2.jpeg.asset.json";
import ayalev1 from "../assets/art/ayalev-1.gif.asset.json";
import ayalev2 from "../assets/art/ayalev-2.gif.asset.json";
import ayalev3 from "../assets/art/ayalev-3-2.gif.asset.json";
import escapiz from "../assets/art/escapiz-1-2.gif.asset.json";
import anchors from "../assets/art/anchors-2.jpg.asset.json";
import mashpiin from "../assets/art/mashpiin.gif.asset.json";
import halaylaHazeh3 from "../assets/art/halayla-hazeh-3-2.gif.asset.json";

export const Route = createFileRoute("/art")({
  head: () => ({
    meta: [
      { title: "Art Playground — Danielle Tenne" },
      { name: "description", content: "A collection of personal art, illustrations and experiments." },
      { property: "og:title", content: "Art Playground — Danielle Tenne" },
      { property: "og:description", content: "A collection of personal art, illustrations and experiments." },
    ],
  }),
  component: ArtPage,
});

type Piece = {
  title: string;
  ratio: string;
  src?: string;
  gradient?: string;
};

const leftColumn: Piece[] = [
  { title: "Pagmar", ratio: "aspect-[16/9]", src: coverPagmar.url },
  { title: "I Love Haifa — Houses", ratio: "aspect-[16/9]", src: ayalev1.url },
  { title: "I Love Haifa — City", ratio: "aspect-[16/9]", src: ayalev3.url },
  { title: "Escapiz", ratio: "aspect-[16/9]", src: escapiz.url },
  { title: "Mashpiin", ratio: "aspect-[16/9]", src: mashpiin.url },
];

const rightColumn: Piece[] = [
  { title: "Eastern Pulse", ratio: "aspect-square", src: easternPulse.url },
  { title: "I Love Haifa — Kitchen", ratio: "aspect-[16/9]", src: ayalev2.url },
  { title: "Anchors", ratio: "aspect-square", src: anchors.url },
  { title: "Halayla Hazeh", ratio: "aspect-[16/9]", src: halaylaHazeh3.url },
];

function Tile({ piece }: { piece: Piece }) {
  return (
    <div className={`relative ${piece.ratio} w-full overflow-hidden rounded-none`}>
      {piece.src ? (
        <img src={piece.src} alt={piece.title} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      ) : (
        <>
          <div className={`absolute inset-0 bg-gradient-to-br ${piece.gradient}`} />
          <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-xs uppercase tracking-widest text-white/70">
            {piece.title}
          </span>
        </>
      )}
    </div>
  );
}

function ArtPage() {
  return (
    <div className="min-h-screen bg-[#f3f3f1]">
      <Header />
      <main className="px-10 py-16 md:px-[120px]">
        <h1 className="mb-12 text-4xl font-extrabold leading-tight text-stone-800 md:text-5xl">
          Art<br />playground
        </h1>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          <div className="flex flex-col gap-4 md:gap-5">
            {leftColumn.map((p) => (
              <Tile key={p.title} piece={p} />
            ))}
          </div>
          <div className="flex flex-col gap-4 md:gap-5">
            {rightColumn.map((p) => (
              <Tile key={p.title} piece={p} />
            ))}
          </div>
        </div>
      </main>

      <section className="bg-[#0a1b4d] py-24 text-white">
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
