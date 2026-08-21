import { MessageCircle, Phone } from "lucide-react";

export function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex size-12 items-center justify-center rounded-full bg-success text-success-foreground shadow-elevated transition-transform hover:scale-110"
      >
        <MessageCircle className="size-5" />
      </a>
      <a
        href="tel:+919876543210"
        aria-label="Call us"
        className="flex size-12 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-elevated transition-transform hover:scale-110"
      >
        <Phone className="size-5" />
      </a>
    </div>
  );
}
