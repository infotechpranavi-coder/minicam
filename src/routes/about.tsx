import { createFileRoute, Link } from "@tanstack/react-router";
import { FlaskConical, Gauge, PackageCheck, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import aboutLab from "@/assets/about-lab.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Mini Camerawala — Security Gadgets, Tested Properly" },
      {
        name: "description",
        content:
          "Mini Camerawala builds a curated catalog of mini security cameras and trackers, tested in-house across imaging, battery and connectivity before we list them.",
      },
      { property: "og:title", content: "About Mini Camerawala — Security Gadgets, Tested Properly" },
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
      <section className="border-b border-border bg-hero">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">About us</p>
          <h1 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
            Security gadgets deserve real engineering standards
          </h1>
          <p className="mt-5 text-sm text-muted-foreground sm:text-base">
            Mini Camerawala started in 2019 after our founders bought four "1080p" mini cameras online and found that not one
            of them actually recorded at 1080p. We decided to build the store we wished existed.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-border shadow-elevated">
              <img
                src={aboutLab}
                alt="Engineers testing miniature camera electronics on a workbench"
                loading="lazy"
                width={1600}
                height={900}
                className="w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display text-3xl tracking-tight">Our mission</h2>
            <p className="mt-4 text-sm text-muted-foreground">
              Most people who buy a mini camera are not hobbyists. They are a shop owner who lost stock, a parent
              checking on an elderly relative's caregiver, or a traveller who wants to sweep a hotel room. They need
              hardware that simply works on the first evening.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Our mission is to make personal and property security accessible without the guesswork — honest specs,
              plain-English setup, and support that answers on a Sunday. We also publish clear guidance on lawful use,
              because a security product should protect people, never invade their privacy.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                ["2019", "Founded in Mumbai"],
                ["42", "Point QC checklist"],
                ["18k+", "Orders shipped"],
              ].map(([v, l]) => (
                <div key={l}>
                  <p className="font-display text-2xl tracking-tight text-primary">{v}</p>
                  <p className="text-xs text-muted-foreground">{l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Quality process</p>
            <h2 className="mt-2 font-display text-3xl tracking-tight">How a device earns a listing</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <div className="h-full rounded-xl border border-border bg-card p-6">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                    <s.icon className="size-5" />
                  </span>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Step {i + 1}
                  </p>
                  <h3 className="mt-1 font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <h2 className="font-display text-3xl tracking-tight">See what made the cut</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Twelve devices currently pass our checklist. Every one carries a 12-month warranty.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Button asChild size="lg">
            <Link to="/shop">Browse the catalog</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/contact">Talk to us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
