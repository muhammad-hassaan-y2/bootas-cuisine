export { auth as middleware } from "./auth";

export const config = {
  matcher: [
    "/bestselling",
    "/desi-taste",
    "/fast-food",
    "/home",
    "/sides",
     // Ensure login page is also handled by middleware
    "/" // Protect the home page
  ],
};