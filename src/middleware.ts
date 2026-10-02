import { NextResponse, type NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

const APEX_HOST = 'fontainesaintmichel.com';
const WWW_HOST = `www.${APEX_HOST}`;
const DEFAULT_LOCALE_PATH = '/en';

export default function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const host = (request.headers.get('host') || '').toLowerCase();

  // www -> apex, permanent (301) so search signals consolidate on one host
  if (host === WWW_HOST) {
    const target = url.clone();
    target.protocol = 'https';
    target.host = APEX_HOST;
    return NextResponse.redirect(target, 301);
  }

  // Root -> default language home, permanent (301)
  if (url.pathname === '/') {
    const target = url.clone();
    target.pathname = DEFAULT_LOCALE_PATH;
    return NextResponse.redirect(target, 301);
  }

  return intlMiddleware(request);
}

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
