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
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow">
      <Link
        to="/product/$slug"
        params={{ slug: product.slug }}
        className="relative block aspect-square overflow-hidden bg-secondary"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={900}
          height={900}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {product.badge ? (
          <span className="absolute left-3 top-3 rounded-full bg-gradient-primary px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary-foreground">
            {product.badge}
          </span>
        ) : null}
        {off > 0 ? (
          <span className="absolute right-3 top-3 rounded-full border border-border bg-background/80 px-2 py-1 text-[11px] font-semibold text-foreground backdrop-blur">
            {off}% off
          </span>
        ) : null}
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <Link to="/product/$slug" params={{ slug: product.slug }} className="font-semibold leading-snug hover:text-primary">
          {product.name}
        </Link>
        <p className="line-clamp-2 text-sm text-muted-foreground">{product.short}</p>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Stars rating={product.rating} />
          <span>
            {product.rating.toFixed(1)} ({product.reviewCount})
          </span>
        </div>
        <div className="mt-auto flex items-end justify-between gap-2 pt-2">
          <div>
            <span className="text-lg font-bold">{formatPrice(product.price)}</span>{" "}
            <span className="text-xs text-muted-foreground line-through">{formatPrice(product.mrp)}</span>
          </div>
          <Button
            size="sm"
            onClick={() => {
              add(product.slug);
              toast.success(`${product.name} added to cart`);
            }}
          >
            <ShoppingCart className="size-4" /> Add
          </Button>
        </div>
      </div>
    </article>
  );
}
