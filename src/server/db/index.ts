import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { env } from "../../env";

export const database = drizzle(
  postgres({
    host: env.DATABASE_HOST,
    database: env.DATABASE_NAME,
    ssl: !!env.DATABASE_SSL ? "require" : "prefer",
    password: env.DATABASE_PASSWORD,
    username: env.DATABASE_USERNAME,
    port: env.DATABASE_PORT,
  }),
);
