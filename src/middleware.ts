import { NextRequest, NextResponse } from "next/server";

const PRODUCTION_HOST = "torchlink.com";
const CANONICAL_HOST = "https://www.torchlink.com";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";

  // Redirect non-www production domain to www (301 permanent for SEO)
  if (host === PRODUCTION_HOST) {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.host = "www.torchlink.com";
    return NextResponse.redirect(url.toString(), 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
