import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  const session = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
    raw: true,
  });

  const { pathname } = req.nextUrl;

  const protectedRoutes = ['/account', '/orders'];

  const isProtectedRoute = protectedRoutes.some((path) =>
    pathname.startsWith(path)
  );

  if (isProtectedRoute && !session) {
    const url = req.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export { default } from 'next-auth/middleware';

export const config = { matcher: ['/account*', '/orders*'] };
