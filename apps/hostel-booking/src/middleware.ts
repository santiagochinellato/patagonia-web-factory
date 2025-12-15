import createMiddleware from 'next-intl/middleware';
import {routing} from './lib/navigation';
import { NextRequest } from 'next/server';
 
const handleI18n = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const response = handleI18n(request);

  // Currency Detection Logic
  // Try to get country from Vercel headers or NextRequest geo
  const country = request.headers.get('x-vercel-ip-country') || (request as any).geo?.country || 'US';
  
  let currency = 'USD';
  if (country === 'AR') {
    currency = 'ARS';
  }

  // Set cookie if not present, to allow user override later
  if (!request.cookies.has('currency_preference')) {
    response.cookies.set('currency_preference', currency, {
        path: '/', 
        maxAge: 60 * 60 * 24 * 30 // 30 days
    });
  }

  return response;
}
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(es|en|pt)/:path*']
};
