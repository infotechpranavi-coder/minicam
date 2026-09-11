import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Reveal } from "@/components/site/Reveal";
import { PageCta } from "@/components/site/PageCta";
import { PageHero } from "@/components/site/PageHero";
import lifestyleSupport from "@/assets/lifestyle-support.jpg";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact MiCaWas — Support, Orders & Setup Help" },
      {
        name: "description",
        content:
          "Reach MiCaWas for order help, setup guidance and warranty support by phone, WhatsApp or email. Based in Andheri East, Mumbai.",
      },
      { property: "og:title", content: "Contact MiCaWas — Support, Orders & Setup Help" },
      {
        property: "og:description",
        content: "Call, WhatsApp or email our support team seven days a week.",
      },
    ],
  }),
  component: ContactPage,
});

const channels = [
  {
    icon: Phone,
    title: "Phone",
    detail: "+91 98765 43210",
    note: "Mon–Sun · 9am–9pm IST",
    href: "tel:+919876543210",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    detail: "Chat with support",
    note: "Mon–Sun · 9am–9pm IST",
    href: "https://wa.me/919876543210",
  },
  {
    icon: Mail,
    title: "Email",
    detail: "care@micawas.in",
    note: "Reply within one working day",
    href: "mailto:care@micawas.in",
  },
  {
    icon: MapPin,
    title: "Studio",
    detail: "Andheri East, Mumbai 400069",
    note: "4th Floor, Tech Park",
    href: undefined,
  },
];

const fieldClass =
  "h-11 rounded-lg border-white/20 bg-white/10 text-white placeholder:text-white/45 focus-visible:border-white/45 focus-visible:ring-white/25";

function ContactPage() {
  return (
    <div>
      <PageHero
        label="Contact"
        title="Talk to a real person"
        body="Order questions, setup help or warranty claims — our team is here seven days a week."
        image={lifestyleSupport}
        imageAlt="Customer support specialists ready to help"
      />

      <section className="band-mist section-pad">
        <div className="container-page">
          <div className="mx-auto grid max-w-6xl items-stretch gap-5 lg:grid-cols-[0.35fr_0.65fr] lg:gap-6">
            {/* Left 35% — channel cards */}
            <Reveal className="h-full order-2 lg:order-1">
              <aside className="flex h-full flex-col">
                <p className="section-label">Direct channels</p>
                <h2 className="mt-1.5 font-display text-lg font-semibold tracking-tight text-foreground">
                  Reach us instantly
                </h2>
                <div className="mt-4 flex flex-1 flex-col gap-3">
                  {channels.map((c) => {
                    const inner = (
                      <>
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-primary text-white shadow-glow">
                          <c.icon className="size-4" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-[0.65rem] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                            {c.title}
                          </span>
                          <span className="mt-1 block text-sm font-semibold break-words text-foreground">
                            {c.detail}
                          </span>
                          <span className="mt-0.5 block text-xs text-muted-foreground">{c.note}</span>
                        </span>
                      </>
                    );

                    const className =
                      "flex flex-1 items-center gap-3 rounded-xl border border-border/80 bg-card p-4 shadow-elevated transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-glow";

                    return c.href ? (
                      <a
                        key={c.title}
                        href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                        className={className}
                      >
                        {inner}
                      </a>
                    ) : (
                      <div key={c.title} className={className}>
                        {inner}
                      </div>
                    );
                  })}
                </div>
              </aside>
            </Reveal>

            {/* Right 65% — granite form */}
            <Reveal delay={80} className="h-full order-1 lg:order-2">
              <div className="relative flex h-full min-h-full flex-col overflow-hidden rounded-2xl bg-gradient-primary p-6 text-primary-foreground shadow-[0_20px_50px_-24px_oklch(0.22_0.06_220_/_0.65)] sm:p-8">
                <div
                  className="pointer-events-none absolute inset-0 opacity-50"
                  style={{
                    background:
                      "radial-gradient(ellipse 70% 60% at 10% 0%, oklch(1 0 0 / 0.18), transparent 55%), radial-gradient(ellipse 50% 45% at 100% 100%, oklch(0.2 0.05 235 / 0.4), transparent 50%)",
                  }}
                />
                <div className="relative flex flex-1 flex-col">
                  <p className="text-[0.6875rem] font-semibold tracking-[0.2em] text-white/60 uppercase">
                    Send a message
                  </p>
                  <h2 className="mt-2 font-display text-[clamp(1.35rem,2.2vw,1.75rem)] font-semibold tracking-tight text-white">
                    We usually reply the same day
                  </h2>
                  <p className="mt-2 text-sm text-white/70">
                    Share your question — setup, orders or warranty.
                  </p>

                  <form
                    className="mt-6 flex flex-1 flex-col space-y-3.5"
                    onSubmit={(e) => {
                      e.preventDefault();
                      toast.success("Message received — our team will get back to you shortly.");
                      (e.currentTarget as HTMLFormElement).reset();
                    }}
                  >
                    <div className="grid gap-3.5 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <Label htmlFor="name" className="text-white/75">
                          Name
                        </Label>
                        <Input id="name" name="name" required placeholder="Your name" className={fieldClass} />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="email" className="text-white/75">
                          Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="you@email.com"
                          className={fieldClass}
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="phone" className="text-white/75">
                        Phone
                      </Label>
                      <Input id="phone" name="phone" type="tel" placeholder="+91" className={fieldClass} />
                    </div>
                    <div className="flex flex-1 flex-col space-y-1.5">
                      <Label htmlFor="message" className="text-white/75">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        placeholder="How can we help?"
                        className={cn(
                          "min-h-[140px] flex-1 rounded-lg border-white/20 bg-white/10 text-white placeholder:text-white/45 focus-visible:border-white/45 focus-visible:ring-white/25",
                        )}
                      />
                    </div>
                    <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
                      <Button
                        type="submit"
                        size="lg"
                        className="rounded-lg bg-white px-8 text-foreground hover:bg-white/92"
                      >
                        Send message
                      </Button>
                      <p className="text-xs text-white/60">
                        Prefer self-serve?{" "}
                        <Link to="/faq" className="font-semibold text-white hover:text-white/85">
                          Browse FAQ
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <PageCta
        title="Prefer a quick chat?"
        body="Call or message support any day — setup, orders and warranty help."
        primary={{ to: "/shop", label: "Browse catalog" }}
        secondary={{ to: "/faq", label: "Read FAQ" }}
        support={false}
      />
    </div>
  );
}
