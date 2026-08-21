import { Truck } from "lucide-react";

export function PromoBar() {
  return (
    <div className="bg-gradient-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2 text-center text-xs font-semibold sm:text-sm">
        <Truck className="size-4 shrink-0" />
        <span>Free shipping over ₹999 · COD available · 12-month warranty on every device</span>
      </div>
    </div>
  );
}
