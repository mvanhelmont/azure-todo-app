import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
    NEXTAUTH_SECRET:
      process.env.NODE_ENV === "production"
        ? z.string()
        : z.string().optional(),
    NEXTAUTH_URL: z.preprocess(
      // This makes Vercel deployments not fail if you don't set NEXTAUTH_URL
      // Since NextAuth.js automatically uses the VERCEL_URL if present.
      (str) => process.env.VERCEL_URL ?? str,
      // VERCEL_URL doesn't include `https` so it cant be validated as a URL
      process.env.VERCEL ? z.string() : z.string().url(),
    ),

    // Database
    DATABASE_HOST: z.string().min(1),
    DATABASE_PORT: z.coerce.number().min(1).max(65535),
    DATABASE_NAME: z.string().min(1),
    DATABASE_USERNAME: z.string().min(1),
    DATABASE_PASSWORD: z.string().min(1),
    DATABASE_SSL: z.boolean({ coerce: true }).default(false),
  },

  client: {},

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    DATABASE_HOST: process.env.DATABASE_HOST,
    DATABASE_NAME: process.env.DATABASE_NAME,
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
    DATABASE_PORT: process.env.DATABASE_PORT,
    DATABASE_SSL: process.env.DATABASE_SSL,
    DATABASE_USERNAME: process.env.DATABASE_USERNAME,
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION || !!process.env.CI,
  emptyStringAsUndefined: true,
});
