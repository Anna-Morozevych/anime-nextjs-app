import { NextResponse, type NextRequest } from "next/server";

// function for chack information about user
// if user is not defind => redirect to home page

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const user = request.cookies.get('user');

  if (!user) {
    return NextResponse.redirect(new URL("/", request.url));
  };


  return response;
}

// Protected page
export const config = {
  matcher: ["/information-page"]
}