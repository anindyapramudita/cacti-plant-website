import { jwtVerify } from "jose";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const secret = process.env.SECRET;

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/api/reset-password")) {
    const jwt = request.headers.get("authorization")?.split(" ")[1];
    if (jwt) {
      const { payload } = await jwtVerify(
        jwt,
        new TextEncoder().encode(secret)
      );

      const newRequestHeaders = new Headers(request.headers);
      newRequestHeaders.set("user-email", payload.email as string);

      const response = NextResponse.next({
        request: {
          headers: newRequestHeaders,
        },
      });

      return response;
    }
    return new NextResponse(
      JSON.stringify({ success: false, message: "token has expired" }),
      { status: 401, headers: { "content-type": "application/json" } }
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/api/reset-password/:path*",
};
