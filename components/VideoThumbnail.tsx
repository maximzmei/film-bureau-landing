"use client";

import { useState } from "react";
import Image from "next/image";

interface VideoThumbnailProps {
  videoId: string;
  title: string;
}

export default function VideoThumbnail({ videoId, title }: VideoThumbnailProps) {
  const [src, setSrc] = useState(
    `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  );

  return (
    <Image
      src={src}
      alt={title}
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
      unoptimized
      onError={() =>
        setSrc(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`)
      }
    />
  );
}
