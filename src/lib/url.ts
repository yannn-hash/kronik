/**
 * Helper function to determine the base URL across different environments:
 * - Development (Local): http://localhost:3000
 * - Preview (Pre-Production on Vercel): https://<deployment-url>.vercel.app
 * - Production: https://<custom-domain> or https://kronik.vercel.app
 */
export function getSiteURL(): string {
  // If running in browser, use current window origin
  if (typeof window !== "undefined" && window.location.origin) {
    return window.location.origin;
  }

  // Set by custom production domain configuration
  let url =
    process.env.NEXT_PUBLIC_SITE_URL ||
    // Automatically populated by Vercel for Preview & Production deployments
    process.env.NEXT_PUBLIC_VERCEL_URL ||
    process.env.VERCEL_URL ||
    // Fallback for local development
    "http://localhost:3000";

  // Ensure protocol is included
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = `https://${url}`;
  }

  // Remove trailing slash for consistency
  return url.replace(/\/+$/, "");
}

/**
 * Returns a full absolute URL for a given path across all environments.
 */
export function getAbsoluteURL(path: string = ""): string {
  const baseURL = getSiteURL();
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${baseURL}${cleanPath}`;
}

/**
 * Helper to identify the current deployment environment.
 */
export function getEnvironment(): "production" | "preview" | "development" {
  const env =
    process.env.NEXT_PUBLIC_VERCEL_ENV ||
    process.env.VERCEL_ENV ||
    process.env.NODE_ENV;

  if (env === "production") return "production";
  if (env === "preview") return "preview";
  return "development";
}
