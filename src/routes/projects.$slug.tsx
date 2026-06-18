import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectMetadataTags } from "@/components/ProjectMetadataTags";
import { projectsBySlug, type Project } from "@/lib/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projectsBySlug[params.slug];
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => {
    const p = loaderData as Project | undefined;
    const title = p ? `${p.title} — Project | Danielle Tenne` : "Project | Danielle Tenne";
    const desc = p?.description ?? "";
    const url = `https://pixel-perfect-playbook-185.lovable.app/projects/${p?.slug ?? ""}`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: url },
        ...(p?.image ? [{ property: "og:image", content: p.image }] : []),
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen bg-white text-[#0a1b4d]">
      <Header />
      <div className="mx-auto max-w-7xl px-6 py-32 text-center">
        <h1 className="text-3xl font-light">Project not found</h1>
        <Link to="/" className="mt-6 inline-block text-sm text-[#0a1b4d]/60 hover:opacity-60">
          ← Back home
        </Link>
      </div>
      <Footer />
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="p-10 text-sm text-red-600">{error.message}</div>
  ),
  component: ProjectPage,
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

function ProjectPage() {
  const project = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-white text-[#0a1b4d]">
      <Header />

      <main className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 pt-24 pb-12 md:grid-cols-12">
          <aside className="md:col-span-4 md:sticky md:top-28 self-start h-fit">
            <Link to="/" className="text-xs text-[#0a1b4d]/60 hover:opacity-60">
              ← Back
            </Link>

            <h1 className="mt-6 text-5xl font-light tracking-tight md:text-6xl">
              {project.title}
            </h1>

            <div className="mt-4">
              <ProjectMetadataTags tags={project.tags} />
            </div>

            <p className="mt-6 text-sm leading-relaxed text-[#0a1b4d]/80">
              {project.description}
            </p>
          </aside>

          <div className="space-y-16 md:col-span-8">
            <div className="w-full overflow-hidden rounded-sm bg-stone-100">
              <img
                src={project.image}
                alt={project.title}
                className="h-auto w-full object-contain"
              />
            </div>

            {project.sections.map((section) => (
              <section key={section.title} className="space-y-4">
                <h2 className="text-lg font-semibold text-[#0a1b4d]">{section.title}</h2>
                <Placeholder label={section.title} ratio={section.ratio} />
                {section.body && (
                  <p className="text-sm leading-relaxed text-[#0a1b4d]/80">{section.body}</p>
                )}
              </section>
            ))}
          </div>
        </div>
      </main>

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
