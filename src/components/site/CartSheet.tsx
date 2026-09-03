import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Minus, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { formatPrice, products } from "@/data/catalog";
import { useCart } from "@/lib/cart";

export function CartSheet({ trigger }: { trigger: ReactNode }) {
  const { lines, subtotal, setQty, remove, clear } = useCart();

  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent side="right" className="flex w-[90vw] max-w-md flex-col">
        <div className="border-b border-border p-6">
          <h2 className="font-display text-lg tracking-tight">Your cart</h2>
          <p className="text-sm text-muted-foreground">
            {lines.length === 0 ? "No items yet" : `${lines.length} product(s)`}
          </p>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto p-6">
          {lines.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              Browse the catalog and add a device to get started.
            </p>
          ) : (
            lines.map((line) => {
              const p = products.find((x) => x.slug === line.slug);
              if (!p) return null;
              return (
                <div key={line.slug} className="flex gap-3 rounded-lg border border-border bg-card p-3">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    width={80}
                    height={80}
                    className="size-20 rounded-md object-cover"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-semibold">{p.name}</p>
                    <p className="text-sm text-muted-foreground">{formatPrice(p.price)}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <Button variant="outline" size="icon" className="size-7" onClick={() => setQty(p.slug, line.qty - 1)} aria-label="Decrease quantity">
                        <Minus className="size-3" />
                      </Button>
                      <span className="w-6 text-center text-sm">{line.qty}</span>
                      <Button variant="outline" size="icon" className="size-7" onClick={() => setQty(p.slug, line.qty + 1)} aria-label="Increase quantity">
                        <Plus className="size-3" />
                      </Button>
                      <Button variant="ghost" size="icon" className="ml-auto size-7" onClick={() => remove(p.slug)} aria-label="Remove item">
                        <Trash2 className="size-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        <div className="space-y-3 border-t border-border p-6">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Subtotal</span>
            <span className="font-display text-lg tracking-tight">{formatPrice(subtotal)}</span>
          </div>
          <p className="text-xs text-muted-foreground">
            {subtotal >= 999 ? "Free shipping applied." : "Add ₹999+ for free shipping."}
          </p>
          <Button
            className="w-full"
            disabled={lines.length === 0}
            onClick={() => toast.success("Checkout is a demo in this build — our team will call to confirm.")}
          >
            Proceed to checkout
          </Button>
          <div className="flex items-center justify-between">
            <Link to="/shop" className="text-xs text-muted-foreground underline-offset-4 hover:underline">
              Continue shopping
            </Link>
            {lines.length > 0 ? (
              <button onClick={clear} className="text-xs text-muted-foreground underline-offset-4 hover:underline">
                Clear cart
              </button>
            ) : null}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
