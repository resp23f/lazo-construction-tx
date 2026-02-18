"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentIndex: number;
  totalImages: number;
  imageSrc: string;
  imageAlt: string;
  onPrev: () => void;
  onNext: () => void;
}

export default function LightboxModal({
  isOpen,
  onClose,
  currentIndex,
  totalImages,
  imageSrc,
  imageAlt,
  onPrev,
  onNext,
}: LightboxModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
        if (e.key === "ArrowLeft") onPrev();
        if (e.key === "ArrowRight") onNext();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "";
      };
    }
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center cursor-pointer" onClick={onClose}>
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 text-white hover:text-gray-300 transition-colors"
        aria-label="Close lightbox"
      >
        <X className="h-8 w-8" strokeWidth={2} />
      </button>

      {/* Navigation - Previous */}
      {currentIndex > 0 && (
        <button
          onClick={onPrev}
          className="absolute left-4 z-10 p-2 text-white hover:text-gray-300 transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-10 w-10" strokeWidth={2} />
        </button>
      )}

      {/* Navigation - Next */}
      {currentIndex < totalImages - 1 && (
        <button
          onClick={onNext}
          className="absolute right-4 z-10 p-2 text-white hover:text-gray-300 transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="h-10 w-10" strokeWidth={2} />
        </button>
      )}

      {/* Image */}
      <div className="relative max-w-5xl w-full max-h-[85vh] mx-4 cursor-default" onClick={(e) => e.stopPropagation()}>
        <div className="relative w-full h-[85vh]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-3 py-1 rounded-full">
        {currentIndex + 1} / {totalImages}
      </div>
    </div>
  );
}
