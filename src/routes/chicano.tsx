import { createFileRoute } from "@tanstack/react-router";
import { ProjectDetailsTemplate } from "@/components/ProjectDetailsTemplate";

const TITLE = "CHICANO";
const DESC = "Taco Revolution~ Branding for a Mexican food truck. Designed at Craft studio.";
const URL = "https://pixel-perfect-playbook-185.lovable.app/chicano";

export const Route = createFileRoute("/chicano")({
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
      tags={["Branding & Identity", "Logo design", "Illustration", "Print collateral"]}
      description={DESC}
    />
  ),
});
