import { createFileRoute } from "@tanstack/react-router";
import { ProjectDetailsTemplate } from "@/components/ProjectDetailsTemplate";

const TITLE = "Kai.ai";
const DESC = "A comprehensive brand extension and digital asset design for Kai.ai, an AI-powered wellness and mindfulness companion. The project focused on translating psychological tools like gratitude, breathing exercises, and journaling into an engaging, vibrant, and youth-friendly visual experience. The creative scope involved crafting a cheerful library of custom stickers, bespoke educational mini-icons, and an extensive suite of colorful social media graphics. Every asset was meticulously designed to establish an uplifting, approachable, and deeply resonant brand presence across all digital networks.";
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
