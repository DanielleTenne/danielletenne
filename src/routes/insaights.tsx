import { createFileRoute } from "@tanstack/react-router";
import { ProjectDetailsTemplate } from "@/components/ProjectDetailsTemplate";

const TITLE = "InsAIghts";
const DESC = "Logo and visual design for InsAIghts Academy, A digital research and intelligence training academy by Penlink.";
const URL = "https://pixel-perfect-playbook-185.lovable.app/insaights";

export const Route = createFileRoute("/insaights")({
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
      tags={["Branding", "Logo design", "Web design"]}
      description={DESC}
    />
  ),
});
