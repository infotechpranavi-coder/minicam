import { useEffect, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Aperture, Menu, Phone, Search, ShoppingBag, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { categories } from "@/data/catalog";
import { CartSheet } from "@/components/site/CartSheet";
import { useCart } from "@/lib/cart";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home", exact: true },
  { to: "/shop", label: "Shop" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/about", label: "About" },
  { to: "/testimonials", label: "Reviews" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const { count } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate({ to: "/shop", search: { q: query || undefined } });
    setOpen(false);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-[background,box-shadow,border-color] duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/85 shadow-[0_12px_40px_-24px_oklch(0.18_0.04_230/0.55)] backdrop-blur-2xl"
          : "border-b border-transparent bg-background/55 backdrop-blur-xl",
      )}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-[84rem] items-center gap-4 px-4 sm:gap-6 sm:px-7">
        <Link
          to="/"
          className="group flex shrink-0 items-center gap-2.5 transition-transform duration-300 hover:-translate-y-px"
        >
          <span className="relative flex size-9 items-center justify-center overflow-hidden rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
            <Aperture className="size-4 transition-transform duration-500 group-hover:rotate-90" />
            <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(1_0_0/0.35),transparent_55%)]" />
          </span>
          <span className="font-display text-[1.05rem] leading-none font-semibold tracking-tight">
            Mi<span className="text-primary">Ca</span>Was
            <span className="mt-0.5 block text-[0.65rem] font-medium tracking-[0.16em] text-muted-foreground uppercase">
              Security gadgets
            </span>
          </span>
        </Link>

        <nav className="hidden items-center rounded-full border border-border/60 bg-card/60 p-1 shadow-[inset_0_1px_0_oklch(1_0_0/0.55)] backdrop-blur-md lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={"exact" in l && l.exact ? { exact: true } : undefined}
              className="rounded-full px-3.5 py-1.5 text-[0.78rem] font-semibold tracking-wide transition-all duration-200"
              inactiveProps={{
                className: "text-muted-foreground hover:bg-secondary hover:text-foreground",
              }}
              activeProps={{
                className: "bg-foreground text-background shadow-elevated",
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 sm:gap-2.5">
          <form onSubmit={submit} className="hidden max-w-[15.5rem] flex-1 md:block lg:max-w-[17rem]">
            <div className="group relative">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search cameras…"
                className="h-10 rounded-full border-border/70 bg-card/70 pl-10 pr-4 shadow-[inset_0_1px_0_oklch(1_0_0/0.4)] transition-all focus-visible:border-primary/40 focus-visible:ring-primary/20"
                aria-label="Search products"
              />
            </div>
          </form>

          <Button
            asChild
            variant="ghost"
            size="icon"
            className="hidden size-10 rounded-full border border-border/60 bg-card/50 text-muted-foreground hover:bg-secondary hover:text-foreground xl:inline-flex"
          >
            <a href="tel:+919876543210" aria-label="Call support">
              <Phone className="size-4" />
            </a>
          </Button>

          <CartSheet
            trigger={
              <Button
                variant="outline"
                className="relative h-10 gap-2 rounded-full border-border/70 bg-card/70 px-3.5 shadow-[inset_0_1px_0_oklch(1_0_0/0.4)] hover:-translate-y-px hover:border-primary/30 hover:bg-card"
                aria-label="Open cart"
              >
                <ShoppingBag className="size-4" />
                <span className="hidden text-xs font-semibold sm:inline">Cart</span>
                {count > 0 ? (
                  <span className="absolute -right-1 -top-1 flex size-5 min-w-5 items-center justify-center rounded-full bg-gradient-primary text-[10px] font-bold text-primary-foreground shadow-glow">
                    {count}
                  </span>
                ) : (
                  <span className="hidden rounded-full bg-secondary px-1.5 py-0.5 text-[10px] font-bold text-muted-foreground sm:inline">
                    0
                  </span>
                )}
              </Button>
            }
          />

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                aria-label="Open menu"
                className="size-10 rounded-full border-border/70 bg-card/70 lg:hidden"
              >
                {open ? <X className="size-4" /> : <Menu className="size-4" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[88vw] max-w-sm overflow-y-auto border-l border-border bg-background/95 backdrop-blur-xl">
              <div className="space-y-8 p-6">
                <div className="flex items-center gap-2.5">
                  <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                    <Aperture className="size-4" />
                  </span>
                  <div>
                    <p className="font-display text-sm font-semibold tracking-tight">MiCaWas</p>
                    <p className="text-xs text-muted-foreground">Precision surveillance</p>
                  </div>
                </div>

                <form onSubmit={submit} className="relative">
                  <Search className="pointer-events-none absolute left-3.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search products"
                    aria-label="Search products"
                    className="h-11 rounded-full pl-10"
                  />
                </form>

                <nav className="grid gap-1.5">
                  {links.map((l) => (
                    <Link
                      key={l.to}
                      to={l.to}
                      onClick={() => setOpen(false)}
                      activeOptions={"exact" in l && l.exact ? { exact: true } : undefined}
                      className="rounded-xl px-3.5 py-3 text-sm font-semibold transition-colors"
                      inactiveProps={{
                        className: "text-muted-foreground hover:bg-secondary hover:text-foreground",
                      }}
                      activeProps={{
                        className: "bg-foreground text-background",
                      }}
                    >
                      {l.label}
                    </Link>
                  ))}
                </nav>

                <div>
                  <p className="px-1 text-[0.6875rem] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                    Categories
                  </p>
                  <nav className="mt-3 grid gap-1">
                    {categories.map((c) => (
                      <Link
                        key={c.slug}
                        to="/category/$slug"
                        params={{ slug: c.slug }}
                        onClick={() => setOpen(false)}
                        className="rounded-xl px-3.5 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                      >
                        {c.name}
                      </Link>
                    ))}
                  </nav>
                </div>

                <Button asChild className="w-full rounded-full">
                  <Link to="/shop" onClick={() => setOpen(false)}>
                    Browse catalog
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div
        className={cn(
          "hidden overflow-hidden border-t border-border/40 transition-all duration-300 lg:block",
          scrolled ? "max-h-0 border-transparent opacity-0" : "max-h-14 opacity-100",
        )}
      >
        <div className="mx-auto flex max-w-[84rem] items-center gap-2 overflow-x-auto px-4 py-2.5 sm:px-7">
          <span className="mr-1 shrink-0 text-[0.65rem] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
            Shop
          </span>
          {categories.map((c) => (
            <Link
              key={c.slug}
              to="/category/$slug"
              params={{ slug: c.slug }}
              className="shrink-0 rounded-full border border-transparent bg-transparent px-3 py-1.5 text-[0.7rem] font-semibold tracking-wide text-muted-foreground transition-all duration-200 hover:-translate-y-px hover:border-border hover:bg-card hover:text-foreground hover:shadow-elevated"
              activeProps={{
                className:
                  "shrink-0 rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-[0.7rem] font-semibold tracking-wide text-primary",
              }}
            >
              {c.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
