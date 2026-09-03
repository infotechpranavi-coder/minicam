import { Link } from "@tanstack/react-router";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Stars } from "@/components/site/Stars";
import { formatPrice, type Product } from "@/data/catalog";
import { useCart } from "@/lib/cart";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const off = Math.round(((product.mrp - product.price) / product.mrp) * 100);

  return (
    <article className="group relative flex h-full flex-col bg-card">
      <Link
        to="/product/$slug"
        params={{ slug: product.slug }}
        className="relative block aspect-[4/5] overflow-hidden rounded-2xl bg-secondary"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={900}
          height={1125}
          className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        {product.badge ? (
          <span className="absolute left-3 top-3 rounded-full bg-card/90 px-2.5 py-1 text-[10px] font-semibold tracking-[0.12em] text-foreground uppercase backdrop-blur">
            {product.badge}
          </span>
        ) : null}
        {off > 0 ? (
          <span className="absolute right-3 top-3 rounded-full bg-ink/80 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-ink-foreground">
            −{off}%
          </span>
        ) : null}
      </Link>

      <div className="flex flex-1 flex-col gap-2 px-1 pt-4 pb-1">
        <Link
          to="/product/$slug"
          params={{ slug: product.slug }}
          className="font-semibold leading-snug tracking-tight hover:text-primary"
        >
          {product.name}
        </Link>
        <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">{product.short}</p>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Stars rating={product.rating} />
          <span>
            {product.rating.toFixed(1)} ({product.reviewCount})
          </span>
        </div>
        <div className="mt-auto flex items-end justify-between gap-3 pt-3">
          <div>
            <span className="text-base font-semibold tracking-tight">{formatPrice(product.price)}</span>{" "}
            <span className="text-xs text-muted-foreground line-through">{formatPrice(product.mrp)}</span>
          </div>
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              add(product.slug);
              toast.success(`${product.name} added to cart`);
            }}
          >
            <ShoppingCart className="size-3.5" /> Add
          </Button>
        </div>
      </div>
    </article>
  );
}
