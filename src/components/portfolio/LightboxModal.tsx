"use client";

import { useCallback, useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentIndex: number;
  totalImages: number;
  imageSrc: string;
  imageAlt: string;
  imageTitle?: string;
  imageCategory?: string;
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
  imageTitle,
  imageCategory,
  onPrev,
  onNext,
}: LightboxModalProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [visible, setVisible] = useState(false);
  const [dimensions, setDimensions] = useState<{ w: number; h: number } | null>(null);
  const [prevIsOpen, setPrevIsOpen] = useState(false);
  const [prevImageSrc, setPrevImageSrc] = useState(imageSrc);

  // Derive visible state from isOpen prop changes (no setState in effect)
  if (isOpen !== prevIsOpen) {
    setPrevIsOpen(isOpen);
    if (!isOpen) {
      setVisible(false);
    }
  }

  // Reset loaded state when image changes (no setState in effect)
  if (imageSrc !== prevImageSrc) {
    setPrevImageSrc(imageSrc);
    setImageLoaded(false);
    setDimensions(null);
  }

  const handleClose = useCallback(() => {
    setVisible(false);
    setTimeout(onClose, 200);
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.dataset.lightboxOpen = "true";
      requestAnimationFrame(() => setVisible(true));

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") handleClose();
        if (e.key === "ArrowLeft") onPrev();
        if (e.key === "ArrowRight") onNext();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
        delete document.body.dataset.lightboxOpen;
      };
    }
  }, [isOpen, handleClose, onPrev, onNext]);

  const isPortrait = dimensions ? dimensions.h > dimensions.w : false;

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      {/* Frosted glass backdrop — separate opacity layer so blur isn't animated */}
      <div className={`absolute inset-0 bg-white/60 backdrop-blur-xl pointer-events-none transition-opacity duration-150 will-change-[opacity] ${
        visible ? "opacity-100" : "opacity-0"
      }`} />
      {/* Click-to-close zone — top portion only, avoids accidental close near nav */}
      <div className={`absolute inset-0 bottom-[35%] z-[5] cursor-pointer transition-opacity duration-150 ${visible ? "opacity-100" : "opacity-0"}`} onClick={handleClose} />

      {/* Fixed bottom bar — arrows + info, never moves */}
      <div className={`fixed bottom-[8%] sm:bottom-[16%] left-1/2 -translate-x-1/2 z-30 flex items-center gap-4 sm:gap-6 transition-opacity duration-150 ${visible ? "opacity-100" : "opacity-0"}`} onClick={(e) => e.stopPropagation()}>
        <button
          onClick={currentIndex > 0 ? onPrev : undefined}
          className={`p-2 rounded-full transition-all shadow-sm ${
            currentIndex > 0
              ? "bg-white/90 text-gray-600 hover:bg-white hover:text-gray-900"
              : "bg-white/40 text-gray-300 cursor-default"
          }`}
          aria-label="Previous image"
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={2} />
        </button>

        <div className="text-center min-w-[140px]">
          {imageTitle && (
            <p className="text-sm font-semibold text-primary">{imageTitle}</p>
          )}
          <p className="text-xs text-text-muted">
            {imageCategory && <span className="uppercase tracking-wide">{imageCategory} · </span>}
            {currentIndex + 1} / {totalImages}
          </p>
        </div>

        <button
          onClick={currentIndex < totalImages - 1 ? onNext : undefined}
          className={`p-2 rounded-full transition-all shadow-sm ${
            currentIndex < totalImages - 1
              ? "bg-white/90 text-gray-600 hover:bg-white hover:text-gray-900"
              : "bg-white/40 text-gray-300 cursor-default"
          }`}
          aria-label="Next image"
          disabled={currentIndex === totalImages - 1}
        >
          <ChevronRight className="h-5 w-5" strokeWidth={2} />
        </button>
      </div>

      {/* Image */}
      <div
        className={`relative z-10 mx-4 flex flex-col items-center transition-opacity duration-150 ${
          visible ? "opacity-100" : "opacity-0"
        } ${isPortrait ? "max-w-sm sm:max-w-md" : "max-w-4xl w-full"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* X — anchored to image top-right corner */}
        <button
          onClick={(e) => { e.stopPropagation(); handleClose(); }}
          className="absolute -top-3 -right-3 z-30 p-2 rounded-full bg-white/90 text-gray-600 hover:bg-white hover:text-gray-900 transition-all shadow-md"
          aria-label="Close lightbox"
        >
          <X className="h-4 w-4" strokeWidth={2.5} />
        </button>

        {/* Image */}
        <div className={`relative w-full overflow-hidden rounded-xl shadow-2xl ${
          isPortrait ? "max-h-[55vh] sm:max-h-[70vh]" : "max-h-[60vh] sm:max-h-[75vh]"
        }`}>
          {!imageLoaded && (
            <div className="aspect-[4/3]">
              <Skeleton height="100%" width="100%" borderRadius={0} />
            </div>
          )}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt={imageAlt}
            className={`w-full h-auto max-h-[60vh] sm:max-h-[75vh] object-contain transition-opacity duration-300 ${
              imageLoaded ? "opacity-100" : "opacity-0 absolute"
            }`}
            onLoad={(e) => {
              const img = e.currentTarget;
              setDimensions({ w: img.naturalWidth, h: img.naturalHeight });
              setImageLoaded(true);
            }}
          />
        </div>
      </div>
    </div>
  );
}
