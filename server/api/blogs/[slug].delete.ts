import { eq } from 'drizzle-orm';
import { blogs } from '../../database/schema';
import { useDB } from '../../utils/db';
import { requireAuth } from '../../utils/auth';

export default defineEventHandler(async (event) => {
  await requireAuth(event);

  const slug = getRouterParam(event, 'slug');
  if (!slug) {
    throw createError({ statusCode: 400, statusMessage: 'Slug is required' });
  }

  const db = useDB(event);

  await db
    .delete(blogs)
    .where(eq(blogs.slug, slug));

  return { success: true };
});
