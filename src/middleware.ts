
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  let response = NextResponse.next();
  const cookies = request.cookies.get('next-auth.session-token');

  if (!cookies?.value) {
    response = NextResponse.redirect(
      new URL("/api/auth/signin", request.url)
    );
  }
  return response;
}

export const config = {
  matcher: "/",
};
