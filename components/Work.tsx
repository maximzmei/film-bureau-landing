import { VIDEOS } from "@/data/content";
import VideoThumbnail from "@/components/VideoThumbnail";
import FadeIn from "@/components/FadeIn";

export default function Work() {
  return (
    <section id="work" className="border-t border-ink">
      <div className="max-w-[1100px] mx-auto px-6 py-24">
        <FadeIn>
          <h2 className="text-sm font-black tracking-[0.2em] uppercase mb-16">
            <span className="text-accent">03 /</span> SELECTED WORK
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {VIDEOS.map((video, i) => (
            <FadeIn key={video.id} delay={i * 100}>
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative aspect-video overflow-hidden bg-gray-100">
                  <VideoThumbnail videoId={video.id} title={video.title} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M6 4l12 6-12 6V4z" fill="#0A0A0A" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <p className="text-sm">
                    <span className="font-black">{video.title}</span>
                    <span className="text-muted"> | {video.description}</span>
                  </p>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
