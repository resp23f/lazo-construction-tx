"use client";

import Skeleton from "react-loading-skeleton";

export default function PortfolioSkeleton() {
  return (
    <>
      {/* Filter bar skeleton */}
      <div className="flex gap-3 mb-10 overflow-x-auto pb-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton
            key={i}
            width={90}
            height={40}
            borderRadius={8}
          />
        ))}
      </div>

      {/* Grid skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-xl border border-gray-200 overflow-hidden bg-white">
            <Skeleton
              height={0}
              containerClassName="block aspect-[4/3]"
              className="!leading-none"
              style={{ display: "block", height: "100%" }}
            />
            <div className="p-4">
              <Skeleton width={80} height={12} />
              <Skeleton width={150} height={18} className="mt-2" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
