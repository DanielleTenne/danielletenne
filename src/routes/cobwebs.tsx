import { createFileRoute } from "@tanstack/react-router";
import { ProjectDetailsTemplate } from "@/components/ProjectDetailsTemplate";
import brandbook from "@/assets/work/cobwebs-brandbook.jpg.asset.json";
import website from "@/assets/work/cobwebs-website.jpg.asset.json";
import inner from "@/assets/work/cobwebs-inner.jpg.asset.json";
import stickerBlue from "@/assets/work/cobwebs-sticker-blue.jpg.asset.json";
import stickerOrange from "@/assets/work/cobwebs-sticker-orange.jpg.asset.json";
import dog from "@/assets/work/cobwebs-dog.jpg.asset.json";
import social from "@/assets/work/cobwebs-social.jpg.asset.json";
import brochure from "@/assets/work/cobwebs-brochure.jpg.asset.json";
import boothFront from "@/assets/work/cobwebs-booth-front.jpg.asset.json";
import boothTop from "@/assets/work/cobwebs-booth-top.jpg.asset.json";
import boothKiosk from "@/assets/work/cobwebs-booth-kiosk.jpg.asset.json";
import boothStacked from "@/assets/work/cobwebs-booth-stacked.jpg.asset.json";

const TITLE = "Cobwebs";
const DESC = "Refreshed and refined the existing brand identity, creating a wide range of digital and print assets, including website design, print materials, merchandise, presentations, and exhibition booths.";
const URL = "https://pixel-perfect-playbook-185.lovable.app/cobwebs";
const IMAGES = [
  brandbook,
  website,
  inner,
  stickerBlue,
  stickerOrange,
  dog,
  social,
  brochure,
  boothFront,
  boothTop,
  boothKiosk,
  boothStacked,
] as { url: string }[];

export const Route = createFileRoute("/cobwebs")({
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
      tags={["Brand identity", "Web design", "Marketing collateral", "Brand guidelines"]}
      description={DESC}
      images={IMAGES}
    />
  ),
});
