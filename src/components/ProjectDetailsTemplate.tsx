import { Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectMetadataTags } from "@/components/ProjectMetadataTags";
import penlink2 from "@/assets/work/penlink2.jpg.asset.json";
import penlink3 from "@/assets/work/penlink3.jpg.asset.json";
import penlink4 from "@/assets/work/penlink4.jpg.asset.json";
import p3 from "@/assets/work/p_3.jpg.asset.json";
import p4 from "@/assets/work/p_4.jpg.asset.json";
import p6 from "@/assets/work/p_6.jpg.asset.json";
import p7 from "@/assets/work/p_7.jpg.asset.json";

const IMAGES = [penlink2, penlink3, penlink4, p3, p4, p6, p7];

export function ProjectDetailsTemplate({
  title,
  tags,
  description,
}: {
  title: string;
  tags: string[];
  description: string;
}) {
  return (
    <div className="min-h-screen bg-white text-[#0a1b4d] [&_a]:text-[#757575] [&_a:hover]:text-[#4D72FA] [&_button]:text-[#757575] [&_button:hover]:text-[#4D72FA]">
      <Header />

      <main className="px-10 md:px-[120px]">
        <div className="grid grid-cols-1 gap-12 pt-24 pb-12 md:grid-cols-12">
          <aside className="md:col-span-4 md:sticky md:top-28 self-start h-fit">
            <Link to="/" className="text-xs">
              ← Back
            </Link>

            <h1 className="mt-6 text-5xl font-light tracking-tight text-[#0a1b4d] md:text-6xl">
              {title}
            </h1>

            <div className="mt-4">
              <ProjectMetadataTags tags={tags} />
            </div>

            <p className="mt-6 text-sm leading-relaxed text-[#0a1b4d]/80">
              {description}
            </p>
          </aside>

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
