import { NextRequest, NextResponse } from 'next/server'

import languageMiddleware from './middlewares/language'

type Middleware = (req: NextRequest) => NextResponse | Promise<NextResponse | unknown> | unknown

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|assets|favicon.ico|sw.js|site|android-chrome|apple-touch|favicon-|font).*)',
  ],
}

const middlewares: Middleware[] = [languageMiddleware]

export async function middleware(req: NextRequest) {
  for (let i = 0, len = middlewares.length; i < len; i++) {
    const mw = middlewares[i]
    const result = await mw(req)

    if (result) {
      return result
    }
  }

  return NextResponse.next()
}
