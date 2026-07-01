import Image from "next/image";
import { HERO } from "@/data/content";
import FadeIn from "@/components/FadeIn";

export default function Hero() {
  return (
    <section className="max-w-[1100px] mx-auto px-6 py-20 md:py-28 relative overflow-hidden">
      <div className="absolute right-0 top-8 opacity-10 pointer-events-none select-none hidden md:block">
        <Image
          src="/images/elements/rounds.png"
          alt=""
          width={320}
          height={320}
          priority
        />
      </div>

      <div className="relative z-10 text-center">
        <FadeIn>
          <h1 className="text-[clamp(2.5rem,_7vw,_6rem)] font-black leading-none tracking-tight">
            {HERO.brand}
            <span className="text-accent">.</span>
          </h1>
        </FadeIn>
        <FadeIn delay={150}>
          <p className="mt-8 text-base md:text-lg text-muted leading-relaxed max-w-xl mx-auto">
            {HERO.tagline}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
