import { createFileRoute } from "@tanstack/react-router";
import { ProjectDetailsTemplate } from "@/components/ProjectDetailsTemplate";
import brandbook from "@/assets/work/kai-brandbook.jpg.asset.json";
import logo from "@/assets/work/kai-logo.jpg.asset.json";
import appicon from "@/assets/work/kai-appicon.jpg.asset.json";
import animation from "@/assets/work/kai-animation.gif.asset.json";

import phones from "@/assets/work/kai-phones.jpg.asset.json";
import tshirts from "@/assets/work/kai-tshirts.jpg.asset.json";
import beanie from "@/assets/work/kai-beanie.jpg.asset.json";
import pins from "@/assets/work/kai-pins.jpg.asset.json";

const TITLE = "Kai Lighters";
const DESC = "Branding design Kai-Lighters, the premium paid upgrade for Kai. Kai is a conversational AI for young people's well-being.";
const URL = "https://pixel-perfect-playbook-185.lovable.app/kai-lighters";

const IMAGES = [logo, brandbook, appicon, animation, banners, phones, tshirts, beanie, pins];

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
      images={IMAGES}
    />
  ),
});
