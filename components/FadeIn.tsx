"use client";

import type { ReactNode } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";

interface Props {
  delay?: number;
  className?: string;
  children: ReactNode;
}

export default function FadeIn({ delay = 0, className, children }: Props) {
  const { ref, style } = useFadeIn(delay);
  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
}
