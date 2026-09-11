import type { ReactNode } from "react";
import { Reveal } from "@/components/site/Reveal";

type PageHeroProps = {
  label: string;
  title: string;
  body?: string;
  image?: string;
  imageAlt?: string;
  align?: "center" | "left";
  children?: ReactNode;
};

export function PageHero({
  label,
  title,
  body,
  image,
  imageAlt = "",
  align = "left",
  children,
}: PageHeroProps) {
  return (
    <section className="grain band-dark relative overflow-hidden border-b border-border">
      {image ? (
        <>
          <img
            src={image}
            alt={imageAlt}
            className="absolute inset-0 size-full object-cover opacity-35"
            aria-hidden={imageAlt ? undefined : true}
          />
          <div className="absolute inset-0 bg-hero" />
          <div
            className="pointer-events-none absolute inset-0 opacity-50"
            style={{
              background:
                "radial-gradient(ellipse 55% 45% at 80% 30%, oklch(0.55 0.12 195 / 0.28), transparent 70%)",
            }}
          />
        </>
      ) : (
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 55% 45% at 80% 20%, oklch(0.55 0.12 195 / 0.3), transparent 70%)",
          }}
        />
      )}

      <div
        className={`container-page relative py-14 sm:py-16 ${
          align === "center" ? "max-w-3xl text-center" : "max-w-3xl text-left"
        }`}
      >
        <Reveal>
          <p className="section-label">{label}</p>
          <h1 className="section-title text-[clamp(1.85rem,3.6vw,2.85rem)]">{title}</h1>
          {body ? <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">{body}</p> : null}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
