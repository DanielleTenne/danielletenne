import { createFileRoute } from "@tanstack/react-router";
import { ProjectDetailsTemplate } from "@/components/ProjectDetailsTemplate";

const TITLE = "Kai.ai";
const DESC = "Designing and renewing Kai's visual language. Kai is a conversational AI for young people's well-being.";
const URL = "https://pixel-perfect-playbook-185.lovable.app/kai-ai";

export const Route = createFileRoute("/kai-ai")({
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
      tags={["Brand identity", "Illustration", "Motion design"]}
      description={DESC}
    />
  ),
});
