export { default } from "next-auth/middleware"

export const config = {
    matcher: ['/dash', '/epos', '/reports', '/files']
}