import { ShieldCheck, Banknote } from "lucide-react";

export function PromoBar() {
  return (
    <div className="relative overflow-hidden bg-gradient-primary text-primary-foreground">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 50% 120% at 10% 50%, oklch(1 0 0 / 0.35), transparent 55%), radial-gradient(ellipse 40% 100% at 90% 50%, oklch(0.2 0.04 235 / 0.35), transparent 50%)",
        }}
      />
      <div className="relative mx-auto flex max-w-[84rem] items-center justify-center gap-3 px-4 py-2 text-center text-[0.7rem] font-semibold tracking-[0.04em] sm:px-7">
        <Banknote className="size-3.5 shrink-0 opacity-90" />
        <span>COD available nationwide</span>
        <span className="hidden opacity-40 sm:inline">·</span>
        <span className="hidden items-center gap-1.5 sm:inline-flex">
          <ShieldCheck className="size-3.5 opacity-90" />
          12-month warranty
        </span>
      </div>
    </div>
  );
}
