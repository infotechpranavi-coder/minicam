import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BatteryCharging,
  HardDrive,
  Play,
  Smartphone,
  Wifi,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { PageCta } from "@/components/site/PageCta";
import { PageHero } from "@/components/site/PageHero";
import bannerTech from "@/assets/banner-tech.jpg";
import lifestyleSetup from "@/assets/lifestyle-setup.jpg";
import lifestyleSurveillance from "@/assets/lifestyle-surveillance.jpg";
import lifestyleCctv from "@/assets/lifestyle-cctv.jpg";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works — Setup, App Pairing & Storage | MiCaWas" },
      {
        name: "description",
        content:
          "Four simple steps to set up a MiCaWas device: charge it, insert an SD card, pair the app over 2.4GHz WiFi and start recording.",
      },
      { property: "og:title", content: "How It Works — Setup, App Pairing & Storage | MiCaWas" },
      {
        property: "og:description",
        content: "Visual setup guide covering charging, SD cards, app pairing and footage playback.",
      },
    ],
  }),
  component: HowItWorks,
});

const steps = [
  {
    icon: BatteryCharging,
    title: "Charge fully first",
    body: "Give every new device a full 3-hour charge over USB-C before first use. The LED turns solid when the cell is topped up.",
    detail: "Mains-powered models like the socket and charger cams skip this step entirely.",
    image: bannerTech,
    imageAlt: "Compact security hardware ready for first charge and setup",
  },
  {
    icon: HardDrive,
    title: "Insert and format the card",
    body: "Use a Class 10 / U3 microSD card within the size listed on the product's spec table, then format it inside the device.",
    detail: "Loop recording overwrites the oldest clips automatically once the card fills.",
    image: lifestyleSetup,
    imageAlt: "Person setting up a device with a computer and accessories",
  },
  {
    icon: Smartphone,
    title: "Pair the app",
    body: "Install the MiCaWas app, press and hold the pair button for five seconds, then join the device hotspot and select your 2.4GHz network.",
    detail: "Pairing typically completes in under three minutes. 5GHz networks are not supported.",
    image: lifestyleCctv,
    imageAlt: "Security camera ready to connect over WiFi",
  },
  {
    icon: Play,
    title: "Record and review",
    body: "Start a manual recording or switch on motion detection. Footage plays back in the app, or pull the card and open the MP4 files on any computer.",
    detail: "Motion alerts arrive as push notifications with a thumbnail preview.",
    image: lifestyleSurveillance,
    imageAlt: "Surveillance camera monitoring an indoor space",
  },
];

const tips = [
  {
    icon: Wifi,
    title: "Pairing trouble?",
    body: "Split your router bands or temporarily disable band steering, then retry pairing on the 2.4GHz SSID.",
  },
  {
    icon: HardDrive,
    title: "Card not detected?",
    body: "Format the card as FAT32 or exFAT on a computer, then format again inside the device.",
  },
  {
    icon: BatteryCharging,
    title: "Short runtime?",
    body: "Continuous WiFi streaming roughly halves battery life. Use motion-triggered mode for longer sessions.",
  },
];

function HowItWorks() {
  return (
    <div>
      <PageHero
        label="How it works"
        title="Recording in about ten minutes"
        body="Every MiCaWas device ships with a printed quick-start card. Follow the same four steps below."
        image={lifestyleSurveillance}
        imageAlt="Security camera used for property monitoring"
      >
        <div className="mt-7 flex flex-wrap gap-3">
          <Button asChild className="rounded-lg bg-foreground text-background hover:bg-foreground/90">
            <a href="#steps">
              See the steps <ArrowRight className="size-4" />
            </a>
          </Button>
          <Button asChild variant="outline" className="rounded-lg border-border bg-secondary/40">
            <Link to="/shop">Shop devices</Link>
          </Button>
        </div>
      </PageHero>

      {/* Step overview strip */}
      <section className="band-mist border-b border-border py-8 sm:py-10">
        <div className="container-page">
          <Reveal>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <a
                  key={s.title}
                  href={`#step-${i + 1}`}
                  className="group flex items-start gap-3 rounded-xl border border-border/70 bg-card/80 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-elevated"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gradient-primary text-xs font-bold text-primary-foreground shadow-glow">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block font-display text-sm font-semibold tracking-tight text-foreground group-hover:text-primary">
                      {s.title}
                    </span>
                    <span className="mt-1 block text-xs leading-relaxed text-muted-foreground line-clamp-2">
                      {s.body}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Detailed steps */}
      <section id="steps" className="band-light section-pad">
        <div className="container-page">
          <Reveal>
            <p className="section-label">Setup guide</p>
            <h2 className="section-title">Four steps from box to live feed</h2>
          </Reveal>

          <div className="mt-10 space-y-14 lg:space-y-20">
            {steps.map((s, i) => {
              const reverse = i % 2 === 1;
              return (
                <Reveal key={s.title} delay={40}>
                  <article
                    id={`step-${i + 1}`}
                    className="grid items-center gap-8 scroll-mt-28 lg:grid-cols-2 lg:gap-14"
                  >
                    <div className={reverse ? "lg:order-2" : undefined}>
                      <div className="relative overflow-hidden rounded-2xl shadow-elevated ring-1 ring-border">
                        <img
                          src={s.image}
                          alt={s.imageAlt}
                          loading="lazy"
                          className="aspect-[4/3] w-full object-cover"
                        />
                        <span className="absolute top-4 left-4 flex size-11 items-center justify-center rounded-full bg-gradient-primary font-display text-sm font-bold text-primary-foreground shadow-glow">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    <div className={reverse ? "lg:order-1" : undefined}>
                      <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold tracking-wide text-muted-foreground">
                        <s.icon className="size-3.5 text-primary" />
                        Step {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-4 font-display text-[clamp(1.35rem,2.4vw,1.85rem)] font-semibold tracking-tight text-foreground">
                        {s.title}
                      </h3>
                      <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">
                        {s.body}
                      </p>
                      <p className="mt-5 border-l-2 border-primary/50 pl-4 text-sm leading-relaxed text-foreground/80">
                        {s.detail}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="band-slate section-pad">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <Reveal>
              <p className="section-label text-white/55">Quick fixes</p>
              <h2 className="mt-2 font-display text-[clamp(1.45rem,2.6vw,2rem)] font-semibold tracking-tight text-white">
                Common setup snags
              </h2>
            </Reveal>
            <Reveal delay={60}>
              <Button
                asChild
                size="sm"
                variant="outline"
                className="border-white/25 bg-white/10 text-white hover:bg-white/15 hover:text-white"
              >
                <Link to="/contact">
                  Message support <ArrowRight className="size-4" />
                </Link>
              </Button>
            </Reveal>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {tips.map((t, i) => (
              <Reveal key={t.title} delay={i * 60} variant="scale">
                <div className="group h-full rounded-xl border border-white/15 bg-white/8 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/12">
                  <span className="flex size-10 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white">
                    <t.icon className="size-4" />
                  </span>
                  <h3 className="mt-4 font-display text-[1.05rem] font-semibold tracking-tight text-white">
                    {t.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{t.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="Still stuck on setup?"
        body="Our support team walks customers through pairing on WhatsApp seven days a week."
        primary={{ to: "/contact", label: "Get setup help" }}
        secondary={{ to: "/faq", label: "Read the FAQ" }}
      />
    </div>
  );
}
