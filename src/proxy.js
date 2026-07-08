import { headers } from 'next/headers';
import { NextResponse } from 'next/server'
import { auth } from './app/lib/auth';

// This function can be marked `async` if using `await` inside
export async function proxy(request) {
    await auth.api.getSession({
        headers: await headers() // headers containing the user's session token
    });

if (!auth.api.session) {
    return NextResponse.redirect(new URL('/', request.url))
  }
}

export const config = {
    matcher: ["/dashboard/:path"]
}