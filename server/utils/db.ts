import { drizzle } from 'drizzle-orm/d1';
import * as schema from '../database/schema';
import type { H3Event } from 'h3';

export function useDB(event: H3Event) {
  const env = event.context.cloudflare?.env;
  
  if (!env?.DB) {
    throw createError({
      statusCode: 500,
      statusMessage: "D1 Database binding 'DB' is missing from Cloudflare environment",
    });
  }

  return drizzle(env.DB, { schema });
}
