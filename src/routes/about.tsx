import { createFileRoute, Link } from "@tanstack/react-router";
import { FlaskConical, Gauge, PackageCheck, Target } from "lucide-react";
import { CountUp, Reveal } from "@/components/site/Reveal";
import { PageCta } from "@/components/site/PageCta";
import { PageHero } from "@/components/site/PageHero";
import aboutLab from "@/assets/about-lab.jpg";
import lifestyleCctv from "@/assets/lifestyle-cctv.jpg";
import lifestyleRetail from "@/assets/lifestyle-retail.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About MiCaWas — Security Gadgets, Tested Properly" },
      {
        name: "description",
        content:
          "MiCaWas builds a curated catalog of mini security cameras and trackers, tested in-house across imaging, battery and connectivity before we list them.",
      },
      { property: "og:title", content: "About MiCaWas — Security Gadgets, Tested Properly" },
      {
        property: "og:description",
        content: "Our story, our mission around personal and property security, and how we test every device.",
      },
    ],
  }),
  component: About,
});

const steps = [
  {
    icon: PackageCheck,
    title: "Sourcing",
    body: "We shortlist factories that publish real component data sheets, then order samples anonymously through retail channels.",
  },
  {
    icon: FlaskConical,
    title: "Lab intake",
    body: "Each sample runs a 42-point check: sensor resolution, low-light performance, lens distortion, heat and firmware stability.",
  },
  {
    icon: Gauge,
    title: "Field runtime",
    body: "We measure battery life on a bench timer at room temperature and publish that number, not the box claim.",
  },
  {
    icon: Target,
    title: "Batch audit",
    body: "Every incoming batch is sampled again. If failure rates exceed 2%, the batch goes back and the listing pauses.",
  },
];

function About() {
  return (
    <div>
      <PageHero
        label="About us"
        title="Security gadgets deserve real engineering standards"
        body="MiCaWas started in 2019 after our founders bought four “1080p” mini cameras online and found that not one of them actually recorded at 1080p. We decided to build the store we wished existed."
        image={lifestyleCctv}
        imageAlt="Security camera monitoring a commercial space"
      />

      <section className="band-light section-pad">
        <div className="container-page">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <Reveal variant="scale">
              <div className="overflow-hidden rounded-xl bg-secondary shadow-elevated ring-1 ring-border">
                <img
                  src={aboutLab}
                  alt="Engineers testing miniature camera electronics on a workbench"
                  loading="lazy"
                  width={1600}
                  height={900}
                  className="aspect-[16/10] w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={80}>
              <p className="section-label">Our mission</p>
              <h2 className="section-title">Hardware that works on the first evening</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Most people who buy a mini camera are not hobbyists. They are a shop owner who lost stock, a parent
                checking on an elderly relative&apos;s caregiver, or a traveller who wants to sweep a hotel room.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Our mission is to make personal and property security accessible without the guesswork — honest specs,
                plain-English setup, and support that answers on a Sunday.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
                <div>
                  <p className="font-display text-2xl tracking-tight text-primary">2019</p>
                  <p className="mt-1 text-xs text-muted-foreground">Founded in Mumbai</p>
                </div>
                <div>
                  <p className="font-display text-2xl tracking-tight text-primary">
                    <CountUp value={42} />
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">Point QC checklist</p>
                </div>
                <div>
                  <p className="font-display text-2xl tracking-tight text-primary">
                    <CountUp value={18} suffix="k+" />
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">Orders shipped</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="band-mist section-pad">
        <div className="container-page">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <Reveal>
              <p className="section-label">Where it matters</p>
              <h2 className="section-title">Built for shops, homes and offices</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                From retail stockrooms to family homes, our catalog is curated for real Indian use cases — not lab demos.
                Every listing explains what the device is for and where it fits.
              </p>
              <Link
                to="/shop"
                className="mt-6 inline-flex text-sm font-semibold text-primary transition-colors hover:text-foreground"
              >
                Browse the catalog →
              </Link>
            </Reveal>
            <Reveal delay={80} variant="scale">
              <div className="overflow-hidden rounded-xl shadow-elevated ring-1 ring-border">
                <img
                  src={lifestyleRetail}
                  alt="Retail shop interior where monitoring devices are commonly used"
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="band-slate section-pad">
        <div className="container-page">
          <Reveal>
            <p className="section-label">Quality process</p>
            <h2 className="section-title">How a device earns a listing</h2>
          </Reveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 60} variant="scale">
                <div className="group h-full rounded-xl border border-white/15 bg-white p-5 text-slate-900 shadow-[0_16px_40px_-24px_oklch(0_0_0_/_0.55)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_-20px_oklch(0_0_0_/_0.6)]">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-gradient-primary text-white shadow-glow">
                    <s.icon className="size-4 stroke-[2]" />
                  </span>
                  <p className="mt-4 text-[0.6875rem] font-semibold tracking-[0.14em] text-slate-500 uppercase">
                    Step {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-display text-[1.05rem] font-semibold tracking-tight text-slate-900">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="See what made the cut"
        body="Twelve devices currently pass our checklist. Every one carries a 12-month warranty."
        primary={{ to: "/shop", label: "Browse the catalog" }}
        secondary={{ to: "/contact", label: "Talk to us" }}
      />
    </div>
  );
}
