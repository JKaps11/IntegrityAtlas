import { auth } from "@/lib/auth/auth"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export default auth(async (req: NextRequest) => {
  // Optionally you can inspect req.auth here, but default is enough.

  return NextResponse.next()
})

export const config = {
  matcher: [
    "/api/authenticated/:path*",
    "/app/authenticated/:path*",
  ],
}
