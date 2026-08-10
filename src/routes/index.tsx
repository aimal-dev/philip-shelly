import { createFileRoute } from "@tanstack/react-router";

import {
  Discover,
  FeaturedBusiness,
  Footer,
  Header,
  Hero,
  InstagramStrip,
  NewsletterSection,
  PodcastSection,
  Stories,
  StorySection,
} from "@/components/home/sections";


const TITLE = "Philip & Shelly — Faith, Family & Front Royal";
const DESCRIPTION =
  "Podcast, community stories, local businesses, real estate and financial insights from Philip & Shelly in Front Royal, Virginia.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <PodcastSection />
        <Discover />
        <StorySection />
        <FeaturedBusiness />
        <NewsletterSection />
        <Stories />
        <InstagramStrip />
      </main>
      <Footer />
    </div>
  );
}
