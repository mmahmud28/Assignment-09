import { headers } from 'next/headers';
import { NextResponse } from 'next/server'

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
    matcher: ["/tutors/:id", "/tutors/:id/*", "/dashboard/:path*"]
}