import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  BatteryCharging,
  BanknoteArrowUp,
  Clock3,
  Cpu,
  Headphones,
  Lock,
  PackageCheck,
  Star,
  Truck,
  Wifi,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProductCard } from "@/components/site/ProductCard";
import { CountUp, Reveal, TiltSpotlight } from "@/components/site/Reveal";
import { Stars } from "@/components/site/Stars";
import { categories, products, testimonials } from "@/data/catalog";
import heroImage from "@/assets/hero-camera.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MiCaWas — Mini Security Cameras, WiFi Hidden Cams & Trackers" },
      {
        name: "description",
        content:
          "Buy mini security cameras, pen and button cams, WiFi hidden cameras, GPS trackers and camera detectors. Free shipping over ₹999, COD and 12-month warranty.",
      },
      { property: "og:title", content: "MiCaWas — Mini Security Cameras & Surveillance Gadgets" },
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
  { icon: Truck, title: "Free shipping over ₹999" },
  { icon: BanknoteArrowUp, title: "COD across 24,000+ pin codes" },
  { icon: Lock, title: "Secure UPI & card checkout" },
  { icon: BadgeCheck, title: "12-month warranty on every device" },
];

const heroStats = [
  {
    icon: PackageCheck,
    value: 18,
    suffix: "k+",
    label: "Orders delivered",
    note: "Across homes, shops & offices",
  },
  {
    icon: Star,
    value: 4.6,
    suffix: "★",
    label: "Average rating",
    note: "From 2,400+ verified buyers",
    decimals: true,
  },
  {
    icon: Clock3,
    value: 48,
    suffix: "h",
    label: "Typical dispatch",
    note: "Most orders leave within 2 days",
  },
  {
    icon: BadgeCheck,
    value: 12,
    suffix: "mo",
    label: "Warranty cover",
    note: "On every device we ship",
  },
];

const whyUs = [
  {
    icon: Cpu,
    title: "Bench-tested hardware",
    body: "Every batch is sampled through a 42-point image, battery and connectivity check before it ships.",
  },
  {
    icon: Wifi,
    title: "Pairing that works",
    body: "WiFi devices pair in under three minutes on 2.4GHz, with plain-English quick-start cards.",
  },
  {
    icon: BatteryCharging,
    title: "Honest battery claims",
    body: "We publish measured runtimes from our own lab — not the numbers on the supplier box.",
  },
  {
    icon: Headphones,
    title: "Support by real people",
    body: "Call or WhatsApp seven days a week for setup help, SD card advice and warranty service.",
  },
];

function Home() {
  const bestSellers = products
    .filter((p) => p.badge === "Best Seller" || p.rating >= 4.5)
    .slice(0, 8);
  const featured = products.slice(0, 8);
  const marqueeItems = [...trustBadges, ...trustBadges];
  const [sellersApi, setSellersApi] = useState<CarouselApi>();
  const [sellersPaused, setSellersPaused] = useState(false);
  const [reviewsApi, setReviewsApi] = useState<CarouselApi>();
  const [reviewsPaused, setReviewsPaused] = useState(false);

  useEffect(() => {
    if (!sellersApi || sellersPaused) return;
    const id = window.setInterval(() => {
      sellersApi.scrollNext();
    }, 4200);
    return () => window.clearInterval(id);
  }, [sellersApi, sellersPaused]);

  useEffect(() => {
    if (!reviewsApi || reviewsPaused) return;
    const id = window.setInterval(() => {
      reviewsApi.scrollNext();
    }, 4500);
    return () => window.clearInterval(id);
  }, [reviewsApi, reviewsPaused]);

  return (
    <>
      {/* DARK — Hero + trust marquee (fit first viewport) */}
      <section className="grain band-dark flex min-h-[calc(100svh-6.5rem)] flex-col overflow-hidden">
        <div className="relative flex min-h-0 flex-1 flex-col">
          <img
            src={heroImage}
            alt=""
            width={1600}
            height={1104}
            className="hero-kenburns absolute inset-0 size-full object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-hero" />
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(ellipse 50% 40% at 75% 35%, oklch(0.55 0.12 195 / 0.35), transparent 70%)",
            }}
          />

          <div className="container-page relative z-10 flex w-full flex-1 items-center justify-start py-10 sm:py-12">
            <div className="hero-enter w-full max-w-2xl text-left">
              <div className="mb-4 inline-flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.22em] text-muted-foreground uppercase">
                <span className="relative flex size-2">
                  <span className="pulse-ring absolute inset-0 rounded-full bg-primary" />
                  <span className="relative size-2 rounded-full bg-primary" />
                </span>
                Live catalog · India-wide shipping
              </div>
              <p className="font-display text-[clamp(1.5rem,3.8vw,2.25rem)] font-semibold tracking-tight text-foreground">
                <span className="text-gradient-primary">MiCaWas</span>
              </p>
              <h1 className="mt-3 font-display text-[clamp(2rem,5.2vw,3.5rem)] font-semibold leading-[1.06] text-foreground">
                Security you can hold in your palm
              </h1>
              <p
                className="hero-enter mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base"
                style={{ animationDelay: "120ms" }}
              >
                Mini cameras, WiFi monitors, GPS trackers and detectors — lab-tested for homes, shops and offices across India.
              </p>
              <div
                className="hero-enter mt-7 flex flex-wrap justify-start gap-3"
                style={{ animationDelay: "220ms" }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-foreground text-background shadow-glow transition-transform hover:-translate-y-0.5 hover:bg-foreground/92"
                >
                  <Link to="/shop">
                    Shop collection <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-border bg-secondary/40 text-foreground backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-secondary"
                >
                  <Link to="/how-it-works">How it works</Link>
                </Button>
              </div>
            </div>

            <a
              href="#stats"
              className="hero-enter absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1.5 text-[0.65rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase transition-colors hover:text-foreground"
              style={{ animationDelay: "400ms" }}
            >
              Explore
              <span className="float-slow flex size-7 items-center justify-center rounded-full border border-border">
                <ArrowDown className="size-3.5" />
              </span>
            </a>
          </div>
        </div>

        {/* Trust marquee — sits in same first viewport */}
        <div className="band-slate relative z-10 shrink-0 overflow-hidden border-t border-border">
          <div className="flex overflow-hidden py-3">
            <div className="marquee flex min-w-max items-center gap-10 pr-10">
              {marqueeItems.map((b, i) => (
                <div key={`${b.title}-${i}`} className="flex items-center gap-3 whitespace-nowrap">
                  <b.icon className="size-4 text-primary" />
                  <span className="text-sm font-medium tracking-wide text-foreground">{b.title}</span>
                  <span className="text-muted-foreground/40">✦</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LIGHT — Stats */}
      <section id="stats" className="band-light border-b border-border">
        <div className="container-page py-10 sm:py-12">
          <Reveal>
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="section-label">By the numbers</p>
                <h2 className="section-title text-[clamp(1.5rem,2.8vw,2rem)]">Trusted across India</h2>
              </div>
              <p className="max-w-sm text-sm text-muted-foreground">
                Real order volume, lab-backed devices and support that picks up.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {heroStats.map((s, i) => (
              <Reveal key={s.label} delay={i * 70} variant="scale">
                <div className="group relative overflow-hidden rounded-xl border border-border bg-card p-5 shadow-elevated transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-glow">
                  <span
                    className="pointer-events-none absolute -right-6 -top-6 size-24 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background: "radial-gradient(circle, oklch(0.72 0.08 195 / 0.18), transparent 70%)",
                    }}
                    aria-hidden="true"
                  />
                  <span className="relative flex size-10 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground shadow-glow transition-transform duration-300 group-hover:scale-110">
                    <s.icon className="size-4" />
                  </span>
                  <p className="relative mt-5 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-[2.15rem]">
                    {s.decimals ? (
                      <>
                        4.6<span className="text-primary">{s.suffix}</span>
                      </>
                    ) : (
                      <>
                        <CountUp value={s.value} suffix="" />
                        <span className="text-primary">{s.suffix}</span>
                      </>
                    )}
                  </p>
                  <p className="relative mt-1.5 text-sm font-semibold tracking-tight text-foreground">{s.label}</p>
                  <p className="relative mt-1 text-xs leading-relaxed text-muted-foreground">{s.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHT — Featured */}
      <section id="featured" className="band-mist section-pad">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="section-label">Featured</p>
                <h2 className="section-title">New and notable</h2>
                <p className="mt-3 max-w-md text-sm text-muted-foreground">
                  Hover a product for a light sweep and quick add — built for browsing that feels tactile.
                </p>
              </div>
              <Button asChild variant="outline" className="transition-transform hover:-translate-y-0.5">
                <Link to="/shop">
                  View all <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={90} className="mt-8" variant="scale">
            <Carousel opts={{ align: "start", loop: true }}>
              <CarouselContent className="-ml-3">
                {featured.map((p) => (
                  <CarouselItem key={p.slug} className="basis-[78%] pl-3 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                    <ProductCard product={p} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-2 hidden sm:flex" />
              <CarouselNext className="-right-2 hidden sm:flex" />
            </Carousel>
          </Reveal>
        </div>
      </section>

      {/* LIGHT — Categories (auto-scroll) */}
      <section className="band-light section-pad relative overflow-hidden">
        <div className="container-page relative">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="section-label">Categories</p>
                <h2 className="section-title">Find the right form factor</h2>
                <p className="mt-3 max-w-lg text-sm text-muted-foreground">
                  Pocket cams, pens, WiFi monitors and trackers — cards drift continuously; hover to pause.
                </p>
              </div>
              <Button asChild variant="outline" className="transition-transform hover:-translate-y-0.5">
                <Link to="/shop">
                  View all <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
        <Reveal delay={90} className="mt-8" variant="scale">
          <div className="container-page">
            <div className="overflow-hidden py-4">
              <div className="category-marquee flex w-max gap-3">
                {[...categories, ...categories].map((c, i) => (
                  <div
                    key={`${c.slug}-${i}`}
                    className="w-[min(78vw,280px)] shrink-0 transition-transform duration-300 ease-out hover:-translate-y-3 hover:z-10"
                  >
                    <TiltSpotlight intensity={8}>
                      <Link
                        to="/category/$slug"
                        params={{ slug: c.slug }}
                        className="group relative block aspect-[4/5] overflow-hidden rounded-xl bg-secondary shadow-elevated ring-1 ring-border transition-shadow duration-300 hover:shadow-glow"
                      >
                      <img
                        src={c.image}
                        alt={c.name}
                        loading="lazy"
                        width={900}
                        height={1125}
                        className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent transition-opacity duration-500 group-hover:from-black/90" />
                      <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                        <h3 className="font-display text-base font-semibold tracking-tight">{c.name}</h3>
                        <p className="mt-1 text-xs text-white/75 sm:text-sm">{c.tagline}</p>
                        <span className="mt-3 inline-flex translate-x-[-6px] items-center gap-1.5 text-xs font-semibold tracking-wide text-primary-glow opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                          Browse <ArrowRight className="size-3.5" />
                        </span>
                      </div>
                      </Link>
                    </TiltSpotlight>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* MIST LIGHT — Why us */}
      <section className="band-mist section-pad">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
            <Reveal>
              <p className="section-label">Why MiCaWas</p>
              <h2 className="section-title max-w-md">Built for trust, reliability and value</h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                Consumer electronics standards, applied to security gadgets — tested in our lab before they reach you.
              </p>
              <Button asChild variant="outline" className="mt-8 rounded-full transition-transform hover:-translate-y-0.5">
                <Link to="/about">
                  Our process <ArrowRight className="size-4" />
                </Link>
              </Button>
            </Reveal>
            <div className="grid gap-3 sm:grid-cols-2">
              {whyUs.map((f, i) => (
                <Reveal key={f.title} delay={i * 70} variant="scale">
                  <div className="group h-full rounded-xl bg-gradient-primary p-5 text-primary-foreground shadow-elevated transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
                    <span className="flex size-10 items-center justify-center rounded-lg border border-white/25 bg-white/15 text-white transition-transform duration-300 group-hover:scale-110">
                      <f.icon className="size-4" />
                    </span>
                    <h3 className="mt-4 font-display text-[1rem] font-semibold tracking-tight text-white">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/75">{f.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GRANITE — Best sellers */}
      <section className="relative overflow-hidden bg-gradient-primary py-10 text-primary-foreground sm:py-12">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 55% 50% at 12% 0%, oklch(1 0 0 / 0.18), transparent 55%), radial-gradient(ellipse 45% 40% at 90% 100%, oklch(0.2 0.04 235 / 0.35), transparent 50%)",
          }}
        />
        <div className="container-page relative">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="section-label text-white/60">Best sellers</p>
                <h2 className="mt-2 font-display text-[clamp(1.45rem,2.6vw,2rem)] font-semibold tracking-tight text-white">
                  What customers buy most
                </h2>
              </div>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-white/25 bg-white/10 text-white transition-transform hover:-translate-y-0.5 hover:bg-white/15 hover:text-white"
              >
                <Link to="/shop">
                  Browse catalog <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={90} className="mt-5" variant="scale">
            <div
              onMouseEnter={() => setSellersPaused(true)}
              onMouseLeave={() => setSellersPaused(false)}
            >
              <Carousel
                setApi={setSellersApi}
                opts={{
                  align: "start",
                  loop: true,
                  slidesToScroll: 1,
                  breakpoints: {
                    "(min-width: 640px)": { slidesToScroll: 2 },
                    "(min-width: 1024px)": { slidesToScroll: 4 },
                  },
                }}
              >
                <CarouselContent className="-ml-3">
                  {bestSellers.map((p) => (
                    <CarouselItem
                      key={p.slug}
                      className="basis-full pl-3 sm:basis-1/2 lg:basis-1/4"
                    >
                      <div className="transition-transform duration-300 ease-out hover:-translate-y-1.5">
                        <ProductCard product={p} variant="premium" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="-left-2 hidden border-white/25 bg-white/10 text-white hover:bg-white/20 hover:text-white sm:flex" />
                <CarouselNext className="-right-2 hidden border-white/25 bg-white/10 text-white hover:bg-white/20 hover:text-white sm:flex" />
              </Carousel>
            </div>
          </Reveal>
        </div>
      </section>

      {/* LIGHT — Testimonials */}
      <section className="band-light section-pad">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="section-label">Testimonials</p>
                <h2 className="mt-2 font-display text-[clamp(1.45rem,2.6vw,2rem)] font-semibold tracking-tight text-foreground">
                  Trusted where it matters most
                </h2>
              </div>
              <Button asChild variant="outline" size="sm" className="transition-transform hover:-translate-y-0.5">
                <Link to="/testimonials">
                  Read all reviews <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={90} className="mt-10" variant="scale">
            <div
              onMouseEnter={() => setReviewsPaused(true)}
              onMouseLeave={() => setReviewsPaused(false)}
            >
              <Carousel
                setApi={setReviewsApi}
                opts={{
                  align: "start",
                  loop: true,
                  slidesToScroll: 1,
                  breakpoints: {
                    "(min-width: 768px)": { slidesToScroll: 2 },
                    "(min-width: 1024px)": { slidesToScroll: 3 },
                  },
                }}
              >
                <CarouselContent className="-ml-3">
                  {testimonials.map((t) => (
                    <CarouselItem
                      key={t.name}
                      className="basis-full pl-3 md:basis-1/2 lg:basis-1/3"
                    >
                      <figure className="group flex h-full flex-col rounded-xl border border-border bg-card p-5 shadow-elevated transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
                        <Stars rating={t.rating} />
                        <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/85">
                          “{t.quote}”
                        </blockquote>
                        <figcaption className="mt-5 flex items-center gap-3 text-sm">
                          <span className="flex size-8 items-center justify-center rounded-full bg-gradient-primary text-xs font-bold text-primary-foreground">
                            {t.name.charAt(0)}
                          </span>
                          <span>
                            <span className="font-semibold text-foreground">{t.name}</span>
                            <span className="text-muted-foreground"> · {t.city}</span>
                          </span>
                        </figcaption>
                      </figure>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="-left-2 hidden sm:flex" />
                <CarouselNext className="-right-2 hidden sm:flex" />
              </Carousel>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA — compact conversion strip */}
      <section className="relative overflow-hidden bg-gradient-primary py-12 text-primary-foreground sm:py-14">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 50% -20%, oklch(1 0 0 / 0.16), transparent 55%), radial-gradient(ellipse 40% 50% at 100% 100%, oklch(0.2 0.05 235 / 0.45), transparent 50%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-50"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(1 0 0 / 0.35), transparent)",
          }}
        />
        <div className="container-page relative">
          <Reveal variant="scale">
            <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
              <p className="section-label text-white/55">Ready when you are</p>
              <h2 className="mt-2 font-display text-[clamp(1.5rem,3vw,2.1rem)] font-semibold tracking-tight text-white">
                Find the right cam and start monitoring today
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/72">
                Bench-tested devices with free shipping over ₹999, COD, and a full
                12-month warranty on every order.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <Button
                  asChild
                  className="h-11 rounded-lg bg-white px-6 text-foreground shadow-[0_10px_30px_-12px_oklch(0_0_0_/_0.45)] transition-transform hover:-translate-y-0.5 hover:bg-white/92"
                >
                  <Link to="/shop">
                    Shop now <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-11 rounded-lg border-white/30 bg-transparent px-5 text-white hover:bg-white/10 hover:text-white"
                >
                  <Link to="/how-it-works">How it works</Link>
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mx-auto mt-9 max-w-2xl">
              <div
                className="mb-6 h-px w-full opacity-40"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, oklch(1 0 0 / 0.4), transparent)",
                }}
              />
              <div className="flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-6">
                <div className="flex items-center gap-2 text-sm text-white/75">
                  <Headphones className="size-4 shrink-0 text-white/55" />
                  <span>Need help picking a device?</span>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors hover:text-white/85"
                >
                  Talk to support
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
