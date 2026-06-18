import { createFileRoute } from "@tanstack/react-router";
import { ProjectDetailsTemplate } from "@/components/ProjectDetailsTemplate";
import banner from "@/assets/work/insaights-banner.jpg.asset.json";
import logos from "@/assets/work/insaights-logos.jpg.asset.json";
import landing from "@/assets/work/insaights-landing.jpg.asset.json";
import group from "@/assets/work/insaights-group.jpg.asset.json";
import print from "@/assets/work/insaights-print.jpg.asset.json";
import social from "@/assets/work/insaights-social.jpg.asset.json";

const TITLE = "InsAIghts";
const DESC = "A comprehensive brand identity and web design project for InsAIghts Academy, a digital research and intelligence training academy by Penlink. The visual language was meticulously crafted to convey a highly technical, secure, and cutting-edge aesthetic centered around data and AI. The creative scope involved developing a versatile logo system, designing a responsive, high-converting landing page, and establishing a cohesive suite of marketing collateral, including printed brochures and digital assets optimized for social media.";
const URL = "https://pixel-perfect-playbook-185.lovable.app/insaights";

const IMAGES = [banner, logos, landing, group, print, social];

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
      images={IMAGES}
    />
  ),
});
