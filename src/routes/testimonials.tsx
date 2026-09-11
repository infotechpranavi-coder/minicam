import { createFileRoute } from "@tanstack/react-router";
import { Stars } from "@/components/site/Stars";
import { Reveal } from "@/components/site/Reveal";
import { PageCta } from "@/components/site/PageCta";
import { PageHero } from "@/components/site/PageHero";
import { testimonials } from "@/data/catalog";
import lifestyleRetail from "@/assets/lifestyle-retail.jpg";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Customer Reviews & Ratings — MiCaWas" },
      {
        name: "description",
        content:
          "Read verified customer reviews of MiCaWas mini cameras, WiFi cams, GPS trackers and detectors from buyers across India.",
      },
      { property: "og:title", content: "Customer Reviews & Ratings — MiCaWas" },
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
      <PageHero
        label="Reviews"
        title="Trusted where it matters most"
        body="Every review below comes from a verified order. We publish the three-star ones too."
        image={lifestyleRetail}
        imageAlt="Retail business environment where customers use monitoring devices"
      />

      <section className="band-light section-pad">
        <div className="container-page">
          <div className="grid gap-6 lg:grid-cols-[280px_1fr] lg:gap-8">
            <Reveal>
              <div className="h-fit rounded-xl border border-border bg-card p-6 shadow-elevated">
                <p className="font-display text-5xl tracking-tight text-foreground">4.6</p>
                <Stars rating={4.6} className="mt-2" />
                <p className="mt-2 text-sm text-muted-foreground">Based on 2,412 verified reviews</p>
                <div className="mt-6 space-y-2.5">
                  {breakdown.map((b) => (
                    <div key={b.stars} className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="w-8">{b.stars}★</span>
                      <span className="h-2 flex-1 overflow-hidden rounded-full bg-secondary">
                        <span
                          className="block h-full rounded-full bg-gradient-primary"
                          style={{ width: `${b.pct}%` }}
                        />
                      </span>
                      <span className="w-8 text-right">{b.pct}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <div className="grid gap-3 md:grid-cols-2">
              {testimonials.map((t, i) => (
                <Reveal key={t.name} delay={i * 45} variant="scale">
                  <figure className="group flex h-full flex-col rounded-xl border border-border bg-card p-5 shadow-elevated transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
                    <div className="flex items-center justify-between gap-3">
                      <Stars rating={t.rating} />
                      <span className="text-xs text-muted-foreground">{t.date}</span>
                    </div>
                    <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                      “{t.quote}”
                    </blockquote>
                    <figcaption className="mt-4 flex items-center gap-3 text-sm">
                      <span className="flex size-8 items-center justify-center rounded-full bg-gradient-primary text-xs font-bold text-primary-foreground">
                        {t.name.charAt(0)}
                      </span>
                      <span>
                        <span className="font-semibold text-foreground">{t.name}</span>
                        <span className="text-muted-foreground"> · {t.city}</span>
                        {t.product ? (
                          <span className="mt-0.5 block text-xs font-normal text-primary">{t.product}</span>
                        ) : null}
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PageCta
        title="Shop what buyers recommend"
        body="Start with best sellers trusted by homes, shops and offices across India."
        primary={{ to: "/shop", label: "Shop best sellers" }}
        secondary={{ to: "/contact", label: "Ask before you buy" }}
      />
    </div>
  );
}
