import { useMemo, useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ProductCard } from "@/components/site/ProductCard";
import { Reveal } from "@/components/site/Reveal";
import { getCategory, productsByCategory, type CategorySlug } from "@/data/catalog";

export const Route = createFileRoute("/category/$slug")({
  loader: ({ params }) => {
    const category = getCategory(params.slug);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Category unavailable — Mini Camerawala" }, { name: "robots", content: "noindex" }] };
    }
    const { category } = loaderData;
    const title = `${category.name} — Buy Online | Mini Camerawala`;
    return {
      meta: [
        { title },
        { name: "description", content: category.description },
        { property: "og:title", content: title },
        { property: "og:description", content: category.description },
      ],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useLoaderData();
  const [sort, setSort] = useState("featured");

  const items = useMemo(() => {
    const list = [...productsByCategory(category.slug as CategorySlug)];
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [category.slug, sort]);

  return (
    <div>
      <section className="relative overflow-hidden border-b border-border bg-hero">
        <div className="absolute inset-0 grid-lines opacity-25" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2">
          <div>
            <nav className="text-xs text-muted-foreground">
              <Link to="/" className="hover:text-primary">Home</Link> <span className="px-1">/</span>
              <Link to="/shop" className="hover:text-primary">Shop</Link> <span className="px-1">/</span>
              <span className="text-foreground">{category.name}</span>
            </nav>
            <h1 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl">{category.name}</h1>
            <p className="mt-4 max-w-lg text-sm text-muted-foreground sm:text-base">{category.description}</p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border shadow-elevated">
            <img
              src={category.image}
              alt={category.name}
              loading="lazy"
              width={900}
              height={600}
              className="aspect-[3/2] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground">{items.length} products in this category</p>
          <Select value={sort} onValueChange={setSort}>
            <SelectTrigger className="w-48" aria-label="Sort products">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-asc">Price: low to high</SelectItem>
              <SelectItem value="price-desc">Price: high to low</SelectItem>
              <SelectItem value="rating">Top rated</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((p, i) => (
            <Reveal key={p.slug} delay={i * 50}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
