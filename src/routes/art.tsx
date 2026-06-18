import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

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
  ratio: string; // tailwind aspect class
  gradient: string;
};

const leftColumn: Piece[] = [
  { title: "Mandala Keys", ratio: "aspect-[4/3]", gradient: "from-yellow-300 via-emerald-300 to-amber-500" },
  { title: "Night Kitchen", ratio: "aspect-[16/9]", gradient: "from-slate-700 via-slate-800 to-slate-900" },
  { title: "Hallway", ratio: "aspect-[4/5]", gradient: "from-slate-800 via-zinc-800 to-neutral-900" },
  { title: "I Love Haifa", ratio: "aspect-[4/3]", gradient: "from-stone-900 via-stone-800 to-stone-900" },
  { title: "Heartbird", ratio: "aspect-[16/10]", gradient: "from-stone-400 via-stone-500 to-stone-600" },
  { title: "Floating", ratio: "aspect-[16/9]", gradient: "from-emerald-200 via-teal-300 to-amber-200" },
  { title: "Starlit", ratio: "aspect-[16/10]", gradient: "from-indigo-900 via-blue-900 to-slate-900" },
  { title: "Dream City", ratio: "aspect-[16/10]", gradient: "from-indigo-950 via-purple-900 to-slate-900" },
  { title: "Paper", ratio: "aspect-[16/10]", gradient: "from-stone-100 via-stone-200 to-stone-300" },
];

const rightColumn: Piece[] = [
  { title: "Pantry", ratio: "aspect-[4/3]", gradient: "from-amber-700 via-orange-300 to-yellow-200" },
  { title: "Desk Smoke", ratio: "aspect-[16/9]", gradient: "from-zinc-700 via-zinc-800 to-zinc-900" },
  { title: "Eastern Pulse", ratio: "aspect-[4/5]", gradient: "from-amber-200 via-stone-300 to-stone-500" },
  { title: "Hands & Box", ratio: "aspect-[4/3]", gradient: "from-rose-300 via-rose-400 to-rose-700" },
  { title: "Portrait Doll", ratio: "aspect-[4/5]", gradient: "from-rose-200 via-pink-300 to-violet-400" },
  { title: "Brick Bird", ratio: "aspect-[16/10]", gradient: "from-neutral-700 via-neutral-800 to-neutral-900" },
  { title: "Floating Notes", ratio: "aspect-[16/10]", gradient: "from-indigo-800 via-blue-900 to-slate-900" },
  { title: "Glow Plant", ratio: "aspect-[16/9]", gradient: "from-stone-900 via-stone-800 to-stone-900" },
  { title: "Anchors", ratio: "aspect-[3/4]", gradient: "from-stone-300 via-stone-400 to-stone-600" },
];

function Tile({ piece }: { piece: Piece }) {
  return (
    <div className={`group relative ${piece.ratio} w-full overflow-hidden rounded-sm`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${piece.gradient}`} />
      <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-xs uppercase tracking-widest text-white/70">
        {piece.title}
      </span>
      <span className="pointer-events-none absolute inset-0 bg-[#020E3C]/50 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
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
          <a href="mailto:hello@example.com" className="text-sm text-sky-300 hover:underline">
            hello@example.com →
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
