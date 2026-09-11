import { Link } from "@tanstack/react-router";
import { ArrowRight, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";

type PageCtaProps = {
  label?: string;
  title: string;
  body?: string;
  primary: { to: string; label: string };
  secondary?: { to: string; label: string };
  support?: boolean;
};

export function PageCta({
  label = "Ready when you are",
  title,
  body,
  primary,
  secondary,
  support = true,
}: PageCtaProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-primary py-12 text-primary-foreground sm:py-14">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% -20%, oklch(1 0 0 / 0.16), transparent 55%), radial-gradient(ellipse 40% 50% at 100% 100%, oklch(0.2 0.05 235 / 0.45), transparent 50%)",
        }}
      />
      <div className="container-page relative">
        <Reveal variant="scale">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <p className="section-label text-white/55">{label}</p>
            <h2 className="mt-2 font-display text-[clamp(1.5rem,3vw,2.1rem)] font-semibold tracking-tight text-white">
              {title}
            </h2>
            {body ? <p className="mt-3 max-w-md text-sm leading-relaxed text-white/72">{body}</p> : null}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Button
                asChild
                className="h-11 rounded-lg bg-white px-6 text-foreground shadow-[0_10px_30px_-12px_oklch(0_0_0_/_0.45)] transition-transform hover:-translate-y-0.5 hover:bg-white/92"
              >
                <Link to={primary.to}>
                  {primary.label} <ArrowRight className="size-4" />
                </Link>
              </Button>
              {secondary ? (
                <Button
                  asChild
                  variant="outline"
                  className="h-11 rounded-lg border-white/30 bg-transparent px-5 text-white hover:bg-white/10 hover:text-white"
                >
                  <Link to={secondary.to}>{secondary.label}</Link>
                </Button>
              ) : null}
            </div>
          </div>
        </Reveal>

        {support ? (
          <Reveal delay={100}>
            <div className="mx-auto mt-9 max-w-2xl">
              <div
                className="mb-6 h-px w-full opacity-40"
                style={{
                  background: "linear-gradient(90deg, transparent, oklch(1 0 0 / 0.4), transparent)",
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
        ) : null}
      </div>
    </section>
  );
}
