import { createFileRoute } from "@tanstack/react-router";
import { ProjectDetailsTemplate } from "@/components/ProjectDetailsTemplate";
import chicano1 from "@/assets/work/chicano-1.jpeg.asset.json";
import chicano2 from "@/assets/work/chicano-2.jpg.asset.json";
import chicano3 from "@/assets/work/chicano-3.jpeg.asset.json";
import chicano4 from "@/assets/work/chicano-4.jpeg.asset.json";
import chicano5 from "@/assets/work/chicano-5.jpeg.asset.json";
import chicano6 from "@/assets/work/chicano-6.jpeg.asset.json";
import chicano7 from "@/assets/work/chicano-7.jpeg.asset.json";
import chicano8 from "@/assets/work/chicano-8.jpeg.asset.json";
import chicano9 from "@/assets/work/chicano-9.jpeg.asset.json";
import chicano10 from "@/assets/work/chicano-10.jpeg.asset.json";
import chicano11 from "@/assets/work/chicano-11.jpeg.asset.json";
import chicano12 from "@/assets/work/chicano-12.jpeg.asset.json";
import chicano13 from "@/assets/work/chicano-13.jpeg.asset.json";
import chicano14 from "@/assets/work/chicano-14.jpeg.asset.json";
import chicano15 from "@/assets/work/chicano-15.jpeg.asset.json";
import chicano16 from "@/assets/work/chicano-16.jpeg.asset.json";
import chicano17 from "@/assets/work/chicano-17.jpeg.asset.json";

const TITLE = "CHICANO";
const DESC = "Taco Revolution~ Branding for a Mexican food truck. Designed at Craft studio.";
const URL = "https://pixel-perfect-playbook-185.lovable.app/chicano";
const IMAGES = [chicano1, chicano2, chicano3, chicano4, chicano5, chicano6, chicano7, chicano8, chicano9, chicano10, chicano11, chicano12, chicano13, chicano14, chicano15, chicano16, chicano17];

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

