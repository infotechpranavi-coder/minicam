import { ArrowUp, Download, MessageCircle, Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function FloatingContact() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed right-3 bottom-5 z-40 flex flex-col gap-2.5 sm:right-5">
      <button
        type="button"
        onClick={scrollTop}
        aria-label="Back to top"
        className="flex size-11 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-elevated transition-transform hover:scale-110"
      >
        <ArrowUp className="size-4" />
      </button>
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex size-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elevated transition-transform hover:scale-110"
      >
        <MessageCircle className="size-4" />
      </a>
      <a
        href="tel:+919876543210"
        aria-label="Call us"
        className="flex size-11 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-elevated transition-transform hover:scale-110"
      >
        <Phone className="size-4" />
      </a>
      <Link
        to="/shop"
        aria-label="Browse catalog"
        className="flex size-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-elevated transition-transform hover:scale-110"
      >
        <Download className="size-4" />
      </Link>
    </div>
  );
}
