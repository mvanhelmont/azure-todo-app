import { type Config } from "drizzle-kit";

import { env } from "@/env";

export default {
  schema: "./src/server/db/schema.ts",
  driver: "pg",
  dbCredentials: {
    database: "production",
    host: env.DATABASE_HOST,
    password: env.DATABASE_PASSWORD,
    port: env.DATABASE_PORT,
    ssl: env.DATABASE_SSL,
    user: env.DATABASE_USERNAME,
  },
} satisfies Config;
