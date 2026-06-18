import { createFileRoute } from "@tanstack/react-router";
import { ProjectDetailsTemplate } from "@/components/ProjectDetailsTemplate";
import social from "@/assets/work/kai-social.jpg.asset.json";
import stickers from "@/assets/work/kai-stickers.jpg.asset.json";
import miniLogos from "@/assets/work/kai-mini-logos.jpg.asset.json";
import breathingGif from "@/assets/work/kai-breathing.gif.asset.json";
import sleepGif from "@/assets/work/kai-sleep.gif.asset.json";
import gratitudeGif from "@/assets/work/kai-gratitude.gif.asset.json";
import productAssets from "@/assets/work/kai-product-assets.jpg.asset.json";

const TITLE = "Kai.ai";
const DESC = "A comprehensive brand extension and digital asset design for Kai.ai, an AI-powered wellness and mindfulness companion. The project focused on translating psychological tools like gratitude, breathing exercises, and journaling into an engaging, vibrant, and youth-friendly visual experience. The creative scope involved crafting a cheerful library of custom stickers, bespoke educational mini-icons, and an extensive suite of colorful social media graphics. Every asset was meticulously designed to establish an uplifting, approachable, and deeply resonant brand presence across all digital networks.";
const URL = "https://pixel-perfect-playbook-185.lovable.app/kai-ai";

const IMAGES = [social, stickers, miniLogos, breathingGif, sleepGif, gratitudeGif, productAssets];

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
      tags={["Brand identity", "Brand Extension", "Illustration", "Motion design"]}
      description={DESC}
      images={IMAGES}
    />
  ),
});
