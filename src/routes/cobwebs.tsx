import { createFileRoute } from "@tanstack/react-router";
import { ProjectDetailsTemplate } from "@/components/ProjectDetailsTemplate";

const TITLE = "Cobwebs";
const DESC = "Refreshed and refined the existing brand identity, creating a wide range of digital and print assets, including website design, print materials, merchandise, presentations, and exhibition booths.";
const URL = "https://pixel-perfect-playbook-185.lovable.app/cobwebs";

export const Route = createFileRoute("/cobwebs")({
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
      tags={["Brand identity", "Web design", "Marketing collateral", "Brand guidelines"]}
      description={DESC}
    />
  ),
});
