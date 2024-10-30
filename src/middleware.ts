import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Consider all routes as public except /appointment
const isPrivateRoute = createRouteMatcher(["/appointment(.*)"]);

export default clerkMiddleware(async (auth, request) => {
  if (isPrivateRoute(request)) {
    // Protect the /appointment route
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
