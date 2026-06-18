import { createFileRoute, Link } from "@tanstack/react-router";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectMetadataTags } from "@/components/ProjectMetadataTags";
import presentationsAsset from "@/assets/work/penlink-presentations.jpg.asset.json";
import img1 from "@/assets/work/pd-penlink.jpg.asset.json";
import img2 from "@/assets/work/pd-pd-2.jpg.asset.json";
import img3 from "@/assets/work/pd-pd-3.jpg.asset.json";
import img4 from "@/assets/work/pd-pd-4.jpg.asset.json";
import img7 from "@/assets/work/pd-pd-7.jpg.asset.json";
import img8 from "@/assets/work/pd-pd-8.jpg.asset.json";
import img9 from "@/assets/work/pd-pd-9.jpg.asset.json";
import img10 from "@/assets/work/pd-pd-10.jpg.asset.json";
import img15 from "@/assets/work/pd-pd-15.jpg.asset.json";
import img16 from "@/assets/work/pd-pd-16.jpg.asset.json";

export const Route = createFileRoute("/project-details")({
  head: () => ({
    meta: [
      { title: "Penlink — Project Details | Danielle Tenne" },
      {
        name: "description",
        content:
          "Penlink case study: design systems, marketing collateral, and exhibition booth design by Danielle Tenne.",
      },
      { property: "og:title", content: "Penlink — Project Details | Danielle Tenne" },
      {
        property: "og:description",
        content:
          "Penlink case study: design systems, marketing collateral, and exhibition booth design.",
      },
      {
        property: "og:url",
        content: "https://pixel-perfect-playbook-185.lovable.app/project-details",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://pixel-perfect-playbook-185.lovable.app/project-details",
      },
    ],
  }),
  component: ProjectDetailsPage,
});

const IMAGES = [img1, img2, img3, img4, presentationsAsset, img7, img8, img9, img10, img15, img16];

function ProjectDetailsPage() {
  return (
    <div className="min-h-screen bg-white text-[#0a1b4d] [&_a]:text-[#757575] [&_a:hover]:text-[#4D72FA] [&_button]:text-[#757575] [&_button:hover]:text-[#4D72FA]">
      <Header />

      <main className="px-10 md:px-[120px]">
        <div className="grid grid-cols-1 gap-12 pt-24 pb-12 md:grid-cols-12">
          {/* LEFT — sticky metadata */}
          <aside className="md:col-span-4 md:sticky md:top-28 self-start h-fit">
            <Link to="/" className="text-xs">
              ← Back
            </Link>

            <h1 className="mt-6 text-5xl font-light tracking-tight text-[#0a1b4d] md:text-6xl">
              Penlink
            </h1>

            <div className="mt-4">
              <ProjectMetadataTags />
            </div>

            <p className="mt-6 text-sm leading-relaxed text-[#0a1b4d]/80">
              Designed a wide range of brand and marketing assets, including
              presentations, web pages, social media visuals, wall graphics,
              and printed materials.
            </p>

          </aside>

          {/* RIGHT — images only */}
          <div className="space-y-6 md:col-span-8">
            {IMAGES.map((asset, idx) => (
              <img
                key={idx}
                src={asset.url}
                alt=""
                className="w-full rounded-none border-[0.5px] border-[#D7D7D1]"
              />
            ))}
          </div>
        </div>
      </main>

      {/* Contact band */}
      <section className="bg-[#0a1b4d] py-24 text-center text-white">
        <h2 className="text-5xl font-bold md:text-6xl">Contact me</h2>
        <a
          href="mailto:tenne.danielle@gmail.com"
          className="mt-6 inline-block text-sm underline underline-offset-4"
        >
          tenne.danielle@gmail.com
        </a>
      </section>

      <Footer />
    </div>
  );
}
