import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone, ShieldCheck, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { categories } from "@/data/catalog";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-page grid gap-12 py-16 lg:grid-cols-5 lg:gap-10">
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight">
            <ShieldCheck className="size-6 text-primary" />
            Mini <span className="text-primary">Camerawala</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Bench-tested mini security cameras, trackers and detectors for homes, shops and offices across India.
            Every device ships with a 12-month warranty and human support.
          </p>
          <form
            className="mt-7 flex max-w-sm gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              toast.success("You're on the list — offers land in your inbox soon.");
              (e.currentTarget as HTMLFormElement).reset();
            }}
          >
            <Input
              type="email"
              required
              placeholder="Email address"
              aria-label="Email address"
              className="h-11 bg-card"
            />
            <Button type="submit" className="h-11 px-5">
              Subscribe
            </Button>
          </form>
          <div className="mt-7 flex gap-2.5">
            {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social profile"
                className="flex size-10 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-[0.12em] text-foreground uppercase">Shop</h3>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>
              <Link to="/shop" className="transition-colors hover:text-primary">
                All products
              </Link>
            </li>
            {categories.slice(0, 5).map((c) => (
              <li key={c.slug}>
                <Link
                  to="/category/$slug"
                  params={{ slug: c.slug }}
                  className="transition-colors hover:text-primary"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-[0.12em] text-foreground uppercase">Company</h3>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>
              <Link to="/about" className="transition-colors hover:text-primary">
                About us
              </Link>
            </li>
            <li>
              <Link to="/how-it-works" className="transition-colors hover:text-primary">
                How it works
              </Link>
            </li>
            <li>
              <Link to="/testimonials" className="transition-colors hover:text-primary">
                Customer reviews
              </Link>
            </li>
            <li>
              <Link to="/contact" className="transition-colors hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>

          <h3 className="mt-10 text-xs font-semibold tracking-[0.12em] text-foreground uppercase">Support</h3>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>
              <Link to="/faq" className="transition-colors hover:text-primary">
                FAQ
              </Link>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="size-3.5 shrink-0" /> +91 98765 43210
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="size-3.5 shrink-0" /> care@minicamerawala.in
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-3.5 shrink-0" /> 4th Floor, Tech Park, Andheri East, Mumbai
              400069
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-[0.12em] text-foreground uppercase">Policies</h3>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>
              <Link to="/faq" hash="shipping" className="transition-colors hover:text-primary">
                Shipping policy
              </Link>
            </li>
            <li>
              <Link to="/faq" hash="returns" className="transition-colors hover:text-primary">
                Returns & refunds
              </Link>
            </li>
            <li>
              <Link to="/faq" hash="warranty" className="transition-colors hover:text-primary">
                Warranty terms
              </Link>
            </li>
            <li>
              <Link to="/faq" hash="usage" className="transition-colors hover:text-primary">
                Lawful use guidance
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col items-center justify-between gap-4 py-7 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Mini Camerawala Technologies Pvt. Ltd. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-2">
            {["UPI", "Visa", "Mastercard", "RuPay", "Net Banking", "COD"].map((m) => (
              <span key={m} className="rounded-md border border-border bg-card px-2.5 py-1.5 font-medium">
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
