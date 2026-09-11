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
      return { meta: [{ title: "Category unavailable — MiCaWas" }, { name: "robots", content: "noindex" }] };
    }
    const { category } = loaderData;
    const title = `${category.name} — Buy Online | MiCaWas`;
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
      <section className="band-dark grain relative overflow-hidden border-b border-border">
        <div className="container-page grid items-center gap-8 py-12 lg:grid-cols-2 lg:gap-12 lg:py-14">
          <Reveal>
            <nav className="text-xs text-muted-foreground">
              <Link to="/" className="hover:text-foreground">
                Home
              </Link>{" "}
              <span className="px-1">/</span>
              <Link to="/shop" className="hover:text-foreground">
                Shop
              </Link>{" "}
              <span className="px-1">/</span>
              <span className="text-foreground">{category.name}</span>
            </nav>
            <p className="section-label mt-5">Category</p>
            <h1 className="mt-2 font-display text-4xl tracking-tight text-foreground sm:text-5xl">
              {category.name}
            </h1>
            <p className="mt-4 max-w-lg text-sm text-muted-foreground sm:text-base">{category.description}</p>
          </Reveal>
          <Reveal delay={80} variant="scale">
            <div className="overflow-hidden rounded-xl bg-secondary ring-1 ring-border shadow-elevated">
              <img
                src={category.image}
                alt={category.name}
                loading="lazy"
                width={900}
                height={600}
                className="aspect-[3/2] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="band-light section-pad">
        <div className="container-page">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-muted-foreground">{items.length} products in this category</p>
            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger className="h-10 w-48 rounded-full" aria-label="Sort products">
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

          <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {items.map((p, i) => (
              <Reveal key={p.slug} delay={i * 45} variant="scale">
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
