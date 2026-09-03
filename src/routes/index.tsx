import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BadgeCheck,
  BatteryCharging,
  BanknoteArrowUp,
  Cpu,
  Headphones,
  Lock,
  ArrowRight,
  Truck,
  Wifi,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { ProductCard } from "@/components/site/ProductCard";
import { Reveal } from "@/components/site/Reveal";
import { Stars } from "@/components/site/Stars";
import { categories, products, testimonials } from "@/data/catalog";
import heroImage from "@/assets/hero-camera.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mini Camerawala — Mini Security Cameras, WiFi Hidden Cams & Trackers" },
      {
        name: "description",
        content:
          "Buy mini security cameras, pen and button cams, WiFi hidden cameras, GPS trackers and camera detectors. Free shipping over ₹999, COD and 12-month warranty.",
      },
      { property: "og:title", content: "Mini Camerawala — Mini Security Cameras & Surveillance Gadgets" },
      {
        property: "og:description",
        content:
          "Bench-tested security gadgets for homes, shops and offices. Free shipping over ₹999, COD and 12-month warranty.",
      },
    ],
  }),
  component: Home,
});

const trustBadges = [
  { icon: Truck, title: "Free shipping", note: "On orders over ₹999" },
  { icon: BanknoteArrowUp, title: "Cash on delivery", note: "24,000+ pin codes" },
  { icon: Lock, title: "Secure payment", note: "UPI, cards, net banking" },
  { icon: BadgeCheck, title: "12-month warranty", note: "On every device" },
];

const whyUs = [
  {
    icon: Cpu,
    n: "01",
    title: "Bench-tested hardware",
    body: "Every batch is sampled and run through a 42-point image, battery and connectivity test before it reaches our shelves.",
    card: "bg-[#0b1220]",
    arc: "bg-white/8",
  },
  {
    icon: Wifi,
    n: "02",
    title: "Pairing that actually works",
    body: "Our WiFi devices pair in under three minutes on 2.4GHz, with printed quick-start cards in plain English.",
    card: "bg-[#102a38]",
    arc: "bg-sky-300/15",
  },
  {
    icon: BatteryCharging,
    n: "03",
    title: "Honest battery claims",
    body: "We publish measured runtimes from our own lab, not the numbers printed on the supplier's box.",
    card: "bg-[#1a1830]",
    arc: "bg-indigo-300/15",
  },
  {
    icon: Headphones,
    n: "04",
    title: "Support by real people",
    body: "Call or WhatsApp our team seven days a week for setup help, SD card advice and warranty service.",
    card: "bg-[#12304a]",
    arc: "bg-blue-300/15",
  },
];

function Home() {
  const bestSellers = products.filter((p) => p.badge === "Best Seller" || p.rating >= 4.5).slice(0, 8);
  const featured = products.slice(0, 8);

  return (
    <>
      <section className="relative overflow-hidden bg-hero">
        <div className="container-page">
          <div className="grid items-center gap-12 py-16 lg:grid-cols-[1fr_1.05fr] lg:gap-16 lg:py-24">
            <div className="hero-enter">
              <p className="section-label text-primary">Precision surveillance</p>
              <h1 className="mt-4 max-w-[16ch] font-display text-[2.4rem] font-semibold sm:text-[2.85rem] lg:text-[3.35rem]">
                Security you can hold in your <span className="text-primary">palm</span>
              </h1>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground sm:text-[1.05rem]">
                Mini cameras, WiFi monitors, GPS trackers and detectors — lab-tested, 12-month warranty,
                free shipping across India.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button asChild size="lg">
                  <Link to="/shop">
                    Shop now <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/how-it-works">How it works</Link>
                </Button>
              </div>
              <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-7">
                {[
                  ["18k+", "Orders"],
                  ["4.6★", "Rating"],
                  ["48h", "Dispatch"],
                ].map(([v, l]) => (
                  <div key={l}>
                    <dt className="font-display text-2xl font-semibold tracking-tight text-primary">{v}</dt>
                    <dd className="mt-1 text-xs font-medium text-muted-foreground">{l}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="hero-enter relative" style={{ animationDelay: "140ms" }}>
              <div className="overflow-hidden rounded-xl border border-border bg-card shadow-elevated">
                <img
                  src={heroImage}
                  alt="Matte black mini security camera lit with blue rim lighting"
                  width={1600}
                  height={1104}
                  className="aspect-[4/3] w-full object-cover lg:aspect-[5/4]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="container-page grid grid-cols-2 gap-3 py-8 lg:grid-cols-4 lg:gap-4 lg:py-10">
          {trustBadges.map((b, i) => (
            <div
              key={b.title}
              className="feature-card relative border border-border bg-card p-4"
            >
              <span className="feature-card-arc bg-primary/10" aria-hidden="true" />
              <span className="absolute top-3 right-3 font-display text-sm font-semibold text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="relative flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <b.icon className="size-4" />
              </span>
              <div className="relative mt-4 min-w-0">
                <p className="text-sm font-semibold tracking-tight">{b.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{b.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="section-label">Featured</p>
                <h2 className="section-title">New and notable</h2>
              </div>
              <Button asChild variant="outline">
                <Link to="/shop">
                  View all <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={80} className="mt-12">
            <Carousel opts={{ align: "start" }}>
              <CarouselContent className="-ml-5">
                {featured.map((p) => (
                  <CarouselItem key={p.slug} className="basis-[82%] pl-5 sm:basis-1/2 lg:basis-1/4">
                    <ProductCard product={p} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-3 hidden sm:flex" />
              <CarouselNext className="-right-3 hidden sm:flex" />
            </Carousel>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-page">
          <Reveal>
            <p className="section-label">Categories</p>
            <h2 className="section-title max-w-xl">Find the right form factor</h2>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c, i) => (
              <Reveal key={c.slug} delay={i * 50}>
                <Link
                  to="/category/$slug"
                  params={{ slug: c.slug }}
                  className="group relative block overflow-hidden rounded-2xl"
                >
                  <div className="aspect-[4/5] overflow-hidden bg-secondary">
                    <img
                      src={c.image}
                      alt={c.name}
                      loading="lazy"
                      width={900}
                      height={1125}
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-ink-foreground">
                    <h3 className="text-lg font-semibold tracking-tight">{c.name}</h3>
                    <p className="mt-1 text-sm text-ink-foreground/75">{c.tagline}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-page">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="section-label text-primary">— Why choose Mini Camerawala —</p>
              <h2 className="section-title">Built for trust, reliability, and value</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Consumer electronics standards, applied to security gadgets — tested in our lab before they reach you.
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((f, i) => (
              <Reveal key={f.title} delay={i * 60}>
                <div className={`feature-card h-full text-white ${f.card}`}>
                  <span className={`feature-card-arc ${f.arc}`} aria-hidden="true" />
                  <span className="absolute top-4 right-4 font-display text-sm font-semibold text-white/45">
                    {f.n}
                  </span>
                  <span className="relative flex size-10 items-center justify-center rounded-lg border border-white/25">
                    <f.icon className="size-4" />
                  </span>
                  <h3 className="relative mt-6 text-[1.05rem] font-semibold tracking-tight">{f.title}</h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-white/70">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="section-label">Best sellers</p>
                <h2 className="section-title">What customers buy most</h2>
              </div>
              <Button asChild variant="outline">
                <Link to="/shop">
                  Browse catalog <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {bestSellers.map((p, i) => (
              <Reveal key={p.slug} delay={i * 40}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-page">
          <Reveal>
            <p className="section-label text-primary">Testimonials</p>
            <h2 className="section-title">Rated 4.6 by 2,400+ buyers</h2>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {testimonials.slice(0, 3).map((t, i) => (
              <Reveal key={t.name} delay={i * 70}>
                <figure className="feature-card flex h-full flex-col border border-border bg-card">
                  <span className="feature-card-arc bg-primary/10" aria-hidden="true" />
                  <span className="absolute top-4 right-4 font-display text-sm font-semibold text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Stars rating={t.rating} />
                  <blockquote className="relative mt-5 flex-1 text-[0.95rem] leading-relaxed text-foreground/80">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="relative mt-6 text-sm">
                    <span className="font-semibold">{t.name}</span>
                    <span className="text-muted-foreground"> · {t.city}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <Button asChild variant="outline">
              <Link to="/testimonials">
                Read all reviews <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="container-page">
          <div className="rounded-2xl bg-ink px-6 py-14 text-ink-foreground sm:px-12 sm:py-16">
            <div className="mx-auto flex max-w-xl flex-col items-center text-center">
              <p className="text-xs font-semibold tracking-[0.16em] text-ink-foreground/60 uppercase">
                First-order offer
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Get ₹300 off your first order
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-foreground/70">
                Launch alerts, setup guides and subscriber-only pricing. No spam.
              </p>
              <form
                className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row"
                onSubmit={(e) => {
                  e.preventDefault();
                  toast.success("Coupon MINI300 is on its way to your inbox.");
                  (e.currentTarget as HTMLFormElement).reset();
                }}
              >
                <Input
                  type="email"
                  required
                  placeholder="you@email.com"
                  aria-label="Email address"
                  className="h-12 flex-1 rounded-lg border-white/15 bg-white/10 text-ink-foreground placeholder:text-white/45"
                />
                <Button type="submit" size="lg" className="bg-ink-foreground text-ink hover:bg-ink-foreground/90">
                  Claim offer
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
