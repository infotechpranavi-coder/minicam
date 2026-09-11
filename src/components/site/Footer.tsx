import { Link } from "@tanstack/react-router";
import { Aperture, Mail, MapPin, Phone } from "lucide-react";
import { categories } from "@/data/catalog";

const linkItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/shop", label: "Products" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/testimonials", label: "Reviews" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact Us" },
] as const;

const trustStandards = [
  "Bench-tested hardware",
  "12-month warranty",
  "COD nationwide",
  "Secure UPI & cards",
  "WhatsApp setup help",
  "Lawful-use guidance",
  "Human support 7 days",
];

const contactCards = [
  {
    icon: Phone,
    label: "Phone",
    detail: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: Mail,
    label: "Email",
    detail: "care@micawas.in",
    href: "mailto:care@micawas.in",
  },
  {
    icon: MapPin,
    label: "Location",
    detail: "4th Floor, Tech Park, Andheri East, Mumbai 400069",
    href: undefined,
  },
] as const;

export function Footer() {
  return (
    <footer className="band-mist border-t border-border">
      <div className="container-page py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 xl:gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="group inline-flex items-center gap-2.5">
              <span className="relative flex size-10 items-center justify-center overflow-hidden rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                <Aperture className="size-4 transition-transform duration-500 group-hover:rotate-90" />
                <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(1_0_0/0.35),transparent_55%)]" />
              </span>
              <span className="font-display text-[1.05rem] leading-none font-semibold tracking-tight text-foreground">
                Mi<span className="text-primary">Ca</span>Was
                <span className="mt-0.5 block text-[0.65rem] font-medium tracking-[0.16em] text-muted-foreground uppercase">
                  Security gadgets
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Bench-tested mini security cameras, trackers and detectors for homes, shops and offices
              across India. Every device ships with a 12-month warranty and human support.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-display text-base font-semibold tracking-tight text-foreground">
              Links
              <span className="mt-2 block h-0.5 w-10 rounded-full bg-gradient-primary" />
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
              {linkItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="transition-colors hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-display text-base font-semibold tracking-tight text-foreground">
              Categories
              <span className="mt-2 block h-0.5 w-10 rounded-full bg-gradient-primary" />
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link
                    to="/category/$slug"
                    params={{ slug: c.slug }}
                    className="transition-colors hover:text-foreground"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact cards */}
          <div>
            <h3 className="font-display text-base font-semibold tracking-tight text-foreground">
              Contact
              <span className="mt-2 block h-0.5 w-10 rounded-full bg-gradient-primary" />
            </h3>
            <div className="mt-5 space-y-3">
              {contactCards.map((card) => {
                const Icon = card.icon;
                const inner = (
                  <>
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/25">
                      <Icon className="size-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[0.65rem] font-semibold tracking-[0.16em] text-white/75 uppercase">
                        {card.label}
                      </span>
                      <span className="mt-0.5 block text-sm leading-snug font-medium text-white">
                        {card.detail}
                      </span>
                    </span>
                  </>
                );

                const className =
                  "flex items-start gap-3 rounded-xl bg-gradient-primary px-3.5 py-3.5 text-primary-foreground shadow-[0_10px_28px_-16px_oklch(0.28_0.06_220_/_0.65)] transition-transform hover:-translate-y-0.5";

                return card.href ? (
                  <a key={card.label} href={card.href} className={className}>
                    {inner}
                  </a>
                ) : (
                  <div key={card.label} className={className}>
                    {inner}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Trust / standards bar */}
      <div className="border-t border-border">
        <div className="container-page py-8">
          <p className="text-center text-[0.7rem] font-semibold tracking-[0.18em] text-foreground uppercase">
            Why buyers trust MiCaWas
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5">
            {trustStandards.map((item) => (
              <span
                key={item}
                className="rounded-full bg-gradient-primary px-3.5 py-1.5 text-[0.72rem] font-semibold tracking-wide text-primary-foreground shadow-[0_8px_20px_-14px_oklch(0.28_0.06_220_/_0.7)]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-border">
        <div className="container-page grid gap-4 py-6 text-xs text-muted-foreground sm:grid-cols-3 sm:items-start">
          <p className="sm:text-left">Bench-tested security gadgets for India.</p>
          <p className="text-center font-medium text-foreground/80">
            © {new Date().getFullYear()} MiCaWas. All Rights Reserved.
          </p>
          <div className="flex flex-col items-start gap-1.5 sm:items-end">
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              <Link to="/faq" hash="shipping" className="transition-colors hover:text-foreground">
                Privacy Policy
              </Link>
              <Link to="/faq" hash="usage" className="transition-colors hover:text-foreground">
                Terms & Conditions
              </Link>
            </div>
            <p className="text-[0.7rem]">
              Powered by{" "}
              <a
                href="https://www.pranaviinfotech.com/"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-foreground transition-colors hover:text-primary"
              >
                Pranavi Infotech
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
