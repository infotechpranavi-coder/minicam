import { Truck } from "lucide-react";

export function PromoBar() {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-[72rem] items-center justify-center gap-2.5 px-5 py-2 text-center text-xs font-medium tracking-wide">
        <Truck className="size-3.5 shrink-0 opacity-90" />
        <span>Free shipping over ₹999 · COD available · 12-month warranty</span>
      </div>
    </div>
  );
}
