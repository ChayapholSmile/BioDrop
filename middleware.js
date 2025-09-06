// middleware.js (โค้ดที่ถูกต้อง)

export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/account/:path*",
    "/admin/:path*",
    "/auth/signout",
    "/subscribe",
    "/premium",
  ],
};
