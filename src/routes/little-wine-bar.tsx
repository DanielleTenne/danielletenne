import { createFileRoute } from "@tanstack/react-router";
import { ProjectDetailsTemplate } from "@/components/ProjectDetailsTemplate";

const TITLE = "Little wine bar";
const DESC = "Branding for a wine bar in Karkur. Designed at Craft studio.";
const URL = "https://pixel-perfect-playbook-185.lovable.app/little-wine-bar";

export const Route = createFileRoute("/little-wine-bar")({
  head: () => ({
    meta: [
      { title: `${TITLE} — Project | Danielle Tenne` },
      { name: "description", content: DESC },
      { property: "og:title", content: `${TITLE} — Project | Danielle Tenne` },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: () => (
    <ProjectDetailsTemplate
      title={TITLE}
      tags={["Branding & Identity", "Logo design", "Illustration", "Brand guidelines", "Print collateral"]}
      description={DESC}
    />
  ),
});
