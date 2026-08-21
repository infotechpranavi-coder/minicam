import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Stars } from "@/components/site/Stars";
import { Reveal } from "@/components/site/Reveal";
import { testimonials } from "@/data/catalog";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Customer Reviews & Ratings — SentraVue" },
      {
        name: "description",
        content:
          "Read verified customer reviews of SentraVue mini cameras, WiFi cams, GPS trackers and detectors from buyers across India.",
      },
      { property: "og:title", content: "Customer Reviews & Ratings — SentraVue" },
      {
        property: "og:description",
        content: "Rated 4.6 out of 5 by 2,400+ verified buyers across India.",
      },
    ],
  }),
  component: Testimonials,
});

const breakdown = [
  { stars: 5, pct: 71 },
  { stars: 4, pct: 21 },
  { stars: 3, pct: 5 },
  { stars: 2, pct: 2 },
  { stars: 1, pct: 1 },
];

function Testimonials() {
  return (
    <div>
      <section className="border-b border-border bg-hero">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Reviews</p>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">What customers say</h1>
          <p className="mt-5 text-sm text-muted-foreground sm:text-base">
            Every review below comes from a verified order. We publish the three-star ones too.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
          <div className="h-fit rounded-xl border border-border bg-card p-6">
            <p className="font-display text-5xl font-bold">4.6</p>
            <Stars rating={4.6} className="mt-2" />
            <p className="mt-2 text-sm text-muted-foreground">Based on 2,412 verified reviews</p>
            <div className="mt-6 space-y-2">
              {breakdown.map((b) => (
                <div key={b.stars} className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="w-8">{b.stars}★</span>
                  <span className="h-2 flex-1 overflow-hidden rounded-full bg-secondary">
                    <span className="block h-full rounded-full bg-gradient-primary" style={{ width: `${b.pct}%` }} />
                  </span>
                  <span className="w-8 text-right">{b.pct}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 50}>
                <figure className="h-full rounded-xl border border-border bg-card p-6">
                  <div className="flex items-center justify-between">
                    <Stars rating={t.rating} />
                    <span className="text-xs text-muted-foreground">{t.date}</span>
                  </div>
                  <blockquote className="mt-4 text-sm text-muted-foreground">“{t.quote}”</blockquote>
                  <figcaption className="mt-4 text-sm font-semibold">
                    {t.name} <span className="font-normal text-muted-foreground">· {t.city}</span>
                    {t.product ? (
                      <span className="mt-1 block text-xs font-normal text-primary">{t.product}</span>
                    ) : null}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link to="/shop">Shop best sellers</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
