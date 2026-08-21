import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BadgeCheck,
  BatteryCharging,
  BanknoteArrowUp,
  Cpu,
  Headphones,
  Lock,
  ShieldCheck,
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
import bannerTech from "@/assets/banner-tech.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SentraVue — Mini Security Cameras, WiFi Hidden Cams & Trackers" },
      {
        name: "description",
        content:
          "Buy mini security cameras, pen and button cams, WiFi hidden cameras, GPS trackers and camera detectors. Free shipping over ₹999, COD and 12-month warranty.",
      },
      { property: "og:title", content: "SentraVue — Mini Security Cameras & Surveillance Gadgets" },
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
    title: "Bench-tested hardware",
    body: "Every batch is sampled and run through a 42-point image, battery and connectivity test before it reaches our shelves.",
  },
  {
    icon: Wifi,
    title: "Pairing that actually works",
    body: "Our WiFi devices pair in under three minutes on 2.4GHz, with printed quick-start cards in plain English.",
  },
  {
    icon: BatteryCharging,
    title: "Honest battery claims",
    body: "We publish measured runtimes from our own lab, not the numbers printed on the supplier's box.",
  },
  {
    icon: Headphones,
    title: "Support by real people",
    body: "Call or WhatsApp our team seven days a week for setup help, SD card advice and warranty service.",
  },
];

function Home() {
  const bestSellers = products.filter((p) => p.badge === "Best Seller" || p.rating >= 4.5).slice(0, 8);
  const featured = products.slice(0, 8);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-lines opacity-30" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-semibold text-muted-foreground backdrop-blur">
              <ShieldCheck className="size-3.5 text-primary" /> Trusted by 18,000+ Indian households
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
              Security you can hold in your <span className="text-gradient-primary">palm</span>
            </h1>
            <p className="mt-5 max-w-lg text-base text-muted-foreground sm:text-lg">
              Mini cameras, WiFi monitors, GPS trackers and detectors — tested in our lab, backed by a
              12-month warranty and shipped free across India.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/shop">Shop Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/how-it-works">See how it works</Link>
              </Button>
            </div>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-6">
              {[
                ["18k+", "Orders delivered"],
                ["4.6★", "Average rating"],
                ["48h", "Metro dispatch"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="font-display text-2xl font-bold text-primary">{v}</dt>
                  <dd className="text-xs text-muted-foreground">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-border shadow-elevated">
              <img
                src={heroImage}
                alt="Matte black mini security camera lit with blue rim lighting"
                width={1600}
                height={1104}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 sm:px-6 lg:grid-cols-4">
          {trustBadges.map((b) => (
            <div key={b.title} className="flex items-center gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <b.icon className="size-5" />
              </span>
              <div>
                <p className="text-sm font-semibold">{b.title}</p>
                <p className="text-xs text-muted-foreground">{b.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured carousel */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Featured</p>
              <h2 className="mt-2 font-display text-3xl font-bold">New and notable devices</h2>
            </div>
            <Button asChild variant="outline">
              <Link to="/shop">View all products</Link>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={80} className="mt-8">
          <Carousel opts={{ align: "start" }}>
            <CarouselContent className="-ml-4">
              {featured.map((p) => (
                <CarouselItem key={p.slug} className="basis-[78%] pl-4 sm:basis-1/2 lg:basis-1/4">
                  <ProductCard product={p} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-3 hidden sm:flex" />
            <CarouselNext className="-right-3 hidden sm:flex" />
          </Carousel>
        </Reveal>
      </section>

      {/* Categories */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Categories</p>
            <h2 className="mt-2 font-display text-3xl font-bold">Find the right form factor</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c, i) => (
              <Reveal key={c.slug} delay={i * 60}>
                <Link
                  to="/category/$slug"
                  params={{ slug: c.slug }}
                  className="group block overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.name}
                      loading="lazy"
                      width={900}
                      height={675}
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">{c.name}</h3>
                    <p className="text-xs text-muted-foreground">{c.tagline}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Why SentraVue</p>
          <h2 className="mt-2 max-w-2xl font-display text-3xl font-bold">
            Consumer electronics standards, applied to security gadgets
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((f, i) => (
            <Reveal key={f.title} delay={i * 60}>
              <div className="h-full rounded-xl border border-border bg-card p-6">
                <span className="flex size-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <f.icon className="size-5" />
                </span>
                <h3 className="mt-4 font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Best sellers */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">Best sellers</p>
                <h2 className="mt-2 font-display text-3xl font-bold">What customers buy most</h2>
              </div>
              <Button asChild variant="outline">
                <Link to="/shop">Browse catalog</Link>
              </Button>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {bestSellers.map((p, i) => (
              <Reveal key={p.slug} delay={i * 50}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Testimonials</p>
          <h2 className="mt-2 font-display text-3xl font-bold">Rated 4.6 by 2,400+ buyers</h2>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {testimonials.slice(0, 3).map((t, i) => (
            <Reveal key={t.name} delay={i * 70}>
              <figure className="h-full rounded-xl border border-border bg-card p-6">
                <Stars rating={t.rating} />
                <blockquote className="mt-4 text-sm text-muted-foreground">“{t.quote}”</blockquote>
                <figcaption className="mt-4 text-sm font-semibold">
                  {t.name} <span className="font-normal text-muted-foreground">· {t.city}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <div className="mt-8">
          <Button asChild variant="outline">
            <Link to="/testimonials">Read all reviews</Link>
          </Button>
        </div>
      </section>

      {/* Newsletter banner */}
      <section className="relative overflow-hidden border-t border-border">
        <img
          src={bannerTech}
          alt=""
          aria-hidden="true"
          loading="lazy"
          width={1600}
          height={600}
          className="absolute inset-0 size-full object-cover opacity-30"
        />
        <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6">
          <h2 className="font-display text-3xl font-bold">Get ₹300 off your first order</h2>
          <p className="max-w-xl text-sm text-muted-foreground">
            Join the SentraVue list for launch alerts, setup guides and subscriber-only pricing. No spam, unsubscribe anytime.
          </p>
          <form
            className="flex w-full max-w-md gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              toast.success("Coupon SENTRA300 is on its way to your inbox.");
              (e.currentTarget as HTMLFormElement).reset();
            }}
          >
            <Input type="email" required placeholder="you@email.com" aria-label="Email address" />
            <Button type="submit">Claim offer</Button>
          </form>
        </div>
      </section>
    </>
  );
}
