import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const token = request.cookies.get('token')?.value
    const { pathname } = request.nextUrl

    // Define public routes (accessible only when NOT logged in)
    const isPublicRoute = pathname === '/login' || pathname === '/signup'

    // Define protected routes (accessible only when logged in)
    // For now, let's assume everything except public routes and static assets are protected
    // Or we explicitly protect the home page as requested
    const isHomeRoute = pathname === '/'

    if (!token) {
        // Not logged in: Redirect home to login
        if (isHomeRoute) {
            return NextResponse.redirect(new URL('/login', request.url))
        }
    } else {
        // Logged in: Redirect login/signup to home
        if (isPublicRoute) {
            return NextResponse.redirect(new URL('/', request.url))
        }
    }

    return NextResponse.next()
}

// Match all routes except for static files and api
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
}
