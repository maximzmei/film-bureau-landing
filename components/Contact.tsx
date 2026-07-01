import { CONTACT } from "@/data/content";

export default function Contact() {
  return (
    <section id="contact" className="border-t-4 border-accent">
      <div className="max-w-[1100px] mx-auto px-6 py-24">
        <h2 className="text-sm font-black tracking-[0.2em] uppercase mb-16">
          <span className="text-accent">05 /</span> CONTACT
        </h2>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
          <a
            href={`mailto:${CONTACT.email}`}
            className="hover:text-accent transition-colors font-bold"
          >
            {CONTACT.email}
          </a>
          <span className="text-muted hidden sm:inline">•</span>
          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            {CONTACT.instagramHandle}
          </a>
          <span className="text-muted hidden sm:inline">•</span>
          <a
            href={CONTACT.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            {CONTACT.telegramHandle}
          </a>
          <span className="text-muted hidden sm:inline">•</span>
          <a
            href={`tel:${CONTACT.phone}`}
            className="hover:text-accent transition-colors"
          >
            {CONTACT.phone}
          </a>
        </div>
      </div>

      <div className="border-t border-ink">
        <div className="max-w-[1100px] mx-auto px-6 py-4 flex items-center justify-between text-xs text-muted">
          <span>© 2026 Film Bureau</span>
          <span className="font-display text-base">film bureau.</span>
        </div>
      </div>
    </section>
  );
}
