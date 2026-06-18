import { createFileRoute } from "@tanstack/react-router";
import { ProjectDetailsTemplate } from "@/components/ProjectDetailsTemplate";
import logo from "@/assets/work/n-bakery-logo.jpg.asset.json";
import logoVariations from "@/assets/work/n-bakery-logo-variations.jpg.asset.json";
import windowDecal from "@/assets/work/n-bakery-window-decal.jpg.asset.json";
import storefront from "@/assets/work/n-bakery-storefront.jpg.asset.json";
import packagingGrid from "@/assets/work/n-bakery-packaging-grid.jpg.asset.json";
import character from "@/assets/work/n-bakery-character.jpg.asset.json";
import paperBags from "@/assets/work/n-bakery-paper-bags.jpg.asset.json";
import elements from "@/assets/work/n-bakery-elements.jpg.asset.json";
import patterns from "@/assets/work/n-bakery-patterns.jpg.asset.json";
import tinGraphics from "@/assets/work/n-bakery-tin-graphics.jpg.asset.json";

const TITLE = "N Bakery";
const DESC = "Designed a wide range of brand and marketing assets, including presentations, web pages, social media visuals, wall graphics, and printed materials.";
const URL = "https://pixel-perfect-playbook-185.lovable.app/n-bakery";

const IMAGES = [logo, logoVariations, windowDecal, storefront, packagingGrid, character, paperBags, elements, patterns, tinGraphics];

export const Route = createFileRoute("/n-bakery")({
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
      tags={["Design systems", "Marketing collateral", "Exhibition booth design"]}
      description={DESC}
      images={IMAGES}
    />
  ),
});
