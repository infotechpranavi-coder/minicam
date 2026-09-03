import { createFileRoute, Link } from "@tanstack/react-router";
import { BatteryCharging, HardDrive, Play, Smartphone, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works — Setup, App Pairing & Storage | Mini Camerawala" },
      {
        name: "description",
        content:
          "Four simple steps to set up a Mini Camerawala device: charge it, insert an SD card, pair the app over 2.4GHz WiFi and start recording.",
      },
      { property: "og:title", content: "How It Works — Setup, App Pairing & Storage | Mini Camerawala" },
      {
        property: "og:description",
        content: "Visual setup guide covering charging, SD cards, app pairing and footage playback.",
      },
    ],
  }),
  component: HowItWorks,
});

const steps = [
  {
    icon: BatteryCharging,
    title: "Charge fully first",
    body: "Give every new device a full 3-hour charge over USB-C before first use. The LED turns solid when the cell is topped up.",
    detail: "Mains-powered models like the socket and charger cams skip this step entirely.",
  },
  {
    icon: HardDrive,
    title: "Insert and format the card",
    body: "Use a Class 10 / U3 microSD card within the size listed on the product's spec table, then format it inside the device.",
    detail: "Loop recording overwrites the oldest clips automatically once the card fills.",
  },
  {
    icon: Smartphone,
    title: "Pair the app",
    body: "Install the Mini Camerawala app, press and hold the pair button for five seconds, then join the device hotspot and select your 2.4GHz network.",
    detail: "Pairing typically completes in under three minutes. 5GHz networks are not supported.",
  },
  {
    icon: Play,
    title: "Record and review",
    body: "Start a manual recording or switch on motion detection. Footage plays back in the app, or pull the card and open the MP4 files on any computer.",
    detail: "Motion alerts arrive as push notifications with a thumbnail preview.",
  },
];

function HowItWorks() {
  return (
    <div>
      <section className="border-b border-border bg-hero">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">How it works</p>
          <h1 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">Recording in about ten minutes</h1>
          <p className="mt-5 text-sm text-muted-foreground sm:text-base">
            Every Mini Camerawala device ships with a printed quick-start card. Here is the same flow, in full.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <ol className="relative space-y-8 border-l border-border pl-8">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <li className="relative">
                <span className="absolute -left-[3.05rem] flex size-10 items-center justify-center rounded-full border border-border bg-card text-primary">
                  <s.icon className="size-5" />
                </span>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Step {i + 1}
                </p>
                <h2 className="mt-1 font-display text-xl tracking-tight">{s.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
                <p className="mt-2 rounded-lg border border-border bg-card p-3 text-xs text-muted-foreground">
                  {s.detail}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-16 sm:px-6 md:grid-cols-3">
          {[
            {
              icon: Wifi,
              title: "Pairing trouble?",
              body: "Split your router bands or temporarily disable band steering, then retry pairing on the 2.4GHz SSID.",
            },
            {
              icon: HardDrive,
              title: "Card not detected?",
              body: "Format the card as FAT32 or exFAT on a computer, then format again inside the device.",
            },
            {
              icon: BatteryCharging,
              title: "Short runtime?",
              body: "Continuous WiFi streaming roughly halves battery life. Use motion-triggered mode for longer sessions.",
            },
          ].map((t, i) => (
            <Reveal key={t.title} delay={i * 60}>
              <div className="h-full rounded-xl border border-border bg-card p-6">
                <t.icon className="size-5 text-primary" />
                <h3 className="mt-3 font-semibold">{t.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <h2 className="font-display text-3xl tracking-tight">Still stuck?</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Our support team walks customers through setup on WhatsApp seven days a week.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Button asChild size="lg">
            <Link to="/contact">Get setup help</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/faq">Read the FAQ</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
