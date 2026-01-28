"use client";

import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentIndex: number;
  totalImages: number;
  imageAlt: string;
  onPrev: () => void;
  onNext: () => void;
}

export default function LightboxModal({
  isOpen,
  onClose,
  currentIndex,
  totalImages,
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
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 text-white hover:text-gray-300 transition-colors"
        aria-label="Close lightbox"
      >
        <X className="h-8 w-8" strokeWidth={2} />
      </button>

      {/* Navigation */}
      {currentIndex > 0 && (
        <button
          onClick={onPrev}
          className="absolute left-4 p-2 text-white hover:text-gray-300 transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-10 w-10" strokeWidth={2} />
        </button>
      )}

      {currentIndex < totalImages - 1 && (
        <button
          onClick={onNext}
          className="absolute right-4 p-2 text-white hover:text-gray-300 transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="h-10 w-10" strokeWidth={2} />
        </button>
      )}

      {/* Image Placeholder */}
      <div className="max-w-4xl max-h-[80vh] mx-4">
        <div className="bg-gray-800 aspect-video flex items-center justify-center min-w-[300px] sm:min-w-[500px]">
          <span className="text-gray-400 text-center px-4">{imageAlt}</span>
        </div>
      </div>

      {/* Counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
        {currentIndex + 1} / {totalImages}
      </div>
    </div>
  );
}
