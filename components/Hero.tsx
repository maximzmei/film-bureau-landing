import Image from "next/image";

export default function Hero() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20 md:py-28 relative overflow-hidden">
      <div className="absolute right-0 top-8 opacity-10 pointer-events-none select-none hidden md:block">
        <Image
          src="/images/elements/rounds.png"
          alt=""
          width={320}
          height={320}
          priority
        />
      </div>

      <div className="relative z-10 max-w-2xl">
        <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight">
          film bureau
          <span className="text-accent">.</span>
        </h1>
        <p className="mt-6 text-base md:text-lg text-muted leading-relaxed max-w-md">
          Full-cycle video production. We develop concepts and scripts, shoot,
          edit, animate, and adapt content for any platform.
        </p>
      </div>
    </section>
  );
}
