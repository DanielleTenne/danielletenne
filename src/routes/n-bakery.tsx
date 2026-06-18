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
import croissants from "@/assets/work/n-bakery-croissants.jpg.asset.json";
import coffeeCup from "@/assets/work/n-bakery-coffee-cup.jpg.asset.json";
import takeawayCup from "@/assets/work/n-bakery-takeaway-cup.jpg.asset.json";

const TITLE = "N Bakery";
const DESC = "A comprehensive visual identity and rebranding project for \"N Bakery\", the premium boutique sub-brand of the established \"Ma'afe Ne'eman\" bakery chain. The project was driven by the vision to create a distinct visual narrative that seamlessly bridges the authentic warmth of artisanal baking traditions with a sophisticated, high-end contemporary aesthetic.\n\nThe creative scope encompassed developing an entire brand ecosystem to ensure a cohesive and immersive customer journey across all touchpoints. This included crafting a versatile and dynamic logo system, custom typography, bespoke character illustrations, and signature repeating patterns. The identity was then meticulously applied to premium packaging design, such as artisanal pastry bags, takeaway coffee cups, and custom wrapping, as well as physical environmental graphics and window decals, creating a unified, memorable, and timeless brand experience.";
const URL = "https://pixel-perfect-playbook-185.lovable.app/n-bakery";

const IMAGES = [logo, logoVariations, windowDecal, storefront, packagingGrid, character, paperBags, elements, patterns, tinGraphics, croissants, coffeeCup, takeawayCup];

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
      tags={["Branding & Identity", "Illustration", "Logo design", "Marketing collateral", "Packaging Design"]}
      description={DESC}
      images={IMAGES}
    />
  ),
});
