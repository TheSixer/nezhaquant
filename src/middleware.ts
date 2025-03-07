import { NextRequest, NextResponse } from 'next/server'
import { fallbackLng, languages } from '@/i18n/settings'
import acceptLanguage from 'accept-language'

import languageMiddleware from './middlewares/language'

type Middleware = (req: NextRequest) => NextResponse | Promise<NextResponse | unknown> | unknown

acceptLanguage.languages(languages)

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|site.webmanifest|robots.txt).*)']
}

export const middlewares: Middleware[] = [languageMiddleware]

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // 检查这个项目是否使用[lang]文件夹结构
  // 如果已经有语言前缀，不做处理
  if (languages.some(lng => pathname.startsWith(`/${lng}/`) || pathname === `/${lng}`)) {
    return NextResponse.next()
  }

  // 从cookie或请求头获取语言偏好
  let lng = acceptLanguage.get(request.cookies.get('i18next')?.value || request.headers.get('Accept-Language') || '')
  if (!lng || !languages.includes(lng)) lng = fallbackLng

  // 所有路由都应该有语言前缀
  // 即使是中文也需要前缀，除非您的项目特别设计为中文无前缀
  return NextResponse.redirect(new URL(`/${lng}${pathname === '/' ? '' : pathname}`, request.url))
}
