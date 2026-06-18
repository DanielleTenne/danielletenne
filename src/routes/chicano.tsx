import { createFileRoute } from "@tanstack/react-router";
import { ProjectDetailsTemplate } from "@/components/ProjectDetailsTemplate";
import chicano1 from "@/assets/work/chicano-1.jpeg.asset.json";
import chicano2 from "@/assets/work/chicano-2.jpg.asset.json";
import chicano3 from "@/assets/work/chicano-3.jpeg.asset.json";
import chicano4 from "@/assets/work/chicano-4.jpeg.asset.json";
import chicano5 from "@/assets/work/chicano-5.jpeg.asset.json";
import chicano6 from "@/assets/work/chicano-6.jpeg.asset.json";
import chicano7 from "@/assets/work/chicano-7.jpeg.asset.json";

const TITLE = "CHICANO";
const DESC = "Taco Revolution~ Branding for a Mexican food truck. Designed at Craft studio.";
const URL = "https://pixel-perfect-playbook-185.lovable.app/chicano";
const IMAGES = [chicano1, chicano2, chicano3, chicano4, chicano5, chicano6, chicano7];

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
      images={IMAGES}
    />
  ),
});

