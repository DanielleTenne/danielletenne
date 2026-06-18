import { createFileRoute } from "@tanstack/react-router";
import { ProjectDetailsTemplate } from "@/components/ProjectDetailsTemplate";

const TITLE = "Little wine bar";
const DESC = "A comprehensive visual identity and branding project for \"Little Wine Bar,\" crafted to convey an intimate, artisanal, and sophisticated hospitality experience. The creative direction seamlessly pairs bespoke, whimsical character illustrations with a playful yet refined custom typography system. A rich, elegant color palette of deep plum, sage green, and soft cream was curated to establish an inviting, boutique atmosphere. This cohesive brand language was meticulously translated across multiple physical touchpoints, including environmental window graphics, branded staff apparel, and custom menu designs.";
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
