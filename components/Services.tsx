import { SERVICES } from "@/data/content";

export default function Services() {
  return (
    <section id="services" className="border-t border-ink">
      <div className="max-w-[1200px] mx-auto px-6 py-24">
        <h2 className="text-sm font-black tracking-[0.2em] uppercase mb-16">
          <span className="text-accent">02 /</span> SERVICES
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink">
          {SERVICES.map((service) => (
            <div key={service.title} className="bg-white p-8 flex flex-col gap-4">
              <span className="text-accent font-black text-lg">{service.number}</span>
              <h3 className="font-black text-xl tracking-tight">{service.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
