import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/site/Reveal";
import { PageCta } from "@/components/site/PageCta";
import { PageHero } from "@/components/site/PageHero";
import { faqs } from "@/data/catalog";
import { cn } from "@/lib/utils";
import lifestyleSupport from "@/assets/lifestyle-support.jpg";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Shipping, Returns, Warranty & Usage | MiCaWas" },
      {
        name: "description",
        content:
          "Answers on shipping times, COD, returns, warranty claims, memory cards, WiFi pairing and lawful use of MiCaWas devices.",
      },
      { property: "og:title", content: "FAQ — Shipping, Returns, Warranty & Usage | MiCaWas" },
      {
        property: "og:description",
        content: "Common questions about delivery, returns, warranty and device setup.",
      },
    ],
  }),
  component: FaqPage,
});

const categories = ["All", "Shipping", "Returns", "Warranty", "Usage"] as const;

const hashMap: Record<string, string> = {
  shipping: "Shipping",
  returns: "Returns",
  warranty: "Warranty",
  usage: "Usage",
};

function FaqPage() {
  const [active, setActive] = useState<string>("All");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "").toLowerCase();
    if (hashMap[hash]) setActive(hashMap[hash]);
  }, []);

  const filtered = useMemo(
    () => (active === "All" ? faqs : faqs.filter((f) => f.category === active)),
    [active],
  );

  return (
    <div>
      <PageHero
        label="Support"
        title="Frequently asked questions"
        body="Shipping, returns, warranty and setup — answered plainly so you can buy with confidence."
        image={lifestyleSupport}
        imageAlt="Support team helping customers with product questions"
      />

      <section className="band-light section-pad">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="section-label">Browse by topic</p>
              <h2 className="mt-2 font-display text-[clamp(1.35rem,2.4vw,1.75rem)] font-semibold tracking-tight text-foreground">
                Find answers faster
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setActive(c)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-xs font-semibold tracking-wide transition-all",
                    active === c
                      ? "border-foreground bg-foreground text-background shadow-elevated"
                      : "border-border bg-card text-muted-foreground hover:-translate-y-px hover:text-foreground",
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <Reveal className="mt-8" delay={60}>
            <Accordion
              type="single"
              collapsible
              className="grid items-start gap-3 md:grid-cols-2"
            >
              {filtered.map((f, i) => (
                <AccordionItem
                  key={`${f.category}-${f.q}`}
                  value={`item-${i}`}
                  id={f.category.toLowerCase()}
                  className="rounded-xl border border-border border-b-0 bg-card px-5 shadow-elevated data-[state=open]:shadow-glow"
                >
                  <AccordionTrigger className="py-4 text-left font-display text-sm font-semibold tracking-tight hover:no-underline">
                    <span className="pr-4">
                      <span className="mb-1 block text-[0.65rem] font-semibold tracking-[0.14em] text-primary uppercase">
                        {f.category}
                      </span>
                      {f.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      <PageCta
        title="Still need a human answer?"
        body="Our team answers WhatsApp and email seven days a week."
        primary={{ to: "/contact", label: "Contact support" }}
        secondary={{ to: "/how-it-works", label: "Setup guide" }}
      />
    </div>
  );
}
