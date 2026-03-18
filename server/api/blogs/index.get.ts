import { desc, eq } from 'drizzle-orm';
import { blogs } from '../../database/schema';
import { useDB } from '../../utils/db';

export default defineEventHandler(async (event) => {
  const db = useDB(event);
  const query = getQuery(event);

  // If admin query param is present, check auth and return all
  const showAll = query.all === 'true';
  if (showAll) {
    const { requireAuth } = await import('../../utils/auth');
    await requireAuth(event);

    const allBlogs = await db
      .select()
      .from(blogs)
      .orderBy(desc(blogs.createdAt));

    return allBlogs.map((b) => ({
      ...b,
      tags: (b.tags ? JSON.parse(b.tags) : []) as string[],
    }));
  }

  // Public: only published posts
  const publishedBlogs = await db
    .select()
    .from(blogs)
    .where(eq(blogs.status, 'published'))
    .orderBy(desc(blogs.publishedAt));

  return publishedBlogs.map((b) => ({
    ...b,
    tags: (b.tags ? JSON.parse(b.tags) : []) as string[],
  }));
});
