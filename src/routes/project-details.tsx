import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectMetadataTags } from "@/components/ProjectMetadataTags";

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

function Placeholder({ label, ratio = "aspect-[4/3]" }: { label: string; ratio?: string }) {
  return (
    <div
      className={`${ratio} w-full overflow-hidden rounded-sm bg-gradient-to-br from-[#eaf0fb] via-[#dde6f7] to-[#c8d4ee] flex items-center justify-center text-[#0a1b4d]/40 text-xs tracking-widest uppercase`}
    >
      {label}
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold text-[#0a1b4d]">{title}</h2>
      {children}
    </section>
  );
}

function ProjectDetailsPage() {
  return (
    <div className="min-h-screen bg-white text-[#0a1b4d]">
      <Header />

      <main className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 pt-24 pb-12 md:grid-cols-12">
          {/* LEFT — sticky metadata */}
          <aside className="md:col-span-4 md:sticky md:top-28 self-start h-fit">
            <Link
              to="/"
              className="text-xs text-[#0a1b4d]/60 hover:opacity-60"
            >
              ← Back
            </Link>

            <h1 className="mt-6 text-5xl font-light tracking-tight md:text-6xl">
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

            <dl className="mt-8 space-y-4 text-sm">
              <div>
                <dt className="text-[11px] uppercase tracking-widest text-[#0a1b4d]/50">
                  My Role
                </dt>
                <dd className="mt-1 text-[#0a1b4d]">
                  Lead Visual Designer
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-widest text-[#0a1b4d]/50">
                  Tools Used
                </dt>
                <dd className="mt-1 text-[#0a1b4d]">
                  Figma, Adobe Illustrator, Photoshop, InDesign
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-widest text-[#0a1b4d]/50">
                  Year
                </dt>
                <dd className="mt-1 text-[#0a1b4d]">2024</dd>
              </div>
            </dl>

            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#0a1b4d] px-6 py-3 text-xs font-medium uppercase tracking-widest text-[#0a1b4d] transition hover:bg-[#0a1b4d] hover:text-white"
            >
              Visit Website →
            </a>
          </aside>

          {/* RIGHT — scrollable content */}
          <div className="space-y-16 md:col-span-8">
            <Section title="Brand book">
              <Placeholder label="Brand book cover" ratio="aspect-[16/10]" />
              <div className="grid grid-cols-3 gap-3">
                <Placeholder label="Palette" ratio="aspect-square" />
                <Placeholder label="Type" ratio="aspect-square" />
                <Placeholder label="Logo" ratio="aspect-square" />
              </div>
              <p className="text-sm leading-relaxed text-[#0a1b4d]/80">
                Established a comprehensive visual identity covering color
                systems, typography hierarchy, logo applications, and brand
                voice — providing a flexible foundation across digital and
                print touchpoints.
              </p>
            </Section>

            <Section title="Presentations">
              <Placeholder label="Presentation deck" ratio="aspect-[16/10]" />
              <p className="text-sm leading-relaxed text-[#0a1b4d]/80">
                Built a modular slide library used across sales, conferences,
                and internal communications. Each layout balances dense
                information with clear, branded visual rhythm.
              </p>
            </Section>

            <Section title="Printable">
              <Placeholder label="Brochure spread" ratio="aspect-[16/9]" />
            </Section>

            <Section title="Pages">
              <Placeholder label="One-pagers" ratio="aspect-[4/3]" />
              <p className="text-sm leading-relaxed text-[#0a1b4d]/80">
                A consistent typographic system across product one-pagers
                made it easy for the team to spin up new pieces without
                breaking visual cohesion.
              </p>
            </Section>

            <Section title="Booth design">
              <Placeholder label="Booth render" ratio="aspect-[16/10]" />
            </Section>

            <Section title="Exhibition Booth Design">
              <Placeholder label="Booth on-site" ratio="aspect-[16/10]" />
              <p className="text-sm leading-relaxed text-[#0a1b4d]/80">
                Designed a full exhibition booth experience — from large-scale
                wall graphics to printed handouts — translating the digital
                brand into a physical environment.
              </p>
            </Section>

            <Section title="Giveaways">
              <div className="grid grid-cols-2 gap-4">
                <Placeholder label="Socks" ratio="aspect-square" />
                <Placeholder label="Coaster" ratio="aspect-square" />
              </div>
            </Section>
          </div>
        </div>
      </main>

      {/* Contact band */}
      <section className="bg-[#0a1b4d] py-24 text-center text-white">
        <h2 className="text-5xl font-bold md:text-6xl">Contact me</h2>
        <a
          href="mailto:tenne.danielle@gmail.com"
          className="mt-6 inline-block text-sm text-[#7fa8ff] underline underline-offset-4 hover:opacity-80"
        >
          tenne.danielle@gmail.com
        </a>
      </section>

      <Footer />
    </div>
  );
}
