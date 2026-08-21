import pocket from "@/assets/p-pocket.jpg";
import pen from "@/assets/p-pen.jpg";
import button from "@/assets/p-button.jpg";
import charger from "@/assets/p-charger.jpg";
import watch from "@/assets/p-watch.jpg";
import tracker from "@/assets/p-tracker.jpg";
import detector from "@/assets/p-detector.jpg";
import powerbank from "@/assets/p-powerbank.jpg";
import keychain from "@/assets/p-keychain.jpg";

export type CategorySlug =
  | "pocket-cameras"
  | "pen-cameras"
  | "button-cameras"
  | "wifi-cameras"
  | "night-vision"
  | "trackers"
  | "detectors";

export type Category = {
  slug: CategorySlug;
  name: string;
  tagline: string;
  description: string;
  image: string;
};

export type Product = {
  slug: string;
  name: string;
  category: CategorySlug;
  price: number;
  mrp: number;
  rating: number;
  reviewCount: number;
  badge?: "Best Seller" | "New" | "HD 1080p";
  image: string;
  gallery: string[];
  short: string;
  description: string;
  nightVision: boolean;
  wifi: boolean;
  batteryHours: number;
  specs: Record<string, string>;
  features: string[];
};

export const categories: Category[] = [
  {
    slug: "pocket-cameras",
    name: "Pocket Cameras",
    tagline: "Palm-sized recorders",
    description:
      "Compact magnetic body cameras that record full HD video anywhere — clip them, mount them, pocket them.",
    image: pocket,
  },
  {
    slug: "pen-cameras",
    name: "Pen Cameras",
    tagline: "Desk-ready documentation",
    description:
      "Working ballpoint pens with an integrated lens and one-touch recording for meetings and site visits.",
    image: pen,
  },
  {
    slug: "button-cameras",
    name: "Button Cameras",
    tagline: "Wearable modules",
    description:
      "Ultra-thin lens modules designed to sit flush with clothing or fixtures, with wired power options.",
    image: button,
  },
  {
    slug: "wifi-cameras",
    name: "WiFi Cameras",
    tagline: "Live view on your phone",
    description:
      "App-paired cameras that stream live 2.4GHz video, push motion alerts and record to cloud or SD.",
    image: charger,
  },
  {
    slug: "night-vision",
    name: "Night Vision",
    tagline: "Zero-lux recording",
    description:
      "Infrared-assisted devices that keep recording usable footage when the lights go out.",
    image: watch,
  },
  {
    slug: "trackers",
    name: "GPS Trackers",
    tagline: "Know where it is",
    description:
      "Real-time location trackers for vehicles, luggage and equipment with geofence alerts.",
    image: tracker,
  },
  {
    slug: "detectors",
    name: "Camera Detectors",
    tagline: "Sweep any room",
    description:
      "RF and lens-reflection detectors to check hotel rooms, changing rooms and rentals for hidden devices.",
    image: detector,
  },
];

export const products: Product[] = [
  {
    slug: "sentra-mini-cube-1080",
    name: "Sentra Mini Cube 1080p",
    category: "pocket-cameras",
    price: 2499,
    mrp: 3499,
    rating: 4.7,
    reviewCount: 412,
    badge: "Best Seller",
    image: pocket,
    gallery: [pocket, button, charger],
    short: "Magnetic pocket cube with 1080p recording and 6-hour battery.",
    description:
      "The Mini Cube is our most popular everyday recorder. A magnetic base lets it stick to metal surfaces, while loop recording keeps the last footage safe even when the card fills up.",
    nightVision: true,
    wifi: false,
    batteryHours: 6,
    specs: {
      Resolution: "1920x1080 @ 30fps",
      Sensor: "1/3\" CMOS, 120° lens",
      Storage: "microSD up to 128GB",
      "Battery life": "6 hours continuous",
      Connectivity: "USB-C data + charging",
      Dimensions: "26 x 26 x 26 mm, 32g",
      "Night vision": "6 IR LEDs, up to 5m",
      "In the box": "Camera, magnet mount, USB-C cable, manual",
    },
    features: ["Loop recording", "Motion detection", "Magnetic mount", "IR night vision"],
  },
  {
    slug: "sentra-executive-pen",
    name: "Sentra Executive Pen Cam",
    category: "pen-cameras",
    price: 1999,
    mrp: 2799,
    rating: 4.5,
    reviewCount: 268,
    badge: "HD 1080p",
    image: pen,
    gallery: [pen, pocket, banner()],
    short: "A genuine writing pen that records 1080p video with one click.",
    description:
      "Machined aluminium body, real ink refill and a discreet 1080p lens. Ideal for documenting meetings, inspections and field notes without extra hardware.",
    nightVision: false,
    wifi: false,
    batteryHours: 2,
    specs: {
      Resolution: "1920x1080 @ 30fps",
      Sensor: "1/4\" CMOS, 70° lens",
      Storage: "32GB built-in",
      "Battery life": "2 hours continuous",
      Connectivity: "USB-C",
      Dimensions: "142 x 14 mm, 46g",
      "Night vision": "Not supported",
      "In the box": "Pen, 2 ink refills, USB-C cable",
    },
    features: ["One-click record", "Built-in storage", "Real ink refill"],
  },
  {
    slug: "sentra-button-module",
    name: "Sentra Button Cam Module",
    category: "button-cameras",
    price: 2299,
    mrp: 2999,
    rating: 4.3,
    reviewCount: 141,
    image: button,
    gallery: [button, pocket, pen],
    short: "Flush-fit lens module with 1.5m cable and inline recorder.",
    description:
      "A wearable lens module that sits flush against fabric, wired to a pocket recorder unit. Includes spare button faces to match common shirt styles.",
    nightVision: false,
    wifi: false,
    batteryHours: 4,
    specs: {
      Resolution: "1920x1080 @ 25fps",
      Sensor: "1/4\" CMOS, 90° lens",
      Storage: "microSD up to 64GB",
      "Battery life": "4 hours continuous",
      Connectivity: "Wired module + USB-C",
      Dimensions: "Lens 12mm, recorder 60 x 35 mm",
      "Night vision": "Not supported",
      "In the box": "Module, recorder, 3 button faces, cable",
    },
    features: ["Flush fit", "Spare button faces", "Silent operation"],
  },
  {
    slug: "sentra-charger-wifi-cam",
    name: "Sentra Charger WiFi Cam",
    category: "wifi-cameras",
    price: 3299,
    mrp: 4499,
    rating: 4.6,
    reviewCount: 523,
    badge: "Best Seller",
    image: charger,
    gallery: [charger, pocket, button],
    short: "A working USB charger with live WiFi streaming and motion alerts.",
    description:
      "Charges your phone and streams live 1080p video to the SentraVue app. Motion alerts land on your phone in seconds and footage saves to SD or cloud.",
    nightVision: true,
    wifi: true,
    batteryHours: 0,
    specs: {
      Resolution: "1920x1080 @ 25fps",
      Sensor: "1/3\" CMOS, 110° lens",
      Storage: "microSD up to 128GB + cloud",
      "Battery life": "Mains powered (continuous)",
      Connectivity: "2.4GHz WiFi, app pairing",
      Dimensions: "58 x 42 x 38 mm",
      "Night vision": "IR up to 8m",
      "In the box": "Charger cam, quick-start card",
    },
    features: ["Live view", "Motion push alerts", "Cloud backup", "Two-way charging port"],
  },
  {
    slug: "sentra-night-watch",
    name: "Sentra Night Vision Watch",
    category: "night-vision",
    price: 4499,
    mrp: 5999,
    rating: 4.4,
    reviewCount: 187,
    badge: "New",
    image: watch,
    gallery: [watch, pocket, keychain],
    short: "Wearable watch camera with IR night recording and 32GB storage.",
    description:
      "A genuine digital watch with a front-facing 1080p lens and infrared assist. Records for up to 3 hours per charge and doubles as a voice recorder.",
    nightVision: true,
    wifi: false,
    batteryHours: 3,
    specs: {
      Resolution: "1920x1080 @ 30fps",
      Sensor: "1/3\" CMOS, 100° lens",
      Storage: "32GB built-in",
      "Battery life": "3 hours continuous",
      Connectivity: "USB-C",
      Dimensions: "46mm case, silicone strap",
      "Night vision": "4 invisible IR LEDs, up to 4m",
      "In the box": "Watch, USB-C cable, manual",
    },
    features: ["Invisible IR", "Voice recorder", "Water resistant IPX4"],
  },
  {
    slug: "sentra-gps-tracker-4g",
    name: "Sentra GPS Tracker 4G",
    category: "trackers",
    price: 2799,
    mrp: 3699,
    rating: 4.5,
    reviewCount: 331,
    image: tracker,
    gallery: [tracker, keychain, powerbank],
    short: "Magnetic 4G tracker with live location and geofence alerts.",
    description:
      "Track vehicles, luggage or equipment in real time. A 5000mAh cell gives up to 30 days of standby, and geofence alerts arrive the moment an asset moves.",
    nightVision: false,
    wifi: false,
    batteryHours: 720,
    specs: {
      Resolution: "N/A",
      Sensor: "GPS + LBS + WiFi positioning",
      Storage: "90-day cloud history",
      "Battery life": "Up to 30 days standby",
      Connectivity: "4G LTE (nano SIM)",
      Dimensions: "62 x 62 x 22 mm, 118g",
      "Night vision": "N/A",
      "In the box": "Tracker, magnet base, USB-C cable",
    },
    features: ["Live tracking", "Geofence alerts", "30-day standby", "Magnetic base"],
  },
  {
    slug: "sentra-rf-detector-pro",
    name: "Sentra RF Detector Pro",
    category: "detectors",
    price: 3599,
    mrp: 4799,
    rating: 4.8,
    reviewCount: 209,
    badge: "Best Seller",
    image: detector,
    gallery: [detector, tracker, charger],
    short: "Sweep rooms for hidden cameras, RF bugs and GPS trackers.",
    description:
      "Combines RF signal detection with a lens-reflection finder so you can check hotel rooms and rentals in minutes. Silent vibration mode included.",
    nightVision: false,
    wifi: false,
    batteryHours: 12,
    specs: {
      Resolution: "N/A",
      Sensor: "RF 1MHz–8GHz + IR lens finder",
      Storage: "N/A",
      "Battery life": "12 hours per charge",
      Connectivity: "USB-C charging",
      Dimensions: "108 x 58 x 20 mm",
      "Night vision": "N/A",
      "In the box": "Detector, lens viewer, pouch, cable",
    },
    features: ["RF sweep", "Lens reflection finder", "Silent vibrate mode"],
  },
  {
    slug: "sentra-powerbank-cam",
    name: "Sentra Power Bank Cam",
    category: "wifi-cameras",
    price: 3899,
    mrp: 4999,
    rating: 4.2,
    reviewCount: 96,
    badge: "New",
    image: powerbank,
    gallery: [powerbank, charger, pocket],
    short: "10000mAh power bank with WiFi camera and 20-hour recording.",
    description:
      "A fully functional 10000mAh power bank with a 1080p WiFi camera inside. Long-duration recording makes it useful for site monitoring where mains power is unavailable.",
    nightVision: true,
    wifi: true,
    batteryHours: 20,
    specs: {
      Resolution: "1920x1080 @ 25fps",
      Sensor: "1/3\" CMOS, 120° lens",
      Storage: "microSD up to 256GB",
      "Battery life": "20 hours recording / 10000mAh",
      Connectivity: "2.4GHz WiFi, app pairing",
      Dimensions: "140 x 68 x 15 mm, 210g",
      "Night vision": "IR up to 6m",
      "In the box": "Power bank cam, USB-C cable, pouch",
    },
    features: ["20-hour recording", "Live view", "Real 10000mAh output"],
  },
  {
    slug: "sentra-keychain-cam",
    name: "Sentra Keychain Cam",
    category: "pocket-cameras",
    price: 1499,
    mrp: 1999,
    rating: 4.1,
    reviewCount: 154,
    badge: "HD 1080p",
    image: keychain,
    gallery: [keychain, pocket, pen],
    short: "Featherweight keychain recorder for everyday carry.",
    description:
      "Weighing just 22g, the Keychain Cam clips to keys or a bag strap and records 1080p clips at the press of a button.",
    nightVision: false,
    wifi: false,
    batteryHours: 1.5,
    specs: {
      Resolution: "1920x1080 @ 30fps",
      Sensor: "1/4\" CMOS, 90° lens",
      Storage: "microSD up to 64GB",
      "Battery life": "1.5 hours continuous",
      Connectivity: "USB-C",
      Dimensions: "52 x 26 x 12 mm, 22g",
      "Night vision": "Not supported",
      "In the box": "Keychain cam, USB-C cable",
    },
    features: ["22g body", "One-button record", "Everyday carry"],
  },
  {
    slug: "sentra-ir-bullet-mini",
    name: "Sentra IR Bullet Mini",
    category: "night-vision",
    price: 2999,
    mrp: 3899,
    rating: 4.6,
    reviewCount: 128,
    image: button,
    gallery: [button, detector, charger],
    short: "Zero-lux mini bullet camera for garages and storerooms.",
    description:
      "A tiny bullet-format camera with 12 infrared LEDs for genuine zero-lux recording, plus a screw mount for permanent installs.",
    nightVision: true,
    wifi: true,
    batteryHours: 0,
    specs: {
      Resolution: "2560x1440 @ 25fps",
      Sensor: "1/2.9\" CMOS, 100° lens",
      Storage: "microSD up to 128GB",
      "Battery life": "Mains powered",
      Connectivity: "2.4GHz WiFi",
      Dimensions: "38 x 22 mm barrel",
      "Night vision": "12 IR LEDs, up to 10m",
      "In the box": "Camera, bracket, adapter, screws",
    },
    features: ["2K recording", "Zero-lux IR", "Permanent mount"],
  },
  {
    slug: "sentra-socket-cam",
    name: "Sentra Socket Cam",
    category: "wifi-cameras",
    price: 3199,
    mrp: 4199,
    rating: 4.3,
    reviewCount: 88,
    image: charger,
    gallery: [charger, powerbank, button],
    short: "Wall-socket camera with continuous power and app streaming.",
    description:
      "Installs into a standard socket plate for permanent, always-on monitoring with app streaming and motion-triggered clips.",
    nightVision: true,
    wifi: true,
    batteryHours: 0,
    specs: {
      Resolution: "1920x1080 @ 25fps",
      Sensor: "1/3\" CMOS, 130° lens",
      Storage: "microSD up to 128GB",
      "Battery life": "Mains powered",
      Connectivity: "2.4GHz WiFi",
      Dimensions: "Standard socket plate",
      "Night vision": "IR up to 8m",
      "In the box": "Socket cam, plate, screws",
    },
    features: ["Always-on power", "Wide 130° view", "Motion clips"],
  },
  {
    slug: "sentra-mini-tracker-tag",
    name: "Sentra Mini Tracker Tag",
    category: "trackers",
    price: 1299,
    mrp: 1799,
    rating: 4.0,
    reviewCount: 74,
    image: keychain,
    gallery: [keychain, tracker, pocket],
    short: "Bluetooth tag for keys, wallets and bags with app alerts.",
    description:
      "A slim Bluetooth tracker tag with a 12-month replaceable cell, separation alerts and a last-seen map in the app.",
    nightVision: false,
    wifi: false,
    batteryHours: 8760,
    specs: {
      Resolution: "N/A",
      Sensor: "Bluetooth 5.2 tracking",
      Storage: "N/A",
      "Battery life": "Up to 12 months (CR2032)",
      Connectivity: "Bluetooth LE",
      Dimensions: "38 x 38 x 7 mm, 14g",
      "Night vision": "N/A",
      "In the box": "Tag, keyring, spare cell",
    },
    features: ["Separation alerts", "Last-seen map", "12-month cell"],
  },
];

function banner() {
  return pen;
}

export const featuredProducts = products.filter((p) => p.badge === "Best Seller");

export function productsByCategory(slug: CategorySlug) {
  return products.filter((p) => p.category === slug);
}

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function formatPrice(value: number) {
  return "₹" + value.toLocaleString("en-IN");
}

export type Review = {
  name: string;
  city: string;
  rating: number;
  date: string;
  quote: string;
  product?: string;
};

export const testimonials: Review[] = [
  {
    name: "Rahul Menon",
    city: "Bengaluru",
    rating: 5,
    date: "March 2026",
    quote:
      "Installed the Charger WiFi Cam in our shop stockroom. App pairing took under three minutes and the motion alerts are genuinely instant.",
    product: "Sentra Charger WiFi Cam",
  },
  {
    name: "Priya Deshpande",
    city: "Pune",
    rating: 5,
    date: "February 2026",
    quote:
      "I travel for work and sweep every hotel room with the RF Detector Pro now. Simple to use and the lens finder actually works.",
    product: "Sentra RF Detector Pro",
  },
  {
    name: "Arjun Sethi",
    city: "Delhi",
    rating: 4,
    date: "February 2026",
    quote:
      "Battery on the Mini Cube lasts a full shift. Footage is sharp in daylight and usable indoors with the IR on.",
    product: "Sentra Mini Cube 1080p",
  },
  {
    name: "Neha Iyer",
    city: "Chennai",
    rating: 5,
    date: "January 2026",
    quote:
      "Ordered on a Tuesday, delivered Thursday with COD. Support helped me pick the right SD card over WhatsApp.",
  },
  {
    name: "Vikram Rao",
    city: "Hyderabad",
    rating: 5,
    date: "January 2026",
    quote:
      "The GPS Tracker has been on our delivery van for four months. Geofence alerts saved us a lot of guesswork.",
    product: "Sentra GPS Tracker 4G",
  },
  {
    name: "Sana Qureshi",
    city: "Mumbai",
    rating: 4,
    date: "December 2025",
    quote:
      "Pen cam is discreet and writes properly, which sounds obvious but the one I bought earlier elsewhere did not.",
    product: "Sentra Executive Pen Cam",
  },
];

export const faqs: { category: string; q: string; a: string }[] = [
  {
    category: "Shipping",
    q: "How long does delivery take?",
    a: "Metro cities usually receive orders in 2–3 working days; the rest of India takes 4–6 working days. You get a tracking link by SMS and email as soon as the parcel is picked up.",
  },
  {
    category: "Shipping",
    q: "Is shipping free?",
    a: "Shipping is free on every prepaid or COD order above ₹999. Below that, a flat ₹79 handling charge applies.",
  },
  {
    category: "Shipping",
    q: "Do you offer cash on delivery?",
    a: "Yes. COD is available across 24,000+ pin codes. Orders above ₹10,000 require a small prepaid token amount.",
  },
  {
    category: "Returns",
    q: "What is your return policy?",
    a: "You have 7 days from delivery to request a return for any unused product in its original packaging. We arrange a reverse pickup wherever our courier partners operate.",
  },
  {
    category: "Returns",
    q: "What if the product arrives damaged?",
    a: "Send us an unboxing photo or video within 48 hours of delivery and we ship a replacement immediately at no cost.",
  },
  {
    category: "Warranty",
    q: "What does the warranty cover?",
    a: "Every device carries a 12-month warranty against manufacturing and component defects. Physical damage, water ingress and unauthorised repairs are not covered.",
  },
  {
    category: "Warranty",
    q: "How do I claim warranty service?",
    a: "Message our support team with your order ID and a short description. We issue a service ticket and a prepaid shipping label within one working day.",
  },
  {
    category: "Usage",
    q: "Which memory card should I use?",
    a: "Use a Class 10 / U3 microSD card from a known brand, formatted in the device before first use. Match the card size to the maximum listed on the product's spec table.",
  },
  {
    category: "Usage",
    q: "Do WiFi cameras work on 5GHz networks?",
    a: "Our WiFi devices connect on 2.4GHz only, which gives better range through walls. Most routers broadcast both bands — just select the 2.4GHz SSID during pairing.",
  },
  {
    category: "Usage",
    q: "Can I view footage when I am away from home?",
    a: "Yes. Once a WiFi camera is paired and connected to your home network, the app streams remotely over mobile data.",
  },
  {
    category: "Usage",
    q: "Is it legal to use these devices?",
    a: "Recording your own property, vehicle or business premises is generally permitted. Recording people in private spaces without consent is not. Please check local law before use — we sell these devices for lawful security purposes only.",
  },
];
