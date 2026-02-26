import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    // 環境変数 MAINTENANCE_MODE が "true" の場合
    const isMaintenanceMode = process.env.MAINTENANCE_MODE === 'true'

    // メンテナンス画面自体と、画像などの静的ファイルは除外する
    const isMaintenancePage = request.nextUrl.pathname === '/maintenance'
    const isStaticFile = request.nextUrl.pathname.includes('.')

    if (isMaintenanceMode && !isMaintenancePage && !isStaticFile) {
        // メンテナンス画面へリダイレクト
        return NextResponse.redirect(new URL('/maintenance', request.url))
    }

    return NextResponse.next()
}

// （オプション）特定のパスだけミドルウェアを実行させない設定
export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
}
