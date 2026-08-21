import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { BadgeCheck, Minus, Plus, ShieldCheck, Truck } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Stars } from "@/components/site/Stars";
import { ProductCard } from "@/components/site/ProductCard";
import { formatPrice, getCategory, getProduct, products, testimonials } from "@/data/catalog";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Product unavailable — SentraVue" }, { name: "robots", content: "noindex" }] };
    }
    const { product } = loaderData;
    const title = `${product.name} — SentraVue`;
    return {
      meta: [
        { title },
        { name: "description", content: product.short },
        { property: "og:title", content: title },
        { property: "og:description", content: product.short },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const [active, setActive] = useState(0);
  const category = getCategory(product.category);
  const related = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 4);
  const reviews = testimonials.slice(0, 4);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <nav className="text-xs text-muted-foreground">
        <Link to="/" className="hover:text-primary">Home</Link> <span className="px-1">/</span>
        <Link to="/shop" className="hover:text-primary">Shop</Link> <span className="px-1">/</span>
        {category ? (
          <>
            <Link to="/category/$slug" params={{ slug: category.slug }} className="hover:text-primary">
              {category.name}
            </Link>
            <span className="px-1">/</span>
          </>
        ) : null}
        <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="mt-8 grid gap-10 lg:grid-cols-2">
        <div>
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <img
              src={product.gallery[active]}
              alt={product.name}
              width={900}
              height={900}
              className="aspect-square w-full object-cover"
            />
          </div>
          <div className="mt-3 flex gap-3">
            {product.gallery.map((g, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`View image ${i + 1}`}
                className={`size-20 overflow-hidden rounded-lg border transition-colors ${
                  i === active ? "border-primary" : "border-border hover:border-primary/50"
                }`}
              >
                <img src={g} alt="" loading="lazy" width={80} height={80} className="size-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div>
          {product.badge ? (
            <span className="rounded-full bg-gradient-primary px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary-foreground">
              {product.badge}
            </span>
          ) : null}
          <h1 className="mt-3 font-display text-3xl font-bold sm:text-4xl">{product.name}</h1>
          <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
            <Stars rating={product.rating} />
            {product.rating.toFixed(1)} · {product.reviewCount} reviews
          </div>
          <p className="mt-4 text-sm text-muted-foreground">{product.description}</p>

          <div className="mt-6 flex items-end gap-3">
            <span className="font-display text-3xl font-bold">{formatPrice(product.price)}</span>
            <span className="text-sm text-muted-foreground line-through">{formatPrice(product.mrp)}</span>
            <span className="text-sm font-semibold text-success">
              Save {formatPrice(product.mrp - product.price)}
            </span>
          </div>
          <p className="mt-1 text-xs text-muted-foreground">Inclusive of all taxes</p>

          <ul className="mt-6 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
            {product.features.map((f) => (
              <li key={f} className="flex items-center gap-2">
                <BadgeCheck className="size-4 text-primary" /> {f}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 rounded-md border border-border p-1">
              <Button variant="ghost" size="icon" className="size-8" onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease quantity">
                <Minus className="size-4" />
              </Button>
              <span className="w-8 text-center text-sm font-semibold">{qty}</span>
              <Button variant="ghost" size="icon" className="size-8" onClick={() => setQty((q) => q + 1)} aria-label="Increase quantity">
                <Plus className="size-4" />
              </Button>
            </div>
            <Button
              size="lg"
              onClick={() => {
                add(product.slug, qty);
                toast.success(`${product.name} × ${qty} added to cart`);
              }}
            >
              Add to cart
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                add(product.slug, qty);
                toast.success("Buy now is a demo — our team will call to confirm your order.");
              }}
            >
              Buy now
            </Button>
          </div>

          <div className="mt-8 grid gap-3 rounded-xl border border-border bg-card p-5 text-sm sm:grid-cols-2">
            <p className="flex items-center gap-2 text-muted-foreground">
              <Truck className="size-4 text-primary" /> Free shipping over ₹999
            </p>
            <p className="flex items-center gap-2 text-muted-foreground">
              <ShieldCheck className="size-4 text-primary" /> 12-month warranty
            </p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="specs" className="mt-16">
        <TabsList>
          <TabsTrigger value="specs">Specifications</TabsTrigger>
          <TabsTrigger value="reviews">Reviews ({product.reviewCount})</TabsTrigger>
        </TabsList>

        <TabsContent value="specs" className="mt-6">
          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm">
              <tbody>
                {Object.entries(product.specs).map(([k, v], i) => (
                  <tr key={k} className={i % 2 ? "bg-card" : "bg-surface"}>
                    <th scope="row" className="w-1/3 px-5 py-3 text-left font-semibold">{k}</th>
                    <td className="px-5 py-3 text-muted-foreground">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>

        <TabsContent value="reviews" className="mt-6">
          <div className="grid gap-4 md:grid-cols-2">
            {reviews.map((r) => (
              <figure key={r.name} className="rounded-xl border border-border bg-card p-5">
                <div className="flex items-center justify-between">
                  <Stars rating={r.rating} />
                  <span className="text-xs text-muted-foreground">{r.date}</span>
                </div>
                <blockquote className="mt-3 text-sm text-muted-foreground">“{r.quote}”</blockquote>
                <figcaption className="mt-3 text-sm font-semibold">
                  {r.name} <span className="font-normal text-muted-foreground">· {r.city}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {related.length ? (
        <section className="mt-16">
          <h2 className="font-display text-2xl font-bold">Related products</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
