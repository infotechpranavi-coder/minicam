import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone, ShieldCheck, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { categories } from "@/data/catalog";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold">
            <ShieldCheck className="size-6 text-primary" />
            Sentra<span className="text-primary">Vue</span>
          </Link>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Bench-tested mini security cameras, trackers and detectors for homes, shops and offices across India.
            Every device ships with a 12-month warranty and human support.
          </p>
          <form
            className="mt-6 flex max-w-sm gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              toast.success("You're on the list — offers land in your inbox soon.");
              (e.currentTarget as HTMLFormElement).reset();
            }}
          >
            <Input type="email" required placeholder="Email address" aria-label="Email address" />
            <Button type="submit">Subscribe</Button>
          </form>
          <div className="mt-6 flex gap-3">
            {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social profile"
                className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider">Shop</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/shop" className="hover:text-primary">All products</Link>
            </li>
            {categories.slice(0, 5).map((c) => (
              <li key={c.slug}>
                <Link to="/category/$slug" params={{ slug: c.slug }} className="hover:text-primary">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider">Company</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary">About us</Link></li>
            <li><Link to="/how-it-works" className="hover:text-primary">How it works</Link></li>
            <li><Link to="/testimonials" className="hover:text-primary">Customer reviews</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>

          <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider">Support</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/faq" className="hover:text-primary">FAQ</Link></li>
            <li className="flex items-center gap-2"><Phone className="size-3.5" /> +91 98765 43210</li>
            <li className="flex items-center gap-2"><Mail className="size-3.5" /> care@sentravue.in</li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 size-3.5" /> 4th Floor, Tech Park, Andheri East, Mumbai 400069</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider">Policies</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/faq" hash="shipping" className="hover:text-primary">Shipping policy</Link></li>
            <li><Link to="/faq" hash="returns" className="hover:text-primary">Returns & refunds</Link></li>
            <li><Link to="/faq" hash="warranty" className="hover:text-primary">Warranty terms</Link></li>
            <li><Link to="/faq" hash="usage" className="hover:text-primary">Lawful use guidance</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} SentraVue Technologies Pvt. Ltd. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-2">
            {["UPI", "Visa", "Mastercard", "RuPay", "Net Banking", "COD"].map((m) => (
              <span key={m} className="rounded-md border border-border bg-card px-2.5 py-1 font-medium">
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
