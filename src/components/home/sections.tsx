import {
  ArrowRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Mountain,
  Menu,
  X,
  Phone,
  Play,
  ShoppingBag,
  UtensilsCrossed,
  Youtube,
  Home as HomeIcon,
  Check,
} from "lucide-react";
import { useState } from "react";

import { Eyebrow, OutlineButton, SolidButton, TextLink, Wordmark } from "./primitives";
import heroValley from "@/assets/hero-valley.jpg.asset.json";
import couple from "@/assets/couple.png";
import podcast from "@/assets/podcast.jpg";
import business from "@/assets/business.jpg";
import catLiving from "@/assets/cat-living.jpg";
import catEat from "@/assets/cat-eat.jpg";
import catShop from "@/assets/cat-shop.jpg";
import catEvents from "@/assets/cat-events.jpg";
import catExplore from "@/assets/cat-explore.jpg";
import compass from "@/assets/compass.jpg";
import stayAsset from "@/assets/stay.png.asset.json";
import eventsAsset from "@/assets/dinner-events.png.asset.json";
import eatDrinkAsset from "@/assets/eat-drink.png.asset.json";
import porchStayAsset from "@/assets/stay-porch.png.asset.json";
import knottyPineAsset from "@/assets/knotty-pine.png.asset.json";



const NAV = [
  "Podcast",
  "Real Estate",
  "Events",
  "About Us",
  "Contact",
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-4">
        <Wordmark />
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a
              key={item}
              href="#"
              className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-foreground/80 transition-colors hover:text-accent"
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <SolidButton>Live in Shenandoah</SolidButton>
        </div>
        <button
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
          className="p-2 text-foreground lg:hidden"
        >
          <Menu className="size-6" />
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-background lg:hidden">
          <div className="flex items-center justify-between border-b border-border px-6 py-4">
            <Wordmark />
            <button
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="p-2 text-foreground"
            >
              <X className="size-6" />
            </button>
          </div>
          <nav className="flex flex-col items-center gap-8 px-6 py-12">
            {NAV.map((item) => (
              <a
                key={item}
                href="#"
                onClick={() => setMobileOpen(false)}
                className="text-base font-semibold uppercase tracking-[0.14em] text-foreground/80 transition-colors hover:text-accent"
              >
                {item}
              </a>
            ))}
            <SolidButton className="mt-4" onClick={() => setMobileOpen(false)}>
              Live in Shenandoah
            </SolidButton>
          </nav>
        </div>
      )}
    </header>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary">
      <img
        src={heroValley.url}
        alt="Sunset over the Shenandoah river valley in Front Royal"
        width={1920}
        height={1088}
        className="absolute inset-0 size-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/10" />
      <div className="relative mx-auto flex max-w-7xl items-end gap-8 px-6">
        <div className="max-w-xl py-20 md:py-28">
          <h1 className="font-display text-3xl leading-[1.12] text-primary-foreground md:text-4xl lg:text-5xl">
            Rooted in Faith.
            <br />
            Focused on Growth.
            <br />
            Committed to Community.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-primary-foreground/75">
            Informing, inspiring, and strengthening the community we call home.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <SolidButton className="bg-accent hover:bg-accent/90">
              <Play className="size-3.5" /> Watch the Podcast
            </SolidButton>
            <OutlineButton onDark>Discover Front Royal</OutlineButton>
          </div>
        </div>
        <img
          src={couple}
          alt="Philip and Shelly"
          width={1024}
          height={1408}
          className="hidden w-[26rem] shrink-0 self-end object-contain lg:block"
        />
      </div>
    </section>
  );
}

const EPISODES = [
  { ep: "EP 67", title: "The Heart of Local Business" },
  { ep: "EP 66", title: "Financial Freedom: Start Here" },
  { ep: "EP 65", title: "Living Local & Loving It" },
  { ep: "EP 64", title: "Investing in Our Community" },
];

export function PodcastSection() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <Eyebrow>The Latest Conversation</Eyebrow>
        <h2 className="mt-2 text-3xl md:text-4xl">From the Podcast</h2>
        <div className="mt-10 grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <div className="group relative cursor-pointer overflow-hidden">
            <img
              src={podcast}
              alt="Philip and Shelly recording the podcast"
              width={1200}
              height={760}
              loading="lazy"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-0 grid place-items-center">
              <span className="grid size-16 place-items-center rounded-full bg-background/85 transition-transform group-hover:scale-110">
                <Play className="ml-1 size-6 fill-primary text-primary" />
              </span>
            </span>
          </div>
          <div>
            <Eyebrow>Episode 68</Eyebrow>
            <h3 className="mt-2 font-display text-3xl leading-tight md:text-4xl">
              Building a Stronger
              <br />
              Front Royal Together
            </h3>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              We sit down with local leaders and business owners to talk about growth,
              opportunity, and what makes our community so special.
            </p>
            <div className="mt-7">
              <SolidButton>
                Watch Episode <ArrowRight className="size-3.5" />
              </SolidButton>
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center gap-4">
          <button aria-label="Previous episodes" className="text-muted-foreground hover:text-primary">
            <ChevronLeft className="size-5" />
          </button>
          <div className="grid flex-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {EPISODES.map((e) => (
              <article key={e.ep} className="flex cursor-pointer items-center gap-3">
                <div className="relative h-16 w-24 shrink-0 overflow-hidden">
                  <img
                    src={podcast}
                    alt=""
                    loading="lazy"
                    className="size-full object-cover"
                  />
                  <span className="absolute inset-0 grid place-items-center bg-primary/25">
                    <Play className="size-4 fill-background text-background" />
                  </span>
                </div>
                <div>
                  <p className="text-[0.7rem] uppercase tracking-[0.18em] text-accent">{e.ep}</p>
                  <p className="mt-1 text-base leading-snug">{e.title}</p>
                </div>
              </article>
            ))}
          </div>
          <button aria-label="Next episodes" className="text-muted-foreground hover:text-primary">
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

const CATEGORIES = [
  { img: stayAsset.url, title: "Living Here" },
  { img: eatDrinkAsset.url, title: "Eat & Drink" },
  { img: eventsAsset.url, title: "Events" },
  { img: porchStayAsset.url, title: "Stay" },
];



export function Discover() {
  return (
    <section className="bg-sand py-20">
      <div className="mx-auto max-w-7xl px-6">
        <Eyebrow>Explore Front Royal</Eyebrow>
        <h2 className="mt-2 text-3xl md:text-4xl">Discover What Makes Our Community Special</h2>
        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {CATEGORIES.map((c) => (
            <a
              key={c.title}
              href="#"
              className="group block overflow-hidden border border-border bg-card transition-shadow hover:shadow-lg"
            >
              <div className="overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="grid place-items-center bg-card px-3 py-4">
                <span className="text-center text-[0.75rem] font-medium uppercase tracking-[0.2em] text-foreground">
                  {c.title}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}


export function FeaturedBusiness() {
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[1.1fr_1fr]">
        <img
          src={knottyPineAsset.url}
          alt="Knotty Pine restaurant interior"
          width={1200}
          height={800}
          loading="lazy"
          className="h-80 w-full object-cover"
        />
        <div>
          <Eyebrow>Featured Business of the Month</Eyebrow>
          <h2 className="mt-2 text-3xl md:text-4xl">Knotty Pine</h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
            Knotty Pine where everybody knows everybody. One big happy family serving cold beer and great food.
            We would love to see you, so come on down. Enjoy great company and delicious food.
          </p>
          <div className="mt-7">
            <SolidButton>
              Visit Business <ArrowRight className="size-3.5" />
            </SolidButton>
          </div>
        </div>
      </div>
    </section>
  );
}

const STORIES = [
  { tag: "Family Feature", title: "The Johnson Family: Rooted in Front Royal", img: catEvents },
  { tag: "Business Spotlight", title: "Small Business, Big Impact", img: business },
  { tag: "Local History", title: "A Look Back: Front Royal Then & Now", img: catShop },
  { tag: "Community Event", title: "Riverton Fall Festival Highlights", img: catEat },
  { tag: "Volunteer Spotlight", title: "Making a Difference Every Day", img: catLiving },
];

export function Stories() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <Eyebrow>Community Stories</Eyebrow>
          <TextLink>View All Articles</TextLink>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {STORIES.map((s) => (
            <article key={s.title} className="group cursor-pointer border border-border bg-card">
              <div className="overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-36 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <p className="eyebrow">{s.tag}</p>
                <h3 className="mt-2 font-display text-lg leading-snug">{s.title}</h3>
                <div className="mt-4">
                  <TextLink>Read More</TextLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}



export function StorySection() {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="bg-secondary">
          <div className="grid lg:grid-cols-1">
            <img
              src={couple}
              alt="Philip and Shelly"
              loading="lazy"
              className="size-full max-h-80 object-contain object-bottom lg:hidden"
            />
            <div className="p-8 lg:p-12">
              <Eyebrow>Get to Know Us</Eyebrow>
              <h3 className="mt-2 font-display text-3xl md:text-4xl">Our Story</h3>
              <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-muted-foreground">
                We're Philip & Shelly - Our mission is to inform, inspire, and strengthen the community
                we call home.
              </p>
              <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-muted-foreground">
                Through this platform, we share meaningful stories, helpful resources, and honest
                conversations designed to help the people and places around us thrive.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <SolidButton>Learn More About Us</SolidButton>
                <OutlineButton>Connect With Us</OutlineButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function NewsletterSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    referral: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.interest || !form.referral) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setForm({ name: "", email: "", phone: "", interest: "", referral: "" });
  };

  return (
    <section className="relative overflow-hidden bg-primary py-16">
      <div className="mx-auto max-w-7xl px-6">
        <img
          src={compass}
          alt=""
          loading="lazy"
          className="absolute inset-y-0 right-0 h-full w-1/2 object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent" />
        <div className="relative max-w-3xl">
          <p className="eyebrow">Stay Connected</p>
          <h2 className="mt-3 font-display text-2xl text-primary-foreground md:text-3xl">
            Never miss an episode, get monthly community updates, local events, deals, and specials.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-primary-foreground/80">
            Join our community list and stay in the loop with everything happening in Front Royal and the Shenandoah Valley.
          </p>
          <form onSubmit={handleSubmit} className="mt-8 grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              aria-label="Name"
              required
              className="bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              aria-label="Email"
              required
              className="bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground"
            />
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone number"
              aria-label="Phone number"
              className="bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground"
            />
            <select
              name="interest"
              value={form.interest}
              onChange={handleChange}
              aria-label="Interest"
              required
              className="bg-background px-4 py-3 text-sm text-foreground outline-none"
            >
              <option value="">What are you interested in?</option>
              <option value="podcast">Podcast</option>
              <option value="real-estate">Real Estate</option>
              <option value="events">Events</option>
              <option value="businesses">Local Businesses</option>
              <option value="stay">Places to Stay</option>
              <option value="eat">Eat & Drink</option>
              <option value="general">General Community Updates</option>
            </select>
            <select
              name="referral"
              value={form.referral}
              onChange={handleChange}
              aria-label="How did you hear about us"
              required
              className="bg-background px-4 py-3 text-sm text-foreground outline-none sm:col-span-2"
            >
              <option value="">How did you hear about us?</option>
              <option value="podcast">Podcast</option>
              <option value="social">Social Media</option>
              <option value="friend">Friend or Family</option>
              <option value="search">Google Search</option>
              <option value="event">Local Event</option>
              <option value="business">Local Business</option>
              <option value="other">Other</option>
            </select>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full bg-accent px-6 py-3 text-[0.8rem] font-medium uppercase tracking-[0.16em] text-accent-foreground transition-colors hover:bg-accent/90"
              >
                Subscribe
              </button>
            </div>
          </form>
          {status === "success" && (
            <p className="mt-4 text-sm text-primary-foreground/90">
              Thank you! You’re now on the list.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 text-sm text-accent">
              Please fill out all required fields.
            </p>
          )}
          <p className="mt-4 text-[0.78rem] text-primary-foreground/60">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}


const GRAM = [business, heroValley.url, catShop, catExplore, catEvents, catLiving];

export function InstagramStrip() {
  return (
    <section className="border-y border-border bg-background py-10">
      <div className="mx-auto max-w-7xl px-6">
        <p className="eyebrow">Follow Along on Instagram</p>
        <div className="mt-4 grid grid-cols-3 gap-3 md:grid-cols-6">
          {GRAM.map((g, i) => (
            <img
              key={i}
              src={g}
              alt="Instagram post from Philip and Shelly"
              loading="lazy"
              className="h-24 w-full cursor-pointer object-cover transition-opacity hover:opacity-80"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-background py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Wordmark />
          <p className="mt-4 max-w-xs text-[0.9rem] leading-relaxed text-muted-foreground">
            Informing, inspiring, and strengthening the community we call home.
          </p>
          <div className="mt-5 flex gap-4 text-primary">
            <Facebook className="size-4" />
            <Instagram className="size-4" />
            <Youtube className="size-4" />
            <Mail className="size-4" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="eyebrow">Quick Links</p>
            <ul className="mt-3 space-y-2 text-[0.9rem] text-muted-foreground">
              {["Podcast", "Community", "Businesses", "Explore", "Resources"].map((l) => (
                <li key={l} className="cursor-pointer hover:text-primary">
                  {l}
                </li>
              ))}
            </ul>
          </div>
          <ul className="mt-7 space-y-2 text-[0.9rem] text-muted-foreground">
            {["Real Estate", "Articles", "Events", "About", "Contact"].map((l) => (
              <li key={l} className="cursor-pointer hover:text-primary">
                {l}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow">Contact Us</p>
          <ul className="mt-3 space-y-2 text-[0.9rem] text-muted-foreground">
            <li className="flex items-center gap-2">
              <Phone className="size-3.5 text-accent" /> (540) 123-4567
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-3.5 text-accent" /> info@philipandshelly.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-3.5 text-accent" /> Front Royal, Virginia
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-border px-6 pt-5 text-[0.78rem] text-muted-foreground">
        © 2026 Philip & Shelly. All rights reserved.
      </div>
    </footer>
  );
}