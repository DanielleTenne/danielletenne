import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import portraitAsset from "../assets/about-portrait.gif.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Danielle Tenne" },
      { name: "description", content: "I'm Danielle Tenne, visual and marketing designer, based in Herzliya, Israel." },
      { property: "og:title", content: "About — Danielle Tenne" },
      { property: "og:description", content: "I'm Danielle Tenne, visual and marketing designer, based in Herzliya, Israel." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f3f3f1] font-sans text-[#0a1b4d]">
      <Header />

      {/* Bio */}
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl lg:text-[3.5rem]">
              I'm Danielle Tenne,<br />
              visual and marketing designer,<br />
              based in Herzliya, Israel.
            </h1>
            <div className="mt-8 space-y-1 text-sm leading-relaxed text-[#0a1b4d]">
              <p>I'm a multidisciplinary designer, a creative problem-solver,</p>
              <p>with a background in illustration and motion design.</p>
              <p>I graduated as a Visual Communication Designer in July 2021.</p>
              <p>I love visual storytelling, and especially enjoy bringing creative concepts to life,</p>
              <p>from the idea to the final touch.</p>
            </div>
            <div className="mt-8">
              <p className="text-lg font-bold">Let's talk!</p>
              <a
                href="mailto:tenne.dani@gmail.com"
                className="mt-1 inline-block text-sm text-[#2563eb] underline hover:opacity-80"
              >
                tenne.dani@gmail.com
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src={portraitAsset.url}
              alt="Danielle Tenne portrait"
              className="h-auto w-full max-w-md object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Contact me */}
      <section className="bg-[#0a1b4d] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="mb-6 text-5xl font-extrabold leading-tight md:text-6xl lg:text-7xl">
            Contact me
          </h2>
          <a
            href="mailto:tenne.dani@gmail.com"
            className="inline-flex items-center gap-2 text-sm text-sky-300 hover:underline"
          >
            tenne.dani@gmail.com
            <span>→</span>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
