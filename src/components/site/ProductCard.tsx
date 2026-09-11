import { Link } from "@tanstack/react-router";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Stars } from "@/components/site/Stars";
import { TiltSpotlight } from "@/components/site/Reveal";
import { formatPrice, type Product } from "@/data/catalog";
import { useCart } from "@/lib/cart";
import { cn } from "@/lib/utils";

export function ProductCard({
  product,
  variant = "default",
}: {
  product: Product;
  variant?: "default" | "premium";
}) {
  const { add } = useCart();
  const off = Math.round(((product.mrp - product.price) / product.mrp) * 100);
  const premium = variant === "premium";

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden border shadow-elevated transition-all duration-300 hover:-translate-y-1 hover:shadow-glow",
        premium
          ? "rounded-xl border-white/70 bg-white text-ink"
          : "rounded-2xl border-border bg-card hover:border-primary/25",
      )}
    >
      <TiltSpotlight className="rounded-none" intensity={premium ? 6 : 8}>
        <div
          className={cn(
            "shine-sweep relative overflow-hidden",
            premium ? "aspect-[5/4] bg-[#eef2f5]" : "aspect-[5/6] bg-secondary",
          )}
        >
          <Link
            to="/product/$slug"
            params={{ slug: product.slug }}
            className="absolute inset-0 block"
            aria-label={product.name}
          >
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              width={900}
              height={1080}
              className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            />
          </Link>
          {(product.badge || off > 0) && (
            <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-start justify-between gap-2 p-2">
              {product.badge ? (
                <span className="rounded-md bg-white/95 px-2 py-0.5 text-[10px] font-semibold tracking-[0.08em] text-ink uppercase backdrop-blur-sm">
                  {product.badge}
                </span>
              ) : (
                <span />
              )}
              {off > 0 ? (
                <span className="rounded-md bg-ink/90 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-white">
                  −{off}%
                </span>
              ) : null}
            </div>
          )}
          <div className="absolute inset-x-0 bottom-0 z-20 translate-y-2 p-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <Button
              size="sm"
              className={cn("w-full rounded-lg shadow-glow", premium ? "h-8 text-xs" : "h-9")}
              onClick={() => {
                add(product.slug);
                toast.success(`${product.name} added to cart`);
              }}
            >
              <ShoppingCart className="size-3.5" /> Quick add
            </Button>
          </div>
        </div>
      </TiltSpotlight>

      <div
        className={cn(
          "flex flex-1 flex-col",
          premium ? "gap-1 px-3 pt-2.5 pb-3" : "gap-1.5 px-3.5 pt-3.5 pb-3.5",
        )}
      >
        <Link
          to="/product/$slug"
          params={{ slug: product.slug }}
          className={cn(
            "line-clamp-2 font-display font-semibold leading-snug tracking-tight transition-colors",
            premium
              ? "text-[0.82rem] text-ink hover:text-primary"
              : "text-[0.9rem] text-foreground hover:text-primary",
          )}
        >
          {product.name}
        </Link>
        {!premium ? (
          <p className="line-clamp-2 text-[0.8rem] leading-relaxed text-muted-foreground">{product.short}</p>
        ) : null}
        <div
          className={cn(
            "flex items-center gap-1.5",
            premium ? "text-[0.65rem] text-ink/55" : "text-[0.7rem] text-muted-foreground",
          )}
        >
          <Stars rating={product.rating} />
          <span>
            {product.rating.toFixed(1)}
            {!premium ? ` · ${product.reviewCount}` : null}
          </span>
        </div>
        <div
          className={cn(
            "mt-auto flex items-center justify-between gap-2",
            premium ? "border-t border-ink/10 pt-2" : "border-t border-border/70 pt-3",
          )}
        >
          <div className="min-w-0">
            <span
              className={cn(
                "font-semibold tracking-tight",
                premium ? "text-[0.9rem] text-ink" : "text-[0.95rem] text-foreground",
              )}
            >
              {formatPrice(product.price)}
            </span>
            <span
              className={cn(
                "ml-1.5 text-[0.65rem] line-through",
                premium ? "text-ink/40" : "text-muted-foreground text-[0.7rem]",
              )}
            >
              {formatPrice(product.mrp)}
            </span>
          </div>
          <Button
            size="sm"
            variant="outline"
            className={cn(
              "shrink-0 rounded-lg px-2 transition-transform hover:-translate-y-0.5",
              premium ? "h-7 border-ink/15 bg-white px-2 text-ink hover:bg-ink/5" : "h-8 px-2.5",
            )}
            onClick={() => {
              add(product.slug);
              toast.success(`${product.name} added to cart`);
            }}
          >
            <ShoppingCart className="size-3.5" />
            <span className="sr-only sm:not-sr-only">Add</span>
          </Button>
        </div>
      </div>
    </article>
  );
}
