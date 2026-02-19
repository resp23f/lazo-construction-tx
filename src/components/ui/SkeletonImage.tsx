"use client";

import { useState } from "react";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";

interface SkeletonImageProps {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function SkeletonImage({
  src,
  alt,
  sizes,
  className = "object-cover",
  style,
}: SkeletonImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <Skeleton
          height="100%"
          width="100%"
          className="!absolute !inset-0 !leading-none"
          borderRadius={0}
        />
      )}
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className={`${className} transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
        style={style}
        onLoad={() => setLoaded(true)}
      />
    </>
  );
}
