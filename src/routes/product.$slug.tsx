import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { BadgeCheck, Minus, Plus, ShieldCheck, Truck } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Stars } from "@/components/site/Stars";
import { ProductCard } from "@/components/site/ProductCard";
import { Reveal } from "@/components/site/Reveal";
import { PageCta } from "@/components/site/PageCta";
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
      return { meta: [{ title: "Product unavailable — MiCaWas" }, { name: "robots", content: "noindex" }] };
    }
    const { product } = loaderData;
    const title = `${product.name} — MiCaWas`;
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
    <div>
      <section className="band-mist border-b border-border">
        <div className="container-page py-8 sm:py-10">
          <nav className="text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground">
              Home
            </Link>{" "}
            <span className="px-1">/</span>
            <Link to="/shop" className="hover:text-foreground">
              Shop
            </Link>{" "}
            <span className="px-1">/</span>
            {category ? (
              <>
                <Link to="/category/$slug" params={{ slug: category.slug }} className="hover:text-foreground">
                  {category.name}
                </Link>
                <span className="px-1">/</span>
              </>
            ) : null}
            <span className="text-foreground">{product.name}</span>
          </nav>

          <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-10">
            <Reveal variant="scale">
              <div className="overflow-hidden rounded-xl border border-border bg-card shadow-elevated">
                <img
                  src={product.gallery[active]}
                  alt={product.name}
                  width={900}
                  height={900}
                  className="aspect-square w-full object-cover"
                />
              </div>
              <div className="mt-3 flex gap-2.5">
                {product.gallery.map((g, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={`View image ${i + 1}`}
                    className={`size-[4.5rem] overflow-hidden rounded-lg border transition-all ${
                      i === active
                        ? "border-primary shadow-glow"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <img src={g} alt="" loading="lazy" width={80} height={80} className="size-full object-cover" />
                  </button>
                ))}
              </div>
            </Reveal>

            <Reveal delay={80}>
              {product.badge ? (
                <span className="inline-flex rounded-md bg-gradient-primary px-2.5 py-1 text-[11px] font-semibold tracking-wide text-primary-foreground uppercase">
                  {product.badge}
                </span>
              ) : null}
              <h1 className="mt-3 font-display text-3xl tracking-tight text-foreground sm:text-4xl">
                {product.name}
              </h1>
              <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                <Stars rating={product.rating} />
                {product.rating.toFixed(1)} · {product.reviewCount} reviews
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{product.description}</p>

              <div className="mt-6 flex items-end gap-3">
                <span className="font-display text-3xl tracking-tight text-foreground">
                  {formatPrice(product.price)}
                </span>
                <span className="text-sm text-muted-foreground line-through">{formatPrice(product.mrp)}</span>
                <span className="text-sm font-semibold text-success">
                  Save {formatPrice(product.mrp - product.price)}
                </span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">Inclusive of all taxes</p>

              <ul className="mt-6 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                {product.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <BadgeCheck className="size-4 shrink-0 text-primary" /> {f}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 rounded-full border border-border bg-card p-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="size-8 rounded-full"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    aria-label="Decrease quantity"
                  >
                    <Minus className="size-4" />
                  </Button>
                  <span className="w-8 text-center text-sm font-semibold">{qty}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="size-8 rounded-full"
                    onClick={() => setQty((q) => q + 1)}
                    aria-label="Increase quantity"
                  >
                    <Plus className="size-4" />
                  </Button>
                </div>
                <Button
                  size="lg"
                  className="rounded-full shadow-glow"
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
                  className="rounded-full"
                  onClick={() => {
                    add(product.slug, qty);
                    toast.success("Buy now is a demo — our team will call to confirm your order.");
                  }}
                >
                  Buy now
                </Button>
              </div>

              <div className="mt-8 grid gap-3 rounded-xl border border-border bg-card p-5 text-sm shadow-elevated sm:grid-cols-2">
                <p className="flex items-center gap-2 text-muted-foreground">
                  <Truck className="size-4 text-primary" /> Free shipping over ₹999
                </p>
                <p className="flex items-center gap-2 text-muted-foreground">
                  <ShieldCheck className="size-4 text-primary" /> 12-month warranty
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="band-light section-pad">
        <div className="container-page">
          <Tabs defaultValue="specs">
            <TabsList className="rounded-full">
              <TabsTrigger value="specs" className="rounded-full">
                Specifications
              </TabsTrigger>
              <TabsTrigger value="reviews" className="rounded-full">
                Reviews ({product.reviewCount})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="specs" className="mt-6">
              <div className="overflow-hidden rounded-xl border border-border shadow-elevated">
                <table className="w-full text-sm">
                  <tbody>
                    {Object.entries(product.specs).map(([k, v], i) => (
                      <tr key={k} className={i % 2 ? "bg-card" : "bg-secondary/50"}>
                        <th scope="row" className="w-1/3 px-5 py-3.5 text-left font-semibold text-foreground">
                          {k}
                        </th>
                        <td className="px-5 py-3.5 text-muted-foreground">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
              <div className="grid gap-3 md:grid-cols-2">
                {reviews.map((r) => (
                  <figure
                    key={r.name}
                    className="rounded-xl border border-border bg-card p-5 shadow-elevated transition-all hover:-translate-y-1 hover:shadow-glow"
                  >
                    <div className="flex items-center justify-between">
                      <Stars rating={r.rating} />
                      <span className="text-xs text-muted-foreground">{r.date}</span>
                    </div>
                    <blockquote className="mt-3 text-sm text-muted-foreground">“{r.quote}”</blockquote>
                    <figcaption className="mt-3 text-sm font-semibold text-foreground">
                      {r.name} <span className="font-normal text-muted-foreground">· {r.city}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {related.length ? (
        <section className="band-slate section-pad">
          <div className="container-page">
            <Reveal>
              <p className="section-label">More like this</p>
              <h2 className="section-title">Related products</h2>
            </Reveal>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i * 45} variant="scale">
                  <ProductCard product={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <PageCta
        title="Questions before you order?"
        body="Setup, SD cards, WiFi pairing and warranty — ask support any day of the week."
        primary={{ to: "/contact", label: "Contact support" }}
        secondary={{ to: "/faq", label: "Read FAQ" }}
      />
    </div>
  );
}
