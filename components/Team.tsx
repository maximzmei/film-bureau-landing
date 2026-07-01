import Image from "next/image";
import { TEAM } from "@/data/content";

export default function Team() {
  return (
    <section id="about" className="border-t border-ink">
      <div className="max-w-[1100px] mx-auto px-6 py-24">
        <h2 className="text-sm font-black tracking-[0.2em] uppercase mb-16">
          <span className="text-accent">01 /</span> OUR TEAM
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-8">
          {TEAM.map((member) => (
            <div key={member.name} className="flex flex-col items-center text-center gap-3">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 shrink-0">
                {member.photo ? (
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover grayscale"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-300" />
                )}
              </div>
              <div>
                <p className="font-black text-sm leading-tight">{member.name}</p>
                <p className="text-muted text-xs mt-1 leading-snug">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
