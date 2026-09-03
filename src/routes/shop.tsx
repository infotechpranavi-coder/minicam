import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { ProductCard } from "@/components/site/ProductCard";
import { categories, products, formatPrice, type CategorySlug } from "@/data/catalog";

const searchSchema = z.object({ q: z.string().optional() });

export const Route = createFileRoute("/shop")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Shop All Security Cameras & Gadgets — Mini Camerawala" },
      {
        name: "description",
        content:
          "Filter and sort the full Mini Camerawala catalog: pocket, pen and button cameras, WiFi hidden cams, night vision devices, GPS trackers and detectors.",
      },
      { property: "og:title", content: "Shop All Security Cameras & Gadgets — Mini Camerawala" },
      {
        property: "og:description",
        content: "Filter by category, price, night vision, WiFi and battery life across the full catalog.",
      },
    ],
  }),
  component: Shop,
});

const PAGE_SIZE = 6;

function Shop() {
  const { q } = Route.useSearch();
  const [query, setQuery] = useState(q ?? "");
  const [selected, setSelected] = useState<CategorySlug[]>([]);
  const [maxPrice, setMaxPrice] = useState(5000);
  const [nightVision, setNightVision] = useState(false);
  const [wifi, setWifi] = useState(false);
  const [longBattery, setLongBattery] = useState(false);
  const [sort, setSort] = useState("featured");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    let list = products.filter((p) => {
      if (term && !(`${p.name} ${p.short} ${p.category}`.toLowerCase().includes(term))) return false;
      if (selected.length && !selected.includes(p.category)) return false;
      if (p.price > maxPrice) return false;
      if (nightVision && !p.nightVision) return false;
      if (wifi && !p.wifi) return false;
      if (longBattery && p.batteryHours < 6) return false;
      return true;
    });

    list = [...list];
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [query, selected, maxPrice, nightVision, wifi, longBattery, sort]);

  const pages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = Math.min(page, pages);
  const visible = filtered.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);

  const reset = () => {
    setQuery("");
    setSelected([]);
    setMaxPrice(5000);
    setNightVision(false);
    setWifi(false);
    setLongBattery(false);
    setSort("featured");
    setPage(1);
  };

  const toggleCategory = (slug: CategorySlug) => {
    setPage(1);
    setSelected((prev) => (prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]));
  };

  const filterPanel = (
    <div className="space-y-8">
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider">Category</h3>
        <div className="mt-3 space-y-2.5">
          {categories.map((c) => (
            <div key={c.slug} className="flex items-center gap-2.5">
              <Checkbox
                id={`cat-${c.slug}`}
                checked={selected.includes(c.slug)}
                onCheckedChange={() => toggleCategory(c.slug)}
              />
              <Label htmlFor={`cat-${c.slug}`} className="text-sm font-normal text-muted-foreground">
                {c.name}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider">Max price</h3>
        <Slider
          className="mt-4"
          min={1000}
          max={5000}
          step={100}
          value={[maxPrice]}
          onValueChange={(v) => {
            setMaxPrice(v[0]);
            setPage(1);
          }}
        />
        <p className="mt-2 text-sm text-muted-foreground">Up to {formatPrice(maxPrice)}</p>
      </div>

      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider">Features</h3>
        <div className="mt-3 space-y-2.5">
          {[
            { id: "nv", label: "Night vision", value: nightVision, set: setNightVision },
            { id: "wifi", label: "WiFi / app pairing", value: wifi, set: setWifi },
            { id: "batt", label: "Battery 6h or more", value: longBattery, set: setLongBattery },
          ].map((f) => (
            <div key={f.id} className="flex items-center gap-2.5">
              <Checkbox
                id={f.id}
                checked={f.value}
                onCheckedChange={(v) => {
                  f.set(Boolean(v));
                  setPage(1);
                }}
              />
              <Label htmlFor={f.id} className="text-sm font-normal text-muted-foreground">
                {f.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Button variant="outline" className="w-full" onClick={reset}>
        Reset filters
      </Button>
    </div>
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <header className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">Catalog</p>
        <h1 className="mt-2 font-display text-4xl tracking-tight">All products</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          {products.length} tested devices across cameras, trackers and detectors. Filter by what matters to you.
        </p>
      </header>

      <div className="mt-10 grid gap-8 lg:grid-cols-[260px_1fr]">
        <aside className="hidden lg:block">
          <div className="sticky top-32 rounded-xl border border-border bg-card p-6">{filterPanel}</div>
        </aside>

        <div>
          <div className="flex flex-wrap items-center gap-3">
            <Input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
              placeholder="Search products"
              aria-label="Search products"
              className="max-w-xs"
            />
            <Select
              value={sort}
              onValueChange={(v) => {
                setSort(v);
                setPage(1);
              }}
            >
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
            <span className="ml-auto text-sm text-muted-foreground">{filtered.length} results</span>
          </div>

          <details className="mt-4 rounded-xl border border-border bg-card p-4 lg:hidden">
            <summary className="flex cursor-pointer items-center gap-2 text-sm font-semibold">
              <SlidersHorizontal className="size-4" /> Filters
            </summary>
            <div className="mt-6">{filterPanel}</div>
          </details>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {visible.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="mt-10 rounded-xl border border-border bg-card p-8 text-center text-sm text-muted-foreground">
              No products match those filters. Try widening the price range or clearing feature filters.
            </p>
          ) : null}

          {pages > 1 ? (
            <Pagination className="mt-10">
              <PaginationContent>
                {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
                  <PaginationItem key={n}>
                    <PaginationLink
                      href="#"
                      isActive={n === current}
                      onClick={(e) => {
                        e.preventDefault();
                        setPage(n);
                      }}
                    >
                      {n}
                    </PaginationLink>
                  </PaginationItem>
                ))}
              </PaginationContent>
            </Pagination>
          ) : null}
        </div>
      </div>
    </div>
  );
}
