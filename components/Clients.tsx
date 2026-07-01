import { CLIENTS } from "@/data/content";

export default function Clients() {
  return (
    <section className="border-t border-ink">
      <div className="max-w-[1200px] mx-auto px-6 py-24">
        <h2 className="text-sm font-black tracking-[0.2em] uppercase mb-16">
          <span className="text-accent">04 /</span> CLIENTS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {CLIENTS.map((group) => (
            <div key={group.category}>
              <p className="text-xs uppercase tracking-widest text-muted italic mb-3">
                {group.category}
              </p>
              <p className="text-sm font-bold leading-relaxed">
                {group.clients.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
