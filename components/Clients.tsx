import { CLIENTS } from "@/data/content";
import FadeIn from "@/components/FadeIn";

export default function Clients() {
  return (
    <section className="border-t border-ink">
      <div className="max-w-[1100px] mx-auto px-6 py-24">
        <FadeIn>
          <h2 className="text-sm font-black tracking-[0.2em] uppercase mb-16">
            <span className="text-accent">04 /</span> CLIENTS
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {CLIENTS.map((group, i) => (
            <FadeIn key={group.category} delay={i * 80}>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted italic mb-3">
                  {group.category}
                </p>
                <p className="text-sm font-bold leading-relaxed">
                  {group.clients.join(", ")}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
