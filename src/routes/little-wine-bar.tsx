import { createFileRoute } from "@tanstack/react-router";
import { ProjectDetailsTemplate } from "@/components/ProjectDetailsTemplate";
import lwb7 from "@/assets/work/lwb7.jpg.asset.json";
import lwb2 from "@/assets/work/lwb2.jpg.asset.json";
import lwb3 from "@/assets/work/lwb3.jpg.asset.json";
import lwb14 from "@/assets/work/lwb14.jpg.asset.json";
import lwb13 from "@/assets/work/lwb13.jpg.asset.json";
import lwb6 from "@/assets/work/lwb6.jpg.asset.json";
import lwb9 from "@/assets/work/lwb9.jpg.asset.json";
import lwb8 from "@/assets/work/lwb8.jpg.asset.json";
import lwb12 from "@/assets/work/lwb12.jpg.asset.json";
import lwb11 from "@/assets/work/lwb11.jpg.asset.json";
import badge from "@/assets/work/little_wine_bar_grid.jpg.asset.json";

const IMAGES = [lwb7, lwb2, lwb3, lwb14, lwb13, lwb6, lwb9, lwb8, lwb12, lwb11, badge];

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
      images={IMAGES}
    />
  ),
});
