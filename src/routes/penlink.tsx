import { createFileRoute } from "@tanstack/react-router";
import { ProjectDetailsTemplate } from "@/components/ProjectDetailsTemplate";

const TITLE = "Penlink";
const DESC = "Designed a wide range of brand and marketing assets, including presentations, web pages, social media visuals, wall graphics, and printed materials.";
const URL = "https://pixel-perfect-playbook-185.lovable.app/penlink";

export const Route = createFileRoute("/penlink")({
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
      tags={["Design systems", "Marketing collateral", "Exhibition booth design"]}
      description={DESC}
    />
  ),
});
