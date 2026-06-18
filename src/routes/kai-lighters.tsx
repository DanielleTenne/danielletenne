import { createFileRoute } from "@tanstack/react-router";
import { ProjectDetailsTemplate } from "@/components/ProjectDetailsTemplate";

const TITLE = "Kai Lighters";
const DESC = "Branding design Kai-Lighters, the premium paid upgrade for Kai. Kai is a conversational AI for young people's well-being.";
const URL = "https://pixel-perfect-playbook-185.lovable.app/kai-lighters";

export const Route = createFileRoute("/kai-lighters")({
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
      tags={["Branding", "Logo design", "Illustration", "Motion design"]}
      description={DESC}
    />
  ),
});
