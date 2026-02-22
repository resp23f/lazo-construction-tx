import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Known bot user-agent patterns (search engines, social media crawlers, uptime monitors)
const BOT_PATTERNS = [
  "googlebot",
  "bingbot",
  "slurp",
  "duckduckbot",
  "baiduspider",
  "yandexbot",
  "facebookexternalhit",
  "twitterbot",
  "linkedinbot",
  "whatsapp",
  "telegrambot",
  "applebot",
  "pinterest",
  "semrushbot",
  "ahrefsbot",
  "uptimerobot",
  "vercel",
  "curl",
  "postman",
];

function isBot(userAgent: string): boolean {
  const ua = userAgent.toLowerCase();
  return BOT_PATTERNS.some((bot) => ua.includes(bot));
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Always allow API routes (contact form, webhooks, etc.)
  if (pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  // Always allow static assets and Next.js internals
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/images") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Allow known bots (search engine crawlers, social previews)
  const userAgent = request.headers.get("user-agent") || "";
  if (isBot(userAgent)) {
    return NextResponse.next();
  }

  // Geo-check: block non-US traffic on page routes
  // Next.js 15+ reads geo from Vercel headers (request.geo was removed)
  const country = request.headers.get("x-vercel-ip-country");

  // If no geo data available (local dev, some edge cases), allow through
  if (!country) {
    return NextResponse.next();
  }

  // Allow US traffic
  if (country === "US") {
    return NextResponse.next();
  }

  // Block everything else with a simple 403
  return new NextResponse("Access restricted to the United States.", {
    status: 403,
    headers: { "Content-Type": "text/plain" },
  });
}

export const config = {
  // Run on all routes except static files and Next.js internals
  matcher: ["/((?!_next/static|_next/image|favicon.ico|site.webmanifest).*)"],
};
