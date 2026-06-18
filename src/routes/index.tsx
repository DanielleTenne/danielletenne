import { createFileRoute, Link } from "@tanstack/react-router";
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


const artRow1 = [
  { title: "Garden Keys", bg: "bg-emerald-100", w: "md:col-span-3" },
  { title: "Eastern Pulse", bg: "bg-amber-50", w: "md:col-span-3" },
  { title: "Portrait Study", bg: "bg-stone-200", w: "md:col-span-3" },
  { title: "Night Sky", bg: "bg-slate-700", w: "md:col-span-3" },
];

const artRow2 = [
  { title: "Black Trees", bg: "bg-gray-100", w: "md:col-span-3" },
  { title: "Jars on Shelf", bg: "bg-yellow-200", w: "md:col-span-3" },
  { title: "Anchors", bg: "bg-stone-100", w: "md:col-span-3" },
  { title: "Shadow", bg: "bg-slate-900", w: "md:col-span-3" },
];

const artRow3 = [
  { title: "Hearts", bg: "bg-stone-300", w: "md:col-span-3" },
  { title: "Stone Wall", bg: "bg-zinc-400", w: "md:col-span-3" },
  { title: "Bricks", bg: "bg-rose-200", w: "md:col-span-3" },
  { title: "Flow", bg: "bg-teal-300", w: "md:col-span-3" },
];

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

      {/* Art Playground */}
      <section id="art" className="bg-[#f3f3f1] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-4xl font-extrabold leading-tight text-stone-800 md:text-5xl">
            Art<br />Playground
          </h2>

          {[artRow1, artRow2, artRow3].map((row, i) => (
            <div key={i} className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-12">
              {row.map((item) => (
                <div
                  key={item.title}
                  className={`${item.bg} ${item.w} flex h-40 items-center justify-center rounded-sm text-sm text-stone-600 md:h-48`}
                >
                  {item.title}
                </div>
              ))}
            </div>
          ))}

          <div className="mt-12 flex justify-center">
            <a
              href="#"
              className="border border-[#0a1b4d] px-6 py-2 text-xs text-[#0a1b4d] hover:bg-[#0a1b4d] hover:text-white"
            >
              View Projects →
            </a>
          </div>
        </div>
      </section>

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
